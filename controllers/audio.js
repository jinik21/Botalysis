const request = require('request');
const axios = require('axios');
const conversationId = "CONVERSATION_ID";

request.get({
    url: `https://api.symbl.ai/v1/conversations/${conversationId}/messages`,
    headers: { 'Authorization': `Bearer ${authToken}` },
    json: true
}, (err, response, body) => {
    console.log(body);
});

const audio=async (req,resp)=>{

    authToken=axios.get('/user?ID=12345').json.accessToken;
    const url=`https://api.symbl.ai/v1/conversations/${conversationId}/messages`;
    const instance = axios.create({
        baseURL: url
      });
      instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    axios.get(url)
    .then((response)=>{
      console.log(jsonObject)
      resp.json(jsonObject);
    });
    
    }
    module.exports={
      audio:audio
    };
    