// server.js
import express from "express";
import dotenv from "dotenv";
import { HfInference } from "@huggingface/inference";

dotenv.config();

const app = express();
const port = 3000;

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

app.use(express.json());

app.post("/api/recipe", async (req, res) => {
  const ingredientsArr = req.body.ingredients;
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });
    res.json({ recipe: response.choices[0].message.content });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
