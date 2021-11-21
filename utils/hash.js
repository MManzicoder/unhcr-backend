const bcrypt = require("bcrypt");

exports.hashPassword = async password =>{
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}
exports.comparePassword = async (password, user) =>{
      let isMatch = await bcrypt.compare(password, user.password);
      return isMatch;
}