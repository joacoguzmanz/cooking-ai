import { Configuration, OpenAIApi } from "openai";
import { NextApiRequest, NextApiResponse } from "next";

if (!process.env.OPENAI_API_KEY) {
    throw new Error('Not env for OpenAI')
}

const configuration = new Configuration({
    organization: "org-S5rNGmLvsz2ICa7WTmZZVHpN",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { input } = req.body;

    const response = await openai.createCompletion({
        model: 'text-curie-001',
        prompt: `You are a chef that helps people giving clear instructions to cook different meals. 

        Person: What can I cook with onions, garlic, meat, potatoes?
        Chef: You can make a wonderful dish, following this simple steps: 
        
        1. Peel and chop the onions and garlic.
        2. Cut the meat into small pieces and fry it in a little oil until it becomes brown.
        3. Add the potatoes and fry them until they are soft.
        4. Add the onions and garlic and stir well.
        5. Add some salt and pepper to taste and enjoy your delicious meal!
        
        Person: What can I cook with ${input}?
        Chef: `,
        max_tokens: 600,
        temperature: 0.65
    })

    res.status(200).json({ message: response.data.choices[0].text })
}

