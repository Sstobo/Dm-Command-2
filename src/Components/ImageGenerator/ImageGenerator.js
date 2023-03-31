import React, { useEffect, useState } from 'react';


export const getImageURL = async (prompt) => {
    // const finalPrompt =
    //   "Epic fantasy art in the style of Frank Frazetta. The following prompt is a quote, not a description: " +
    //   prompt;
  
    // const regex = /(<([^>]+)>)/gi;
    // const cleanPrompt = finalPrompt.replace(regex, "");
  
    // const formattedPrompt = cleanPrompt.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
  
    // const shortPrompt =
    //   formattedPrompt.length > 500
    //     ? formattedPrompt.substring(0, 500) + "..."
    //     : formattedPrompt;
    // const engineId = 'stable-diffusion-v1-5';
    // const apiHost = process.env.API_HOST ?? 'https://api.stability.ai';
    // const apiKey = "sk-DEqCq43lzj8rT0dK9TwxkQAvk62No3qk88vgoN17O6WIyFWo";
    // console.log(shortPrompt)
    // if (!apiKey) throw new Error('Missing Stability API key.');
  
    // const response = await fetch(
    //   `${apiHost}/v1/generation/${engineId}/text-to-image`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept:'application/json',
    //       Authorization: `Bearer ${apiKey}`,
    //     },
    //     body: JSON.stringify({
    //       text_prompts: [
    //         {
    //           text: shortPrompt,
    //         },
    //       ],
    //       cfg_scale: 7,
    //       clip_guidance_preset: 'FAST_BLUE',
    //     //   height: 512,

    //     //   width: 512,
    //     // larger
          
    //         height: 1024,
    //         width: 1024,

    //       samples: 1,
    //       steps: 30,
    //     }),
    //   }
    // );
  
    // if (!response.ok) {
    //   throw new Error(`Non-200 response: ${await response.text()}`);
    // }
  
    // const responseJSON = await response.json();
    // let imageURL = '';
  
    // responseJSON.artifacts.forEach((image, index) => {
    //   imageURL = `data:image/png;base64,${image.base64}`;
    // });

    // return imageURL;
  };