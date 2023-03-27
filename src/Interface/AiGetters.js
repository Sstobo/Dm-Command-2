import { Configuration, OpenAIApi } from "openai";
import { storyCalibration} from "./PromptCalibration";
import axios from "axios";
export async function handleSubmit(prompt, setStory, playerCharacter) {
  // stringigy storyCalibration
  const stringifiedCalibration = JSON.stringify(storyCalibration);
  const stringifiedCharacter = JSON.stringify(playerCharacter);

  const systemPrompt = "The story information:" + stringifiedCalibration + "VERY IMPORTANT: The players character:" + stringifiedCharacter;
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  setStory("Rolling Story...");

  const GPT35TurboMessage = [
    { role: "system", content: systemPrompt },
    { role: "assistant", content: prompt },
    {
      role: "user",
      content:
        'Create an array of exciting, creative, and imaginative stories and information based on the system index provided. Dive deep into each chapter and scenario, adding rich details, captivating narratives, and engaging characters that will enthrall players and motivate them to journey further into the story. This is the overview we will reference later for our grand adventure. This will help us follow a larger plot, and not forget details. Consider the key themes and environments, and craft a vibrant world that transports players into the heart of each chapter. Let your imagination run wild and bring the story to life, ensuring each element is a memorable and thrilling experience. Follow the pattern set in system index, and use the prompts from the assistant index to guide you. VERY IMPORTANT. Your response MUST be in the exact same format the system index prompt (but just the story part, ignore the player section. Follow that array strucutre exactly or the app will break.'
    },
  ];

  // model: "gpt-3.5-turbo",

  console.log(GPT35TurboMessage);
  const response = await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: GPT35TurboMessage,
      temperature: 0.75,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.1,
      presence_penalty: 0,
      n: 1,
    })
    .then((response) => {
      if (response.data.choices.length > 0) {
        setStory(response.data.choices[0].message.content);
        console.log(response);
      } else {
        console.error("Invalid response:", response);
   
      }
    })
    .catch((error) => {
      console.error(error);
    });
}



// Begin

export async function handleBeginStory(story, setScenario, scenario, playerCharacter, setImage, handleImage) {

  const stringifiedCharacter = JSON.stringify(playerCharacter);

  const systemPrompt = "The story information:" + story + "VERY IMPORTANT: The players character:" + stringifiedCharacter;
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  setScenario("Rolling Scenario...");

  const GPT35TurboMessage = [
    { role: "system", content: systemPrompt },
    { role: "assistant", content: "IMPORTANT: Draw all of the story context from the system index." },
    {
      role: "user",
      content:
        'You are DM-Bot. You only write responses in a format designed to be read to the player. You consult the index in your system tab to give you story information and context, as well as to remember who the main character is. Your goal is to provide text for a human dungeon master to read, generated from the pre-existing story, and then we allow the players to choose their next action. We do not offer choices, the players must be creative. Read the system index, and write the introduction to read to the players. First, write a description of the world for the players. Then place them in a scenario or situation that will let us start off our quest! ',
    },
  ];

  // model: "gpt-3.5-turbo",

  console.log(GPT35TurboMessage);
  const response = await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: GPT35TurboMessage,
      temperature: 0.75,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0.1,
      presence_penalty: 0,
      n: 1,
    })
    .then((response) => {
      if (response.data.choices.length > 0) {
        setScenario(response.data.choices[0].message.content);
        handleImage(scenario, setImage)
        console.log("scenario" + scenario);
      } else {
        console.error("Invalid scenario:", response);
   
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


// Decide

export async function handleDecision(decision, story, scenario, setScenario, sceneNumber, playerCharacter) {

  const stringifiedCharacter = JSON.stringify(playerCharacter);

  const systemPrompt = "The story information:" + story + "VERY IMPORTANT: The players character:" + stringifiedCharacter;
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);


  const GPT35TurboMessage = [
    { role: "system", content: systemPrompt },
    { role: "assistant", content: "The PREVIOUS SCENE players are reacting to: " + scenario + ". Continue from there. IMPORTANT: Draw all of the story context from the system index." },
    {
      role: "user",
      content:
        'You are DM-Bot. You only write responses in a format designed to be read to the players. You consult the index in your system tab to give you story information and context. Your goal is to provide text for a human dungeon master to read, generated from the pre-existing story, and then we allow the players to choose their next action. We do not offer choices, the players must be creative. Start with 100 words or describing the visual, audio ect details. Then detail the scenario the players find themselves in. Embellish using details from the system index. DO NOT REPEAT THE PREVIOUS SCENE, move on from it. VERY MOST IMPORTANT THING: The players can do ANYTHING they want, and you must mold the story to accomodate, even if it means you need to change things dramatically. Soon we will see what the players chose to do: Remember - this decision is the SINGLE MOST IMPORTANT THING IN THIS PROMPT, if the player does something strange or unexpected, we MUST accept it and center this current scene around it.. Return the result in html format, with a <h1> title of the story, an <h2> wrapping the scenario title, and a <p> wrapping the scenario text. Here is what happened: In the last scene, the players decided to: ' + decision + '. What was the result of this, and what is happening now? REMEMBER: do not force the players to do anything, if there is an inn, tell them that and let them choose, dont just have them walk there to progress the story. ',
    },
  ];

  // model: "gpt-3.5-turbo",

  console.log(GPT35TurboMessage);
  const response = await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: GPT35TurboMessage,
      temperature: 0.76,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0.1,
      presence_penalty: 0,
      n: 1,
    })
    .then((response) => {
      if (response.data.choices.length > 0) {
        setScenario(response.data.choices[0].message.content);
        console.log("scenario" + scenario);
      } else {
        console.error("Invalid scenario:", response);
   
      }
    })
    .catch((error) => {
      console.error(error);
    });
}



export async function handleImage(prompt, setImage) {

  const finalPrompt =
    "Imagine an epic fantasy scene, in the style of old dungeons and dragons art. Use this snippet: " +
    prompt;
  const shortPrompt =
    finalPrompt.length > 400
      ? finalPrompt.substring(0, 400) + "..."
      : finalPrompt;

  console.log("image " + shortPrompt);

  try {
    const response = await axios.post('https://stablediffusionapi.com/api/v3/text2img', {
      key: 'U0Ppg5KtekRI8RSvlfHtA18R3SHCsR2Wcjh3QXVKoY386T4D19obxoTJLi2A',
      prompt: shortPrompt,
      samples: 1,
      width: 512,
      height: 512,
      num_inference_steps: 20,
      guidance_scale: 7.5,
      safety_checker: 'yes',
    });

    if (response.status === 200) {
      console.log(response.data.output[0]);
      setImage(response.data.output[0]);
    }
  } catch (error) {
    console.error('Error generating image:', error);
  }
}