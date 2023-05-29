import axios from "axios";

export class ChatGPT {

    options = {
        method: 'GET',
        url: 'https://openai80.p.rapidapi.com/models',
        headers: {
            'X-RapidAPI-Key': '2e7fb0a875msh6f7dcc75f08eefap16e088jsn4243fe649b4a',
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        }
    };

    getAnswer = async (q) => {
        try {
            const response = await axios.request(this.options);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
}
