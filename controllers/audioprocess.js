
const fs = require('fs');
const axios = require('axios');
const { response } = require('express');

const audio=require('./audio');
// const webhookUrl = "WEBHOOK_URL";
// const audioFileStream = fs.createReadStream("/root/Botalysis/store/audio.wav");
  


const processAudio=async (req,resp,Audio)=>{
    const authToken = await axios.get("http://localhost:3001/symbl-token");
    console.log(req.body)
    const audioOption = {
        method: 'post',
        url: 'https://api.symbl.ai/v1/process/audio/url',
        headers: {
          'Authorization': `Bearer ${authToken.data.accessToken}`,
          'Content-Type': 'application/json'
        },
        data: {
          url: req.body.link,
        }
      };
    
  try{  await axios(audioOption) 
.then((response, err) => {;
//   console.log(authToken);
//   if (err || Object.keys(responses).indexOf(statusCode.toString()) !== -1) {
//     throw new Error(responses[statusCode]);
//}
//   console.log('Status code: ', statusCode);
//   console.log('Body', response.body);
// console.log('resp:::::::',response);
// const final=audio.audio(req,response ,response.data.conversationId)
// .then((res)=>{
const audiou=new Audio({
  email:req.body.email,audiolink:req.body.link,conversationId:response.data.conversationId,jobId:response.data.jobId
})
audiou.save();
// });
resp.json('Audio Added Successfully');
});
}
catch{
  resp.json("Error while processing")
}
}


module.exports={
    processAudio:processAudio
  };
  