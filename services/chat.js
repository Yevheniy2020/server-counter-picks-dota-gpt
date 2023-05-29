import { Configuration, OpenAIApi } from "openai";

export class ChatGPT {

    configuration = new Configuration({
        organization: "org-3TLOwELwqakIKpQxPGq1bMlH",
        apiKey: "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",
    });
    openai = new OpenAIApi(this.configuration)

    getAnswer = async (question) =>{
        const completion = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: `Now you're a Dota 2 e-player, and you have to write counterpicks for ${question}`}],
        });
        return completion.data.choices[0].message.content;
    }
}
