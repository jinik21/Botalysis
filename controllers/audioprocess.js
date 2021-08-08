
const fs = require('fs');
const axios = require('axios');
const { response } = require('express');


// const webhookUrl = "WEBHOOK_URL";
// const audioFileStream = fs.createReadStream("/root/Botalysis/store/audio.wav");
  


const processAudio=async (req,resp)=>{
    const authToken = await axios.get("http://localhost:3001/symbl-token");
    const audioOption = {
        method: 'post',
        url: 'https://api.symbl.ai/v1/process/audio/url',
        headers: {
          'Authorization': `Bearer ${authToken.data.accessToken}`,
          'Content-Type': 'application/json'
        },
        data: {
          url: "https://cdn.sndup.net/2vd6/audio.wav?token=MW_jjj6jgQ_vO6cC_VhEhEzDoFpOQCHItndgpoaA2co&token_path=%2F2vd6%2F&expires=1628420213",
        }
      };
    
    await axios(audioOption) 
.then((response, err) => {;
//   console.log(authToken);
//   if (err || Object.keys(responses).indexOf(statusCode.toString()) !== -1) {
//     throw new Error(responses[statusCode]);
//}

//   console.log('Status code: ', statusCode);
//   console.log('Body', response.body);
console.log('err:::::::',response);
  resp.json(response.data);
});
}

module.exports={
    processAudio:processAudio
  };
  