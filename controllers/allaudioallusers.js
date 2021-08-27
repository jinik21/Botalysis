// const request = require('request');
const axios = require('axios');
const allaudioallusers = async (req, resp,Audio) => {
  const usr=await Audio.find({}).sort({'date':-1});
  console.log(usr);
  return resp.json(usr);
}
module.exports = {
    allaudioallusers: allaudioallusers
};
