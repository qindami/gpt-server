const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

async function ask (q) {
  completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: q }],
  })
  return completion.data.choices[0].message?.content
}

module.exports = {
  ask
}