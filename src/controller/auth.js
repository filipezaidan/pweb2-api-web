const service = require("../service");

module.exports = {

    async verify(req, res, next) {
        if (req._userId) return next();

        const id = req.header("Authorization");

        if (!id) {
            return res.status(401).send("Unathourized");
        }

        const record = await service.get(id);

        if (!record || record === null) {
            return res.status(401).send("Unathourized");
        }

        req._userId = id;

        return next();
    },

    async login(req, res) {
        const { email, password } = req.body;
        
        const record = await service.getByEmail(email);

        if (!record || record === null) {
            return res.status(401).send("Unathourized");
        }

        if (record.password !== password) {
            return res.status(401).send("Unathourized");
        }

        const { id } = record;

        req._userId = id;

        return res.json({ message: "OK", id });
    },

    async register(req, res) {
        const { email, name, password } = req.body;

        const record = await service.getByEmail(email);

        if (record) {
            return res.status(401).send("Email already exists");
        }

        const { id, createdAt } = await service.create(email, name, password);

        return res.json({ message: "OK", id, email, name, password, createdAt });
    }

}