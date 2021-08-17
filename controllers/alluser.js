// const request = require('request');
const axios = require('axios');
const allusers = async (req, resp,User) => {

//   const rp = await axios.get("http://localhost:3001/symbl-token");
//   const authToken = rp.data.accessToken;
  const usr=await User.find({'admin':0}).sort({'date':-1});
//   const conversationId=usr[0].conversationId;
//   console.log(conversationId);
  console.log(usr);
  return resp.json(usr);

}
module.exports = {
 allusers: allusers
};
