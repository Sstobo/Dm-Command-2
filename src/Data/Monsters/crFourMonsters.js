const crFourMonsters = [

  "The Black Pudding is a massive, amorphous creature that looks like a writhing blob of tar. Its thick, viscous body moves slowly and leaves a trail of sizzling acid behind it, dissolving anything in its path. Its surface is covered in small, writhing tendrils that lash out at anything that comes too close, ready to ensnare and dissolve its prey. The Black Pudding is a mindless, predatory horror that seeks out living creatures to consume. It has no desires or motivations other than to feed and dissolve anything in its path. The Black Pudding is a nightmarish, amorphous horror that will attack anything that it perceives as a threat or potential meal.",

  "The Chuul is a nightmare from the depths of the sea, a massive lobster-like creature with four powerful legs and two pincers that could crush a boulder. Its body is covered in tough, chitinous armor that deflects most physical attacks, and it has a pair of antennae on its head that can detect even the slightest vibrations. Its eyes glow with an otherworldly, menacing light that sends shivers down the spine of its prey. The Chuul is a predatory creature that hunts for food and seeks out creatures to capture and eat. It is also territorial and will fiercely defend its lair from intruders. The Chuul is a formidable, aggressive, and dangerous opponent that will attack anything that enters its territory or threatens its food supply.",
  
  "Elephants are awe-inspiring creatures that inspire both fear and admiration. They stand over 10 feet tall and weigh upwards of 10,000 pounds, with thick, rough skin that protects them from predators. Their large ears can detect even the faintest sounds from miles away and regulate their body temperature, while their long trunks are incredibly dexterous and can pick up even the smallest objects. Elephants are intelligent animals that live in social groups called herds, and they are herbivores that can eat up to 300 pounds of vegetation per day. In spite of their massive size, elephants are gentle giants that inspire respect and awe.",
  
  "The Ettin is a monstrous, two-headed brute that reeks of raw, primal power. Its massive body is covered in thick, leathery skin that resists most physical attacks. Each of its two heads has its own personality and desires, often leading to conflict within the creature itself. Its eyes glow with an otherworldly, malevolent light that betrays its bloodthirsty nature. The Ettin is a savage, monstrous beast that delights in crushing its enemies beneath its massive fists.",
  
  "Ghosts are the stuff of nightmares, the spirits of deceased beings that have not moved on to the afterlife. They appear as translucent figures, often resembling their physical form in life but with an ethereal quality that chills the bones of those who see them. Ghosts can move through solid objects and cannot be harmed by physical attacks, making them nearly impossible to stop. They are often bound to the place of their death, unable to move on until they have resolved the issues that keep them tethered to the mortal realm.",
  
  "The Lamia is a seductive, demonic creature with the upper body of a woman and the lower body of a serpent. Its smooth, olive-toned skin seems to shimmer in the light, while its snake-like tail is covered in scales that glisten like jewels. Lamias possess powerful magic abilities and use them to lure humanoids into traps or manipulate them for their own gain. Their eyes glow with an otherworldly, hypnotic light that can ensnare even the most stalwart of adventurers.",
  
  "Red Dragon Wyrmlings are the fiery offspring of these legendary beasts, with bright red scales covering their bodies that gleam in the light. They possess powerful jaws filled with sharp teeth that can tear through even the toughest armor, and can breathe fire up to 30 feet away from them in a raging inferno that can incinerate entire groups. Red Dragon Wyrmlings are dangerous, aggressive creatures that will attack anything that threatens their territory or treasure hoard.",
  
  "Succubi (female) and Incubi (male) are the stuff of nightmares, demonic creatures that feed on the life force of mortals by seducing them into acts of passion. They appear as beautiful humanoids with bat-like wings and horns protruding from their foreheads, their skin as smooth as silk and their eyes gleaming with an otherworldly, hypnotic light. Succubi and Incubi are formidable foes that can ensnare even the most stalwart of adventurers with their seductive charms.",
  
  "The Wereboar is a cursed, lycanthropic creature that can transform into a savage boar-like monster at will or during periods of lunar activity. When transformed, Wereboars possess razor-sharp tusks and incredible strength, able to crush even the toughest armor with ease. Their eyes gleam with an otherworldly, malevolent light that betrays their bloodthirsty nature. The Wereboar is a savage, monstrous beast that delights in crushing its enemies beneath its massive tusks.",
  
  "The Weretiger is another cursed, lycanthropic creature that can transform into a tiger-like monster at will or during periods of lunar activity. When transformed, Weretigers possess incredible speed and agility, able to move faster than the eye can see and leap incredible distances. Their razor-sharp claws can tear through even the toughest armor, while their eyes gleam with an otherworldly, hypnotic light that can ensnare even the most stalwart of adventurers. The Weretiger is a dangerous predator that will attack anything that threatens its territory or pack."
];

export const getRandomCrFourMonster = () => {
  let randomIndex = Math.floor(Math.random() * crFourMonsters.length);
  return (
    "   [ Monster: " +
    crFourMonsters[randomIndex] + " ]   "
  );
};
