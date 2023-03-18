import { combineReducers } from 'redux';
import encountersReducer from './encountersReducer';
import monstersReducer from './/monstersReducer';
import droppedItemsReducer from './droppedItemsReducer';
import npcsReducer from './npcReducer';

const rootReducer = combineReducers({
  encounters: encountersReducer,
  monsters: monstersReducer,
  droppedItems: droppedItemsReducer,
  npcs: npcsReducer,
});

export default rootReducer;