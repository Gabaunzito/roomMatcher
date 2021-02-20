const userEntity = require("../entity/userEntity")

module.exports = {
    async createUser(request, response) {
        const user = request.body
        await userEntity.create(user)
            return response.status(201).json(user);
    },

    getUser(req, res) {
        return res.send("aloaloalo");
    },
};