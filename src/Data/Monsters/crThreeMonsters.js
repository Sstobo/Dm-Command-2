const crThreeMonsters = [
  "The basilisk is a fearsome creature with the head of a cockerel and the body of a snake. Its gaze is said to be deadly, petrifying any who meet its eyes. They are known to live in desolate places, often underground or in caves, where their victims will have no chance of escape. Their skin is thick and scaly, making them difficult to harm with physical attacks. The basilisk is a creature to be avoided at all costs.",

  "The bearded devil is a fiendish creature from the lower planes. They are often summoned by evil sorcerers to do their bidding, and they delight in causing pain and suffering. They have sharp claws and a wicked beard that they can use to entangle their enemies. The bearded devil is a powerful foe, and only the bravest of adventurers would dare to face one.",
  
  "The blue dragon wyrmling is a creature of the desert, with scales as blue as the sky. They are aggressive and territorial, and will attack anything that enters their domain. They have sharp claws and teeth, as well as the ability to breathe lightning. The blue dragon wyrmling is a formidable opponent, and should not be taken lightly.",
  
  "The doppelganger is a shapeshifting creature that can take on the form of any humanoid. They are often used as spies or assassins, and are skilled at blending in with their surroundings. They have no natural form of attack, but are difficult to catch and can be dangerous in the right circumstances.",
  
  "The giant scorpion is a massive arachnid, with a poisonous sting that can kill a man in seconds. They are often found in deserts or other dry, rocky areas, where they prey on smaller creatures. They are difficult to kill, with a tough exoskeleton that can deflect blows. The giant scorpion is a creature that should be avoided at all costs.",
  
  "The gold dragon wyrmling is a creature of great beauty, with scales as bright as the sun. They are noble creatures, and are often worshipped by those who see them. They have sharp claws and teeth, as well as the ability to breathe fire. The gold dragon wyrmling is a rare and powerful ally, and those who earn their trust are fortunate indeed.",
  
  "The green hag is a creature of the swamps, with skin as slimy as a frog. They are known for their cunning and trickery, and are often used by evil sorcerers to do their bidding. They have long, sharp claws that they can use to attack their enemies, as well as the ability to cast spells. The green hag is a dangerous foe, and should not be underestimated.",
  
  "The hell hound is a fiendish creature from the lower planes, with fur as black as night. They are often used by evil sorcerers as guards or hunting companions. They have sharp teeth and claws, as well as the ability to breathe fire. The hell hound is a fearsome opponent, and should not be trifled with.",
  
  "The killer whale is a massive predator of the oceans, with teeth as long as a man's arm. They are known for their intelligence and hunting skills, and are often feared by sailors. They hunt in packs, and will attack anything that enters their territory. The killer whale is a dangerous creature, and those who encounter them should take caution.",
  
  "The knight is a warrior of great skill and honor, often serving a lord or lady. They are skilled with a sword and lance, and are often mounted on horseback. They are chivalrous to a fault, and will always fight with honor. The knight is a powerful ally, and those who earn their loyalty are fortunate indeed.",
  
  "The manticore is a fearsome creature, with the body of a lion, the wings of a bat, and the tail of a scorpion. They are known for their savage attacks, and are often used by evil sorcerers as guardians. They have sharp teeth and claws, as well as the ability to shoot quills from their tail. The manticore is a creature to be feared, and those who face one should do so with caution.",
  
  "The minotaur is a creature of legend, with the head of a bull and the body of a man. They are known for their strength and ferocity, and are often used as guards or soldiers. They wield massive axes, and are skilled in combat. The minotaur is a powerful opponent, and those who face one should be prepared for a difficult fight.",
  
  "The mummy is an undead creature, wrapped in bandages and cursed to roam the earth forever. They are often found in ancient tombs or ruins, where they guard treasure or sacred artifacts. They are difficult to kill, with a tough outer layer that can deflect blows. The mummy is a creature that should be avoided at all costs.",
  
  "The nightmare is a creature of the lower planes, with a body as black as coal. They are known for their ability to cause fear and terror in their enemies, and are often used by evil sorcerers to do their bidding. They have sharp claws and teeth, as well as the ability to breathe fire. The nightmare is a fearsome opponent, and should not be taken lightly.",
  
  "The owlbear is a hybrid creature, with the body of a bear and the head of an owl. They are known for their ferocity and strength, and are often used as guards or hunting companions. They have sharp claws and teeth, as well as the ability to fly short distances. The owlbear is a powerful opponent, and those who face one should be prepared for a difficult fight.",
  
  "The phase spider is a creature from the ethereal plane, able to shift between worlds at will. They are known for their agility and speed, and are often used by adventurers as mounts. They have sharp fangs and claws, as well as the ability to teleport short distances. The phase spider is a rare and valuable ally, and those who earn their trust are fortunate indeed.",
  
  "The veteran is a warrior of great skill and experience, often serving as a leader of men. They are skilled with a variety of weapons, and are often used in battles or wars. They are tough and resilient, able to withstand damage that would fell others. The veteran is a powerful ally, and those who earn their respect are fortunate indeed.",
  
  "The werewolf is a creature of legend, cursed to transform into a wolf under the light of the full moon. They are known for their strength and ferocity, and are often feared by those who encounter them. They have sharp teeth and claws, and are difficult to kill. The werewolf is a creature that should be avoided at all costs.",
  
  "The wight is an undead creature, with a pale, waxy complexion. They are often found in graveyards or other places of death, where they prey on the living. They have sharp claws and teeth, as well as the ability to drain the life force from their victims. The wight is a fearsome opponent, and those who face one should do so with caution.",
  
  "The winter wolf is a creature of the northern tundras, with fur as white as snow. They are known for their strength and hunting skills, and are often used by evil sorcerers as guardians. They have sharp teeth and claws, as well as the ability to breathe a blast of freezing air. The winter wolf is a powerful opponent, and those who face one should be prepared for a difficult fight."

]

export const getRandomCrThreeMonster = () => {
    let randomIndex = Math.floor(Math.random() * crThreeMonsters.length);
    return (
    "   [ Monster: " + crThreeMonsters[randomIndex] + " ]   "

  );
};
