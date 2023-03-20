import { combineReducers } from 'redux';
import encountersReducer from './encountersReducer';
import monstersReducer from './/monstersReducer';
import droppedItemsReducer from './droppedItemsReducer';
import npcsReducer from './npcReducer';
import locationsReducer from './locationsReducer';

const rootReducer = combineReducers({
  encounters: encountersReducer,
  monsters: monstersReducer,
  droppedItems: droppedItemsReducer,
  npcs: npcsReducer,
  locations: locationsReducer,
});

export default rootReducer;