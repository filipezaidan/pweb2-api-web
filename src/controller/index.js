const service = require("../service");

module.exports = {

    async index(req, res) {
        const record = await service.index();

        return res.json(record);
    },

    async get(req, res) {
        const { id } = req.params;

        const record = await service.get(parseInt(id));

        return res.json(record);
    },

    async edit(req, res) {
        const { id } = req.params;

        const record = await service.edit(parseInt(id), req.body);

        return res.json(record);
    },

    async del(req, res) {
        const { id } = req.params;

        await service.del(parseInt(id));

        return res.send("OK");
    }

}