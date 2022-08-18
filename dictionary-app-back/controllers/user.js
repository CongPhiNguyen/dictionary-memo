const user = require("../models/user");
class userController {
  signUp = async (req, res) => {
    console.log("req", req);
    res.status(200).send({ run: true });
  };
}

module.exports = new userController();
