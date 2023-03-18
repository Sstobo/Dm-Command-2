import { UpdateEncounters } from "../Data/Encounters/Functions";
import { UpdateMonsters } from "../Data/Monsters/Functions";
import { UpdateNPCs } from "../Data/NPCs/Functions";

export function handleDragStart(event, encounters, monsters, npcs, droppedItems, setActiveId) {
  if (!event.active || !event.active.id) {
    return;
  }

  const activeItem =
    encounters.find((item) => item.id === event.active.id) ||
    monsters.find((item) => item.id === event.active.id) ||
    npcs.find((item) => item.id === event.active.id) ||
    droppedItems.find((item) => item.id === event.active.id);
  setActiveId(activeItem.id);
}

export function handleDragEnd(event, encounters, monsters, npcs, droppedItems, setDroppedItems, dispatch) {
  UpdateEncounters(encounters, dispatch);
  UpdateMonsters(monsters, dispatch);
  UpdateNPCs(npcs, dispatch);
  const { active, over } = event;

  // Check if the item is dropped outside the droppable area
  if (!over) {
    setDroppedItems((prevItems) =>
      prevItems.filter((item) => item.id !== active.id)
      );
      return;
    }
  
    if (over) {
      const droppedItem = droppedItems.find((item) => item.id === active.id);
      if (!droppedItem) {
        const activeItem =
          encounters.find((item) => item.id === active.id) ||
          monsters.find((item) => item.id === active.id) ||
          npcs.find((item) => item.id === active.id);
        const uniqueId = `${activeItem.id}-${Date.now()}`;
        setDroppedItems((prevItems) => [
          ...prevItems,
          { ...activeItem, id: uniqueId },
        ]);
      } else {
        const updatedItem =
          encounters.find((item) => item.id === droppedItem.id) ||
          monsters.find((item) => item.id === droppedItem.id) ||
          npcs.find((item) => item.id === droppedItem.id);
        if (updatedItem) {
          setDroppedItems((prevItems) =>
            prevItems.map((item) =>
              item.id === updatedItem.id ? updatedItem : item
            )
          );
        }
      }
    }
  }