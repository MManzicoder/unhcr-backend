import bcrypt from "bcrypt";

export const hashPassword = async password =>{
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}
export const comparePassword = async (password, userpassword) =>{
      let isMatch = await bcrypt.compare(password, userpassword);
      return isMatch;
}
export const  makeUniqueCode= length => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}