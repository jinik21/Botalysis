const appId = require("../config/keys").symbl_key.APP_ID;
const appSecret = require("../config/keys").symbl_key.APP_SECRET;
const axios = require('axios');

const authOptions = {
  method: 'post',
  url: "https://api.symbl.ai/oauth2/token:generate",
  data: {
    type: "application",
    appId: appId,
    appSecret: appSecret
  },
  json: true
};
const generatetoken=async (req,resp)=>{
axios(authOptions)
.then((response)=>{
  // console.log(response);
  var jsonObject = 
                {
                  accessToken: response.data.accessToken, 
                }
  console.log(jsonObject)
  resp.json(jsonObject);
});

}


module.exports={
  generatetoken:generatetoken
};
