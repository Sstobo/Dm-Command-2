import { getRandomCityEncounter } from '../../Data/Encounters/CityEncounters';
import { getRandomDesertEncounter } from '../../Data/Encounters/DesertEncounters';
import { getRandomMountainEncounter } from '../../Data/Encounters/MountainEncounters';
import { getRandomOceanEncounter } from '../../Data/Encounters/OceanEncounters';
import { getRandomForestEncounter } from '../../Data/Encounters/ForestEncounters';


const initialState = [
  { id: 'encounter-1', type: 'encounters', content: 'City Encounter', payload: getRandomCityEncounter() },
  { id: 'encounter-2', type: 'encounters', content: 'Desert Encounter', payload: getRandomDesertEncounter() },
  { id: 'encounter-3', type: 'encounters', content: 'Mountain Encounter', payload: getRandomMountainEncounter() },
  { id: 'encounter-4', type: 'encounters', content: 'Ocean Encounter', payload: getRandomOceanEncounter() },
  { id: 'encounter-5', type: 'encounters', content: 'Forest Encounter', payload: getRandomForestEncounter() },
];

function encountersReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_ENCOUNTERS':
      return action.payload;
    case 'REMOVE_ACTIVE_ITEM':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
  export default encountersReducer;