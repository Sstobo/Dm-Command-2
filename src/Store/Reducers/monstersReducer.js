import { getRandomCrZeroMonster } from '../../Data/Monsters/crZeroMonsters';
import { getRandomZeroToOneMonster } from '../../Data/Monsters/crZeroToOneMonsters';
import { getRandomCrOneMonster } from '../../Data/Monsters/crOneMonsters';
import { getRandomCrTwoMonster } from '../../Data/Monsters/crTwoMonsters';
import { getRandomCrThreeMonster } from '../../Data/Monsters/crThreeMonsters';
import { getRandomCrFourMonster } from '../../Data/Monsters/crFourMonsters';
import { getRandomCrFiveMonster } from '../../Data/Monsters/crFiveMonsters';
import { getRandomCrSixMonster } from '../../Data/Monsters/crSixMonsters';
import { getRandomCrSevenMonster } from '../../Data/Monsters/crSevenMonsters';
import { getRandomCrEightMonster } from '../../Data/Monsters/crEightMonsters';
import { getRandomCrNineMonster } from '../../Data/Monsters/crNineMonsters';
import { getRandomCrTenMonster } from '../../Data/Monsters/crTenMonsters';
import { getRandomCrElevenMonster } from '../../Data/Monsters/crElevenMonsters';
import { getRandomCrTwelveToFifteenMonster } from '../../Data/Monsters/crTwelveToFifteenMonsters';
import { getRandomCrSixteenToTwentyMonster } from '../../Data/Monsters/crSixteenToTwentyMonsters';
import { getRandomCrTwentyOneAndAboveMonster } from '../../Data/Monsters/crTwentyOneAndAboveMonsters';

const initialState = [
    { id: 'monster-1', content: 'CR 0 Creature', payload: getRandomCrZeroMonster() },
    { id: 'monster-2', content: 'CR 0-1 Creature', payload: getRandomZeroToOneMonster() },
    { id: 'monster-3', content: 'CR 1 Creature', payload: getRandomCrOneMonster() },
    { id: 'monster-4', content: 'CR 2 Creature', payload: getRandomCrTwoMonster() },
    { id: 'monster-5', content: 'CR 3 Creature', payload: getRandomCrThreeMonster() },
    { id: 'monster-6', content: 'CR 4 Creature', payload: getRandomCrFourMonster() },
    { id: 'monster-7', content: 'CR 5 Creature', payload: getRandomCrFiveMonster() },
    { id: 'monster-8', content: 'CR 6 Creature', payload: getRandomCrSixMonster() },
    { id: 'monster-9', content: 'CR 7 Creature', payload: getRandomCrSevenMonster() },
    { id: 'monster-10', content: 'CR 8 Creature', payload: getRandomCrEightMonster() },
    { id: 'monster-11', content: 'CR 9 Creature', payload: getRandomCrNineMonster() },
    { id: 'monster-12', content: 'CR 10 Creature', payload: getRandomCrTenMonster() },
    { id: 'monster-13', content: 'CR 11 Creature', payload: getRandomCrElevenMonster() },
    { id: 'monster-14', content: 'CR 12-15 Creature', payload: getRandomCrTwelveToFifteenMonster() },
    { id: 'monster-15', content: 'CR 16-20 Creature', payload: getRandomCrSixteenToTwentyMonster() },
    { id: 'monster-16', content: 'CR 21+ Creature', payload: getRandomCrTwentyOneAndAboveMonster() },
  ];

const monstersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_MONSTERS':
        return action.payload;
      case 'REMOVE_ACTIVE_ITEM':
        return state.filter((item) => item.id !== action.payload);
      default:
        return state;
    }
  }

export default monstersReducer;