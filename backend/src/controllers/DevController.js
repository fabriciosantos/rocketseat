const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async save(req, res) {

        const userExists = await Dev.findOne({user: req.body.username});
         
        if (userExists) {
            return res.json(userExists);
        }
        const response = await axios.get(`https://api.github.com/users/${req.body.username}`);
        const { login, name, bio, avatar_url }  = response.data;

        const dev = await Dev.create({
            name: name,
            user: login,
            bio: bio,
            avatar: avatar_url
        })
        return res.json(dev);
    },

    async findAll(req, res) {
        const { user } = req.headers;
        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user }},
                { _id: { $nin: loggedDev.likes }},
                { _id: { $nin: loggedDev.dislikes }} 
            ]
        });
console.log(users);
        return res.json(users);
    }
};