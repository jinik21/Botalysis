// const request = require('request');
const axios = require('axios');
// const conversationId = "CONVERSATION_ID";

// request.get({
//     url: `https://api.symbl.ai/v1/conversations/${conversationId}/messages`,
//     headers: { 'Authorization': `Bearer ${authToken}` },
//     json: true
// }, (err, response, body) => {
//     console.log(body);
// });

const audio=async (req,resp,conversationId)=>{

  const rp = await axios.get("http://localhost:3001/symbl-token");
  const authToken = rp.data.accessToken;
  const audioOption = {
    method: 'get',
    url: `https://api.symbl.ai/v1/conversations/${conversationId}/messages`,
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    params:{
      'sentiment': true 
    }
  };
  
    await axios(audioOption)
    .then((response)=>{
      console.log(response.data)
       resp.json(response.data)
    });
    
    }
    module.exports={
      audio:audio
    };
    