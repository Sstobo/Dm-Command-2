import { Configuration, OpenAIApi } from "openai";

export async function handleSubmit(prompt, setResponse)  {
  const configuration = new Configuration({
    apiKey: "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"
  });
  const openai = new OpenAIApi(configuration);
  
    setResponse("Thinking...");
    const promptCalibration = ": You are a dungeon masters assistant and fantasy author. You will be writing the script for the dungeon master to read. You have a deep understanding of fantasy and the rules of D&D. You will be given elements of the scene to imagine wrapped in [] brackets. Include each of these elements in any creative way you want. Be sure that all the elements work seamlessly together. VERY IMPORTANT: Write your new scene in a way that can be read to the players. This will be for the Dungeon Master to read out loud.  Do not progress the story or the scene past what you are already told. Strictly write what is to be read to the players, we give away no information they cant perceive with their own senses. Write the first 200 words describing the scene. Before you answer, double the amount of visual description you give to every element of the scene. Remember to explain why each element is in the scene, creatively weaving the narrative to make everything logically fit together. Here is some advice : Struggling with scene descriptions in role-playing games, a memory/guiding device called E.A.S.E. can help keep descriptions short and insightful: Environment, Atmosphere, Senses, and Events. Describe plants, structures, lighting, and weather; evoke emotions without telling players how they feel; engage all the senses; and describe creatures, NPCs, or general goings-on. This method helps players get engaged in the story and setting more viscerally while providing consistent and meaningful descriptions. Be sure to incorporate all the elements together, make the monsters fit the scene with a back story, same with the items and npcs. Create a world where they all fit together.  -- Take all of the elements given to you, and describe an amazing and vibrant scene that fits everything together and puts the player in the center of the action, just waiting to choose. ";

    const assistantCalibration = "";

    const GPT35TurboMessage = [
      { role: "system", content: promptCalibration},
      {
        role: "user",  content: prompt,
      },
    ];



    console.log(GPT35TurboMessage)
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: GPT35TurboMessage,  
      temperature: 0.70,
      max_tokens: 800,
      top_p: 1,
      frequency_penalty: 0.1,
      presence_penalty: 0,
      n: 1
    })
    .then((response) => {
      console.log(GPT35TurboMessage)
       console.log(response.data.choices[0]);
      setResponse(response.data.choices[0].message.content);
        console.log('responding');
    })
    .catch((error) => {
      console.error(error);
    });
  }




export async function handleImage(e, prompt, setImage) {
  e.preventDefault();
  const configuration = new Configuration({
    apiKey: "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"
  });
  const openai = new OpenAIApi(configuration);

  const finalPrompt = "Paint an epic fantasy scene: " + prompt;
  const shortPrompt = finalPrompt.length > 600 ? finalPrompt.substring(0, 600) + '...' : finalPrompt;
  console.log("image " + shortPrompt);
    const response = await openai.createImage({
        prompt: shortPrompt,
        n: 1,
        size: "512x512",
      });
    
    if (response.status === 200) {
        console.log(response.data.data[0].url);
        setImage(response.data.data[0].url );
    }
  }


