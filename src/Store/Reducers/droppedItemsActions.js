export const updateDroppedItems = (type, payload) => {
    return {
      type,
      payload,
    };
  };


  export const syncDroppedItems = (encounters, monsters) => {
    return {
      type: 'SYNC_DROPPED_ITEMS',
      encounters,
      monsters,
    };
  };