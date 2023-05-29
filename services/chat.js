import axios from "axios";

export class ChatGPT {

    getAnswer = async (question) => {

        const options = {
            method: 'POST',
            url: 'https://chatgpt53.p.rapidapi.com/',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '2e7fb0a875msh6f7dcc75f08eefap16e088jsn4243fe649b4a',
                'X-RapidAPI-Host': 'chatgpt53.p.rapidapi.com'
            },
            data: {
                messages: [
                    {
                        role: 'user',
                        content: `Now you're a Dota 2 e-player, and you have to write counterpicks for ${question}`
                    }
                ]
            }
        };

        try {
            const response = await axios.request(options);
            return response.data.choices[0].message.content
        } catch (error) {
            console.error(error);
        }
    }
}
