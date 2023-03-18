const crSevenMonsters = [
  "The Giant Ape is an enormous primate that stands over 16 feet tall and weighs more than 1,000 pounds. Its fur is black or brown, and it has long, muscular arms that end in powerful fists capable of crushing boulders. The Giant Ape is intelligent and can use simple tools, making it a formidable opponent in combat. Its roar can be heard for miles, and its ferocity is unmatched. The Giant Ape is a solitary creature that lives in dense forests, and it is known to be fiercely protective of its territory.",

  "The Oni is a demonic creature that stands over 9 feet tall and has blue or green skin. It has sharp claws and fangs, and its eyes glow red in the dark. The Oni is a master of deception and can shape-shift into any form it desires. It is known to be cruel and sadistic, delighting in the suffering of others. The Oni is a powerful spellcaster, able to cast spells of fire, ice, and lightning with ease. It is often summoned by evil wizards to do their bidding.",
  
  "The Shield Guardian is a magical construct that resembles a golem made of metal and stone. It stands over 8 feet tall and is powered by a magical gemstone embedded in its chest. The Shield Guardian is created to protect its master and can be commanded to attack enemies or defend its master from harm. It is immune to most forms of magic and can absorb spells directed at its master. The Shield Guardian is a formidable opponent in combat and can be a valuable ally to any adventurer.",
  
  "The Stone Giant is a massive humanoid creature that stands over 18 feet tall and weighs more than 2,000 pounds. Its skin is made of hard, gray stone, and its eyes glow like embers. The Stone Giant is a skilled warrior and is capable of hurling boulders with incredible force. It is also a master craftsman, able to shape stone with its bare hands into intricate sculptures and structures. The Stone Giant is a solitary creature that lives in mountain ranges and is known to be fiercely territorial.",
  
  "The Young Black Dragon is a fearsome creature that resembles a giant, winged reptile with black scales. It stands over 10 feet tall and has razor-sharp teeth and claws. The Young Black Dragon is a master of the element of acid and can breathe a jet of acid that can dissolve metal and stone. It is also a skilled hunter and can ambush prey from the air or water. The Young Black Dragon is fiercely territorial and will attack any creature that enters its domain.",
  
  "The Young Copper Dragon is a magnificent creature that resembles a giant, winged reptile with scales that shimmer like polished copper. It stands over 10 feet tall and has sharp teeth and claws. The Young Copper Dragon is a master of the element of acid and can breathe a jet of acid that can dissolve metal and stone. It is also a skilled trickster and enjoys playing practical jokes on unsuspecting creatures. The Young Copper Dragon is a valuable ally to adventurers and will often offer its aid in exchange for treasure or help with a task."
];

export const getRandomCrSevenMonster = () => {
  let randomIndex = Math.floor(Math.random() * crSevenMonsters.length);
  return (
    "   [ Monster: " +
    crSevenMonsters[randomIndex] + " ]   "
  );
};
