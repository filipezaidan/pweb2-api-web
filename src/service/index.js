const { PrismaClient } = require("@prisma/client");
const { user } = new PrismaClient();

module.exports = {

    async index() {
        const record = await user.findMany();

        return record;
    },

    async get(id) {
        const record = await user.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return record;
    },

    async getByEmail(email) {
        const record = await user.findUnique({
            where: {
                email
            }
        });

        return record;
    },

    async edit(id, data) {
        const record = await user.update({
            where: {
                id: parseInt(id)
            },
            data: {
                ...data
            }
        });

        return record;
    },

    async del(id) {
        await user.delete({
            where: {
                id: parseInt(id)
            }
        });
    },

    async create(email, name, password) {
        const record = await user.create({
            data: {
                email, name, password
            }
        });

        return record;
    }

}