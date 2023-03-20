import { getForgottenRealmsLocation } from './ForgottenRealms';


export function UpdateLocations(locations, dispatch) {
 
  const updatedLocations = locations.map((location, index) => {
    let updatedPayload;
    switch (index) {
        case 0:
          updatedPayload = getForgottenRealmsLocation();
          break;
       
        default:
          updatedPayload = location.payload;
      }

      return {
        ...location,
        payload: updatedPayload,
      };
    });
  
    dispatch({ type: 'UPDATE_LOCATIONS', payload: updatedLocations });
  }
