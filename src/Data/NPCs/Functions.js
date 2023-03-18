
import { getRandomElfNPC } from './elfNPCs';
import { getRandomHumanNPC } from './humanNPCs';
import { getRandomDwarfNPC } from './dwarfNPCs';
import { getRandomForgottenRealmsGods } from './forgottenRealmsGods';

export function UpdateNPCs(npcs, dispatch) {
 
  const updatedNPCs = npcs.map((npc, index) => {
    let updatedPayload;
    switch (index) {
        case 0:
          updatedPayload = getRandomElfNPC();
          break;
        case 1:
          updatedPayload = getRandomHumanNPC();
          break;
        case 2:
          updatedPayload = getRandomDwarfNPC();
          break;
        case 3:
          updatedPayload = getRandomForgottenRealmsGods();
          break;
       
        default:
          updatedPayload = npc.payload;
      }

      return {
        ...npc,
        payload: updatedPayload,
      };
    });
  
    dispatch({ type: 'UPDATE_NPCS', payload: updatedNPCs });
  }
