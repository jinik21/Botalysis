// const request = require('request');
const axios = require('axios');
const allaudio = async (req, resp, email,Audio) => {

//   const rp = await axios.get("http://localhost:3001/symbl-token");
//   const authToken = rp.data.accessToken;
  const usr=await Audio.find({'email':email}).sort({'date':-1});
//   const conversationId=usr[0].conversationId;
//   console.log(conversationId);
  console.log(usr);
  return resp.json(usr);

}
module.exports = {
 allaudio: allaudio
};
