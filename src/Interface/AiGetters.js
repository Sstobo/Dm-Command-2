import { Configuration, OpenAIApi } from "openai";

export async function handleSubmit(prompt, setResponse) {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  setResponse("Rolling...");

  const promptCalibration =
    "Welcome, GPT-4. In this exercise, you will be generating story prompts to be read out loud to the players. You will not be writing the entire story however.  You will be told a series of prompts wrapped in brackets. Each prompt will consist of two parts: the type of prompt it is, and the content. Here is what to do with the different types of prompts: Encounters describe what is currently happening. You should imagine a scenario that does not have larger scope than the Encounter. Monsters are creatures to incorporate into the scene, usually responsible for the Encounter, if there are two or more monsters in the scene, either have them fighting, or working together. Items are objects that can be found in the scene. NPCs are characters that can be found in the scene. Include NPCS as being affected by the Encounter. Locations are the places where the scene takes place. Always refer to the player 'you' in the present tense.";

  const assistantCalibration =
    "We are a dungeon master. We will be creating scenes for the players, with both text to read out loud to them, and notes for the DM to run the scene, and they will be choosing their outcomes. We will be using a series of prompts that will follow. Be sure to include them all! That is very important, we want a ton of detail to carry over from the prompts. Can you write me an initial scene to read to my players.  This initial scene must dramatically explain the current location and environmnent around the listeners. Write at least a parahraph of just visual, audio and sensory description of what the listeners see. Then three possible choices for the player to choose from. The choices sections should include 200 words describing the possible action the player can take, written to be read aloud TO the player. Then it should also include at least 200 words written to the DM, in italics, explaining what will happen IF the player chooses to do this.  ";

  const GPT35TurboMessage = [
    { role: "system", content: promptCalibration },
    { role: "assistant", content: assistantCalibration },
    {
      role: "user",
      content:
        'Please provide the information in the following format:{"title":"Title of the scenario","body":"Description of the scenario AT LEAST 450 words!!","options":[{"title":"Title of option 1","read":"Description of what happens if the player chooses option 1","dm_notes":"Notes for the DM on what happens next if the player chooses option 1"},{"title":"Title of option 2","read":"Description of what happens if the player chooses option 2","dm_notes":"Notes for the DM on what happens next if the player chooses option 2"},{"title":"Title of option 3","read":"Description of what happens if the player chooses option 3","dm_notes":"Notes for the DM on what happens next if the player chooses option 3"}]} Please provide the information in this exact format to ensure that it can be easily integrated into our system. Return ONLY the array, not any quotes or text outside of the opening and closing braces.   Each option should have a title, a description of what happens if the player chooses that option, and some notes for the DM on what happens next in the story. Following this section we will give you the ingredients you need to imagine these scenarios.The initial scene MUST reference each of these elements. It is up to you to use the ingredients wrapped in [] brackets, and combine them all together. Describe the locations, include all the creatures, and create a fantastic dungeons and dragons event! Remember this MUST return as the array format we mentioned. The returned text MUST start with a { and end with a }. If not the entire app breaks my friend!. Here are the ideas to incorporate, have fun! Remember - 500 words MINIMUM for the scene intro description. This is the perfect place to be verbose and descriptive. Set the mood, tone and scene. We want to FEEL it! In the intro - mention the setting, the encounter and all the monsters and npcs. VERY IMPORTANT. Good luck, you are a great author and DM! Be sure to season the story liberally with lore from the [Settings]: ' +
        prompt,
    },
  ];


  // model: "gpt-3.5-turbo",

  console.log(GPT35TurboMessage);
  const response = await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: GPT35TurboMessage,
      temperature: 0.7,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0.1,
      presence_penalty: 0,
      n: 1,
    })
    .then((response) => {
      if (Array.isArray(response.data.choices) && response.data.choices.length > 0) {
        setResponse(response.data.choices[0].message.content);
        console.log(response);
      } else {
        console.error("Invalid response:", response);
   
      }
    })
    .catch((error) => {
      console.error(error);

    });
}


  export async function handleSubmitChoice(option, prompt,  setResponse, backstory, setBackstory) {
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    
    // add the option to the backstory
    setBackstory(backstory => [...backstory, option]);

    setResponse("Rolling...");
    option = JSON.stringify(option);
    const followupMessage = [
      { role: "system", content: "We are continuing the scenario from the previous scene. You are a dungeon masters assistant. You write in an epic fantasy style. For context, this story is centered around these things, although that my change as we progress scenes:" + prompt },
      { role: "assistant", content: "Please use the following prompts to create the next scene in the scenario. Here is the backstory so far: "  + backstory},
      {
        role: "user",
        content:
          `Return the next scene, using the following information to understand the PREVIOUS scene:` +  option + ' This is the most important part! Return your response in the same style of array. "Please provide the information in the following format:{"title":"Title of the scenario","body":"Description of the scenario AT LEAST 450 words!!","options":[{"title":"Title of option 1","read":"Description of what happens if the player chooses option 1","dm_notes":"Notes for the DM on what happens next if the player chooses option 1"},{"title":"Title of option 2","read":"Description of what happens if the player chooses option 2","dm_notes":"Notes for the DM on what happens next if the player chooses option 2"},{"title":"Title of option 3","read":"Description of what happens if the player chooses option 3","dm_notes":"Notes for the DM on what happens next if the player chooses option 3"}]} No extra white spaces or characters. It MUST be a perfect object in string form, for our app to work. DO NOT ADD ANY BACKSLASHES or unwanted characters. Dont return a fake array with quotes or anything like that, this Good luck!'    },
    ];
  // model: "gpt-3.5-turbo",
    // convert option to string

    console.log(option);
    console.log(followupMessage);
    const response = await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: followupMessage,
        temperature: 0.7,
        max_tokens: 2000,
        top_p: 1,
        frequency_penalty: 0.1,
        presence_penalty: 0,
        n: 1,
      })
      try {
        if (Array.isArray(response.data.choices) && response.data.choices.length > 0) {
          setResponse(response.data.choices[0].message.content);
          console.log(response);
        } else {
          console.error("Invalid response:", response);
        }
      } catch(error) {
        console.error(error);
      }
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
