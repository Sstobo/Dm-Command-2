import { Configuration, OpenAIApi } from "openai";
import { storyCalibration} from "./PromptCalibration";
import axios from "axios";
import { getImageURL}  from "../Components/ImageGenerator/ImageGenerator";





export async function handleSubmit(prompt, setStory, playerCharacter, setImage, setShowDice, apiKey) {
  // stringigy storyCalibration
  const stringifiedCalibration = JSON.stringify(storyCalibration);
  const stringifiedCharacter = JSON.stringify(playerCharacter);

  const systemPrompt = "The story information:" + stringifiedCalibration + "VERY IMPORTANT: The players character:" + stringifiedCharacter;
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);

  setStory("Rolling Story...");

  const GPT35TurboMessage = [
    { role: "system", content: systemPrompt },
    { role: "assistant", content: prompt },
    {
      role: "user",
      content:
        'You are DM Bot. You will never refer to yourself, instead you create text to read to the players, and connect the scenes of the plot according to their wishes. Create an array of exciting, creative, and imaginative stories and information based on the system index provided. Dive deep into each chapter and scenario, adding rich details, captivating narratives, and engaging characters that will enthrall players and motivate them to journey further into the story. This is the overview we will reference later for our grand adventure. This will help us follow a larger plot, and not forget details. Consider the key themes and environments, and craft a vibrant world that transports players into the heart of each chapter. Let your imagination run wild and bring the story to life, ensuring each element is a memorable and thrilling experience. Follow the pattern set in system index, and use the prompts from the assistant index to guide you. VERY IMPORTANT. Your response MUST be in the exact same format the system index prompt (but just the story part, ignore the player section. Follow that array strucutre exactly or the app will break.'
    },
  ];
  setShowDice(true);
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
        let newImageUrl = getImageURL(response.data.choices[0].message.content);
        setImage(newImageUrl);
        setShowDice(false);
      } else {
        console.error("Invalid response:", response);
   
      }
    })
    .catch((error) => {
      console.error(error);
    });
}



// Begin

export async function handleBeginStory(story, setScenario, scenario, playerCharacter, setImage,  setShowDice, apiKey) {

  const stringifiedCharacter = JSON.stringify(playerCharacter);

  const systemPrompt = "The story information:" + story + "VERY IMPORTANT: The players character:" + stringifiedCharacter;
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);

  setScenario("Rolling Scenario...");

  const GPT35TurboMessage = [
    { role: "system", content: systemPrompt },
    { role: "assistant", content: "IMPORTANT: Draw all of the story context from the system index." },
    {
      role: "user",
      content:
        'You are DM Bot. You will never refer to yourself, instead you create text to read to the players, and connect the scenes of the plot according to their wishes. You consult the index in your system tab to give you story information and context, as well as to remember who the main character is. Your goal is to provide text for a human dungeon master to read, generated from the pre-existing story, and then we allow the players to choose their next action. We do not offer choices, the players must be creative. Read the system index, and write the introduction to read to the players. First, write a description of the world for the players. Then place them in a scenario or situation that will let us start off our quest!  Return the result in html format, with a <h1> title of the story, an <h2> wrapping the scenario title, and a <p> wrapping the scenario text. Use bold text and italics and other headings as you see fit to present the text in a nice readable format.',
    },
  ];

  // model: "gpt-3.5-turbo",
  setShowDice(true);
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
        let newImageUrl = getImageURL(response.data.choices[0].message.content);
        setImage(newImageUrl);
        console.log("scenario" + scenario);
        setShowDice(false);
      } else {
        console.error("Invalid scenario:", response);
   
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


// Decide

export async function handleDecision(decision, story, scenario, setScenario, sceneNumber, playerCharacter,  setImage, image, setShowDice, apiKey) {

  const stringifiedCharacter = JSON.stringify(playerCharacter);

  const systemPrompt = "The story information:" + story + "VERY IMPORTANT: The players character:" + stringifiedCharacter;
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);


  const GPT35TurboMessage = [
    { role: "system", content: systemPrompt },
    { role: "assistant", content: "The PREVIOUS SCENE players are reacting to: " + scenario + ". Continue from there. IMPORTANT: Draw all of the story context from the system index." },
    {
      role: "user",
      content:
        'You are DM Bot. You will never refer to yourself, instead you create text to read to the players, and connect the scenes of the plot according to their wishes. You consult the index in your system tab to give you story information and context. Your goal is to provide text for a human dungeon master to read, generated from the pre-existing story, and then we allow the players to choose their next action. We do not offer choices, the players must be creative. Start with 100 words or describing the visual, audio ect details. Then detail the scenario the players find themselves in. Embellish using details from the system index. DO NOT REPEAT THE PREVIOUS SCENE, move on from it. VERY MOST IMPORTANT THING: The players can do ANYTHING they want, and you must mold the story to accomodate, even if it means you need to change things dramatically. Soon we will see what the players chose to do: Remember - this decision is the SINGLE MOST IMPORTANT THING IN THIS PROMPT, if the player does something strange or unexpected, we MUST accept it and center this current scene around it.. Return the result in html format, start with a <h1> descriptive scene title, that summarized the scene in one sentance, to be used as an image ai prompt, and heading or p tags wrapping the rest of the  text.  Use bold text and italics and other headings as you see fit to present the text in a nice readable format. -- Here is what happened: In the last scene, the players decided to: ' + decision + '. What was the result of this, and what is happening now? REMEMBER: do not force the players to do anything, if there is an inn for example, tell them that and let them choose, dont just have them walk there to progress the story. If they need to have a conversation, have them ask the questions, dont tell that part of the story for them, for instance. The players have to make their own choices, and you must write the story to accomodate them.',
    },
  ];

  // model: "gpt-3.5-turbo",
  setShowDice(true);
 
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
        let newImageUrl = getImageURL(scenario);
        setImage(newImageUrl);
        setShowDice(false);
      } else {
        console.error("Invalid scenario:", response);
   
      }
    })
    .catch((error) => {
      console.error(error);
    });
}





// keeper
export async function  handleImage(prompt, setImage, apiKey) {

  console.log("image " + prompt);
  const finalPrompt =
  "Epic fantasy art in the style of Frank Frazetta. Realistic. Detailed." +
  prompt;

  // remove and html tags from finalPrompt
  const regex = /(<([^>]+)>)/gi;
  const cleanPrompt = finalPrompt.replace(regex, "");


const shortPrompt =
  cleanPrompt.length > 300
    ? cleanPrompt.substring(0, 300) + "..."
    : cleanPrompt;

console.log("image " + shortPrompt);
  // ensure prompt is less than 50 words, cut words off and return less than 50 words
  
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createImage({
        prompt: shortPrompt,
        n: 1,
        size: "512x512",
      });
    
    if (response.status === 200) {
      console.log(response)
      
      console.log(response.data.data[0].url);
      setImage(response.data.data[0].url);
    }
  }
  catch(error) {
    console.error(error);
  }
 
}
