import { Configuration, OpenAIApi } from "openai";
import { arrayCalibration} from "./PromptCalibration";

export async function handleSubmit(prompt, setStory) {
  // stringigy arrayCalibration
  const stringifiedCalibration = JSON.stringify(arrayCalibration);

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  setStory("Rolling Story...");

  const GPT35TurboMessage = [
    { role: "system", content: stringifiedCalibration },
    { role: "assistant", content: prompt },
    {
      role: "user",
      content:
        'Create an array of exciting, creative, and imaginative stories and information based on the system index provided. Dive deep into each chapter and scenario, adding rich details, captivating narratives, and engaging characters that will enthrall players and motivate them to journey further into the story. This is the overview we will reference later for our grand adventure. This will help us follow a larger plot, and not forget details. Consider the key themes and environments, and craft a vibrant world that transports players into the heart of each chapter. Let your imagination run wild and bring the story to life, ensuring each element is a memorable and thrilling experience. Follow the pattern set in system index, and use the prompts from the assistant index to guide you. VERY IMPORTANT. Your response MUST be in the exact same format st the assistant index prompt. Follow that array strucutre exactly or the app will break.',
    },
  ];

  // model: "gpt-3.5-turbo",

  console.log(GPT35TurboMessage);
  const response = await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: GPT35TurboMessage,
      temperature: 0.75,
      max_tokens: 2000,
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

export async function handleBeginStory(story, setScenario) {
  // stringigy arrayCalibration
  const stringifiedCalibration = JSON.stringify(arrayCalibration);

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  setScenario("Rolling Scenario...");

  const GPT35TurboMessage = [
    { role: "system", content: story },
    { role: "assistant", content: "IMPORTANT: Draw all of the story context from the system index. We are currently on scene one, scenario one. The players name is Sean" },
    {
      role: "user",
      content:
        'You are DM-Bot. You only write responses in a format designed to be read to the players. You consult the index in your system tab to give you story information and context. Your goal is to provide text for a human dungeon master to read, generated from the pre-existing story, and then we allow the players to choose their next action. We do not offer choices, the players must be creative. Read the system index, and write the introduction to read to the players. We want to describe the world we are in, the overall goals of our quest, how we got involved in the quest, and what is currently happening in the first scenario we are in. ',
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
        console.log("scenario" + response);
      } else {
        console.error("Invalid scenario:", response);
   
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


// Decide

export async function handleDecision(decision, story, scenario, setScenario) {
  // stringigy arrayCalibration
  const stringifiedCalibration = JSON.stringify(arrayCalibration);

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);


  const GPT35TurboMessage = [
    { role: "system", content: story },
    { role: "assistant", content: "The PREVIOUS SCENE players are reacting to: " + scenario },
    {
      role: "user",
      content:
        'You are DM-Bot. You only write responses in a format designed to be read to the players. You consult the index in your system tab to give you story information and context. Your goal is to provide text for a human dungeon master to read, generated from the pre-existing story, and then we allow the players to choose their next action. We do not offer choices, the players must be creative. Start with 100 words or describing the visual, audio ect details. Then detail the scenario the players find themselves in. Embellish using details from the system index. DO NOT REPEAT THE PREVIOUS SCENE, move on from it. VERY MOST IMPORTANT THING: The players can do ANYTHING they want, and you must mold the story to accomodate, even if it means you need to change things dramatically.  In the last scene, the players decided to: ' + decision + '. Remember - this decision is the SINGLE MOST IMPORTANT THING IN THIS PROMPT. Return the result in html format, with a <h1> title of the story, an <h2> wrapping the scenario title, and a <p> wrapping the scenario text.',
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
        console.log("scenario" + response);
      } else {
        console.error("Invalid scenario:", response);
   
      }
    })
    .catch((error) => {
      console.error(error);
    });
}





export async function handleImage(e, prompt, setImage) {
  e.preventDefault();
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const finalPrompt =
    "Imagine and epic fantasy scene, in the style of old dungeons and dragons art. Use this snippet: " +
    prompt;
  const shortPrompt =
    finalPrompt.length > 800
      ? finalPrompt.substring(0, 800) + "..."
      : finalPrompt;
  console.log("image " + shortPrompt);
  const response = await openai.createImage({
    prompt: shortPrompt,
    n: 1,
    size: "512x512",
  });

  if (response.status === 200) {
    console.log(response.data.data[0].url);
    setImage(response.data.data[0].url);
  }
}
