import { getRandomCityEncounter } from './CityEncounters';
import { getRandomDesertEncounter } from './DesertEncounters';
import { getRandomMountainEncounter } from './MountainEncounters';
import { getRandomOceanEncounter } from './OceanEncounters';
import { getRandomForestEncounter } from './ForestEncounters';

export function UpdateEncounters(encounters, dispatch) {
 
  const updatedEncounters = encounters.map((encounter, index) => {
    let updatedPayload;
    switch (index) {
        case 0:
          updatedPayload = getRandomCityEncounter();
          break;
        case 1:
          updatedPayload = getRandomDesertEncounter();
          break;
        case 2:
          updatedPayload = getRandomMountainEncounter();
          break;
        case 3:
          updatedPayload = getRandomOceanEncounter();
          break;
        case 4:
          updatedPayload = getRandomForestEncounter();
         
          break;
        default:
          updatedPayload = encounter.payload;
      }

      return {
        ...encounter,
        payload: updatedPayload,
      };
    });
  
    dispatch({ type: 'UPDATE_ENCOUNTERS', payload: updatedEncounters });
  }
