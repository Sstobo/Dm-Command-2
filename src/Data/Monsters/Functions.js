import { getRandomCrZeroMonster } from './crZeroMonsters';
import { getRandomZeroToOneMonster } from './crZeroToOneMonsters';
import { getRandomCrOneMonster } from './crOneMonsters';
import { getRandomCrTwoMonster } from './crTwoMonsters';
import { getRandomCrThreeMonster } from './crThreeMonsters';
import { getRandomCrFourMonster } from './crFourMonsters';
import { getRandomCrFiveMonster } from './crFiveMonsters';
import { getRandomCrSixMonster } from './crSixMonsters';
import { getRandomCrSevenMonster } from './crSevenMonsters';
import { getRandomCrEightMonster } from './crEightMonsters';
import { getRandomCrNineMonster } from './crNineMonsters';
import { getRandomCrTenMonster } from './crTenMonsters';
import { getRandomCrElevenMonster } from './crElevenMonsters';
import { getRandomCrTwelveToFifteenMonster } from './crTwelveToFifteenMonsters';
import { getRandomCrSixteenToTwentyMonster } from './crSixteenToTwentyMonsters';
import { getRandomCrTwentyOneAndAboveMonster } from './crTwentyOneAndAboveMonsters';

export function UpdateMonsters(monsters, dispatch) {
  const updatedMonsters = monsters.map((monster, index) => {
  
      let updatedPayload;
      switch (index) {
        case 0:
          updatedPayload = getRandomCrZeroMonster();
          break;
        case 1:
          updatedPayload = getRandomZeroToOneMonster();
          break;
        case 2:
          updatedPayload = getRandomCrOneMonster();
          break;
        case 3:
          updatedPayload = getRandomCrTwoMonster();
          break;
        case 4:
          updatedPayload = getRandomCrThreeMonster();
          break;
        case 5:
          updatedPayload = getRandomCrFourMonster();
          break;
        case 6:
          updatedPayload = getRandomCrFiveMonster();
          break;
        case 7:
          updatedPayload = getRandomCrSixMonster();
          break;
        case 8:
          updatedPayload = getRandomCrSevenMonster();
          break;
        case 9:
          updatedPayload = getRandomCrEightMonster();
          break;
        case 10:
          updatedPayload = getRandomCrNineMonster();
          break;
        case 11:
          updatedPayload = getRandomCrTenMonster();
          break;
        case 12:
          updatedPayload = getRandomCrElevenMonster();
          break;
        case 13:
          updatedPayload = getRandomCrTwelveToFifteenMonster();
          break;
        case 14:
          updatedPayload = getRandomCrSixteenToTwentyMonster();
          break;
        case 15:
          updatedPayload = getRandomCrTwentyOneAndAboveMonster();
          break;
        default:
          updatedPayload = monster.payload;
      }
      
     
      return {
        ...monster,
        payload: updatedPayload,
      };
    });
  
    dispatch({ type: 'UPDATE_MONSTERS', payload: updatedMonsters });
  }
  