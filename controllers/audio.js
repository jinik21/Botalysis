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

const audio = async (req, resp, email,Audio) => {

  const rp = await axios.get("http://localhost:3001/symbl-token");
  const authToken = rp.data.accessToken;
  const usr=await Audio.find({'email':email}).sort({'date':-1}).limit(1);
  const conversationId=usr[0].conversationId;
  console.log(conversationId);
  console.log(usr);
  console.log(usr);
  const audioOption = {
    method: 'get',
    url: `https://api.symbl.ai/v1/conversations/${conversationId}/messages`,
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    params: {
      'sentiment': true
    }
  };

  await axios(audioOption)
    .then((response) => {
      // console.log(response.data)
      var positive = 0;
      var negative = 0;
      var neutral = 0;
      var messages=response.data.messages;
      console.log(messages[1].sentiment.polarity.score);
      for (var i=0; i < messages.length; i++) {
        // console.log(messages[i]);
        if (messages[i].sentiment.polarity.score <= 0.3 && messages[i].sentiment.polarity.score >= -0.3) {
          neutral =neutral+ 1;
        } else if (messages[i].sentiment.polarity.score > 0.3 && messages[i].sentiment.polarity.score <= 1.0) {
          positive =positive+ 1;
        }
        else if (messages[i].sentiment.polarity.score < -0.3 && messages[i].sentiment.polarity.score >= -1.0) {
          negative = negative+1;
        }
      }
      console.log(positive);
      console.log(negative);
      console.log(neutral);
      resp.json(response.data)
    });

}
module.exports = {
  audio: audio
};
