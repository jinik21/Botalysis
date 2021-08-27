// const request = require('request');
const axios = require('axios');
const allaudiousers = async (req, resp, email,Audio) => {
  // if(email===''){
  //   const usr=await Audio.find({}).sort({'date':-1});
  // console.log(usr);
  // return resp.json(usr);
  // }
//   const rp = await axios.get("http://localhost:3001/symbl-token");
//   const authToken = rp.data.accessToken;
  const usr=await Audio.find({email:email}).sort({'date':-1});
//   const conversationId=usr[0].conversationId;
//   console.log(conversationId);
  console.log(usr);
  return resp.json(usr);

}
module.exports = {
 allaudiousers: allaudiousers
};
