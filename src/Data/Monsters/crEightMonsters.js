const crEightMonsters = [
  "The Assassin is a deadly and silent killer that can strike from the shadows without warning. They are trained in the art of assassination, using poisons, garrotes, or any other weapon at their disposal to dispatch their targets. They are masters of disguise, blending into crowds and waiting patiently for the perfect moment to strike. Their agility and speed make them difficult to catch, and they will do whatever it takes to complete their mission and escape undetected.",

  "The Chain Devil is a terrifying creature whose very presence inspires fear in those who witness it. Covered in chains which it uses with deadly accuracy, it is a skilled combatant, able to strike from a distance or up close. Its chains have razor-sharp edges, and it uses them to slice through armor and flesh alike. Its eyes glow with an otherworldly light, and its voice is a guttural growl that sends shivers down the spine of even the bravest warriors.",
  
  "The Cloaker is a strange and eerie creature that resembles a large cloak or cape. It is capable of flight, and it can glide silently through the air, undetected by those below. Its body is covered in a thick, leathery hide that provides excellent protection from attacks. It is able to emit a series of low-frequency sounds that can disorient its prey, making them easy targets. The Cloaker is a master of deception, and it can create illusions to confuse and misdirect its enemies.",
  
  "The Frost Giant is a towering figure, standing well over 20 feet tall. Covered in thick fur and ice, it is incredibly resilient to cold temperatures, and it can withstand even the harshest blizzard. Its massive strength allows it to wield heavy weapons with ease, and its icy breath can freeze even the strongest of foes. The Frost Giant is a fearsome opponent, and few are brave enough to stand against it in battle.",
  
  "The Hezrou is a massive, toad-like creature with a gaping maw filled with razor-sharp teeth. It is an incredibly powerful demon, capable of unleashing a flurry of attacks with its claws and tail. It can also unleash a toxic cloud of gas that can incapacitate its enemies, leaving them helpless to its attacks. The Hezrou is a creature of pure evil, and it delights in causing pain and suffering wherever it goes.",
  
  "The Hydra is a legendary beast with multiple heads that can regrow when severed. It is an incredibly difficult creature to defeat, as its regenerative abilities make it nearly invincible. Its razor-sharp teeth and claws can tear through armor and flesh with ease, and its venomous breath can incapacitate even the strongest of warriors. The Hydra is a creature of myth and legend, and those who dare to face it in battle do so at their own peril.",
  
  "The Spirit Naga is a powerful creature that resembles a giant serpent. It is able to cast powerful spells that can immobilize its enemies or cause them great harm. Its venomous bite can paralyze its prey, leaving them vulnerable to its attacks. The Spirit Naga is a creature of great wisdom, and it is said that those who are able to defeat it may be granted great power and knowledge.",
  
  "The Tyrannosaurus Rex is a massive predator with razor-sharp teeth and powerful jaws. It is an incredibly fast and agile creature, able to run down its prey with ease. Its roar is deafening, and it can cause buildings to shake with its mighty footsteps. The Tyrannosaurus Rex is a creature of pure instinct, and it will stop at nothing to satisfy its hunger.",
  
  "The Young Bronze Dragon is a majestic creature with shimmering scales that reflect the light like polished metal. It is a creature of great wisdom and intelligence, and it is known to be a wise and just ruler. Its powerful wings allow it to fly through the air with ease, and its breath weapon can unleash a blast of lightning that can devastate its enemies. The Young Bronze Dragon is a noble creature, and it is highly respected by all who encounter it.",
  
  "The Young Green Dragon is a cunning and deceitful creature that delights in trickery and misdirection. Its scales blend perfectly with the surrounding foliage, allowing it to ambush its prey with ease. Its breath weapon can unleash a cloud of poisonous gas that can incapacitate or kill its enemies. The Young Green Dragon is a creature of great cunning, and those who are able to defeat it must be equally crafty and resourceful."
];

export const getRandomCrEightMonster = () => {
    let randomIndex = Math.floor(Math.random() * crEightMonsters.length);
    return (
      "   [ Monster: " +
      crEightMonsters[randomIndex] + " ]   "
    );
  };
  
