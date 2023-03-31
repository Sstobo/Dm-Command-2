import {getForgottenRealmsLocation} from '../../Data/Locations/ForgottenRealms';


const initialState = [
  { id: 'location-1', type: 'locations', content: 'The Forgotten Realms', payload: getForgottenRealmsLocation() },

];

function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LOCATIONS':
      return action.payload;
    case 'REMOVE_ACTIVE_ITEM':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
  export default locationsReducer;