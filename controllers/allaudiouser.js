// const request = require('request');
const axios = require('axios');
const allaudiouser = async (req, resp, email,Audio) => {
  const usr=await Audio.find({email:email}).sort({'date':-1});
  console.log(usr);
  return resp.json(usr);
}
module.exports = {
 allaudiouser: allaudiouser
};
