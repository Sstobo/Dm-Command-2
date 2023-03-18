const crTenMonsters = [
  "Aboleths are ancient, aquatic creatures that have existed since before the gods themselves. They possess immense psychic powers, with the ability to enslave the minds of lesser beings and manipulate their memories. Their slimy bodies are covered in mucus and tentacles, and they are capable of secreting a potent slime that can turn creatures into mindless thralls. Aboleths are incredibly intelligent, with vast knowledge of the world's history and secrets hidden beneath the waves. They are often worshipped as gods by primitive underwater civilizations, using their power to control and manipulate their followers to do their bidding.",

  "Devas are celestial beings, tasked with serving the will of the gods. They are powerful warriors and spellcasters, with the ability to heal wounds and strike down their enemies with divine power. Devas are winged beings, with bright, radiant skin and eyes that glow with an inner light. They are incorruptible and virtuous, and their very presence inspires hope and courage in those around them. Devas are often sent to the mortal realm to aid heroes in their quests against evil, and their arrival is seen as a sign of the gods' favor.",
  
  "Guardian Nagas are serpentine creatures that serve as protectors of sacred places and artifacts. They possess venomous bites and the ability to constrict their prey, but their true strength lies in their magical powers. Guardian Nagas are able to cast a wide array of spells, including the ability to heal injuries and remove curses. They are fiercely loyal to their charges, and will stop at nothing to defend them from harm. Guardian Nagas are often found in temples and other holy sites, where they serve as guardians of ancient relics and powerful artifacts.",
  
  "Stone Golems are towering constructs made of solid rock and animated by magical energy. They are nearly indestructible, with the ability to shrug off most physical attacks. Stone Golems are slow-moving but incredibly strong, and they are capable of dealing massive damage to anything that stands in their way. They are often used as guardians of tombs and other ancient ruins, where their unyielding nature makes them perfect protectors of the treasures within.",
  
  "Young Gold Dragons are majestic creatures that radiate an aura of power and goodness. They are intelligent and wise, with the ability to speak and understand multiple languages. Young Gold Dragons are formidable opponents in combat, with the ability to breathe a deadly cone of fire and unleash powerful spells. They are also able to heal themselves and their allies with their innate magic. Young Gold Dragons are guardians of the natural world, and they will use their power to protect the innocent and punish those who would harm the environment.",
  
  "Young Red Dragons are ferocious and bloodthirsty creatures, driven by a desire for power and treasure. They are massive, with scales as hard as steel and wings that blot out the sun. Young Red Dragons are able to breathe a cone of fire that can incinerate entire villages and are skilled in using their claws and teeth to rend their foes. They are cunning and ruthless, with little regard for the lives of those who stand in their way. Young Red Dragons are often found hoarding vast treasures in their lairs, using their power to command armies of kobolds and other lesser creatures to do their bidding.",
]

export const getRandomCrTenMonster = () => {
    let randomIndex = Math.floor(Math.random() * crTenMonsters.length);
    return (
      "   [ Monster: " +
      crTenMonsters[randomIndex] + " ]   "

    );
  };
  