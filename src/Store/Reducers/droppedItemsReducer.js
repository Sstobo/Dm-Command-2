const initialState = [];

const droppedItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'UPDATE_ITEM':
      return state.map((item) => (item.id === action.payload.id ? action.payload : item));
    case 'UPDATE_DROPPED_ITEMS':
      return action.payload;
    case 'UPDATE_ENCOUNTERS':
      return state.map((item) =>
        item.type === 'encounter' ? { ...item, payload: action.payload } : item
      );
    case 'UPDATE_MONSTERS':
      return state.map((item) =>
        item.type === 'monster' ? { ...item, payload: action.payload } : item
      );
      case 'SYNC_DROPPED_ITEMS':
        return state.map((item) => {
          if (item.type === 'encounter') {
            const updatedEncounter = action.encounters.find((encounter) => encounter.id === item.id);
            return updatedEncounter ? { ...item, payload: updatedEncounter.payload } : item;
          } else if (item.type === 'monster') {
            const updatedMonster = action.monsters.find((monster) => monster.id === item.id);
            return updatedMonster ? { ...item, payload: updatedMonster.payload } : item;
          }
          return item;
        });
    
    default:
      return state;
  }
};

export default droppedItemsReducer;