import { getRandomElfNPC } from '../../Data/NPCs/elfNPCs';
import { getRandomDwarfNPC } from '../../Data/NPCs/dwarfNPCs';
import { getRandomHumanNPC } from '../../Data/NPCs/humanNPCs';
import { getRandomForgottenRealmsGods } from '../../Data/NPCs/forgottenRealmsGods';


const initialState = [
    { id: 'npc-1', content: 'Elf NPC', payload: getRandomElfNPC() },
    { id: 'npc-2', content: 'Human NPC', payload: getRandomHumanNPC() },
    { id: 'npc-3', content: 'Dwarf NPC', payload: getRandomDwarfNPC() },
    { id: 'npc-4', content: 'God: Forgotten Realms', payload: getRandomForgottenRealmsGods() },
];

function npcsReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_NPCS':
      return action.payload;
    case 'REMOVE_ACTIVE_ITEM':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
  export default npcsReducer;