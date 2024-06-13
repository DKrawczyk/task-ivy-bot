import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_GPT_TOKEN}`,
};

export const postUserMessage = async (message: string) => {
  const result = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: `${process.env.REACT_APP_GPT_MODEL}`,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
    },
    { headers, timeout: 5000 },
  );
  return result.data.choices[0].message.content;
};
