const crZeroMonsters = [
  "The Awakened Shrub is a small, unassuming shrub that has somehow developed a rudimentary intelligence. It can move around and communicate with other creatures, though its vocabulary is limited. Despite its small size, it can be surprisingly dangerous in battle, especially when it catches enemies by surprise.",

  "Baboons are social animals that live in large groups called troops. They are intelligent and resourceful, using their strength and sharp teeth to hunt and defend themselves against predators. In battle, they can be formidable opponents, using their powerful jaws and sharp claws to tear apart their enemies.",

  "Badgers are small, fierce creatures with a reputation for being tenacious fighters. They are skilled diggers and can burrow through the ground quickly, making them difficult to track. In battle, they are known for their ferocity and determination, attacking with their sharp claws and teeth.",

  "Bats are nocturnal creatures that use echolocation to navigate and hunt. They are agile flyers and can swoop down on their prey with surprising speed. In battle, they can be difficult to hit due to their evasive maneuvers and rapid movements.",

  "Cats are graceful, agile creatures with sharp claws and teeth. They are intelligent and independent, often preferring to work alone rather than in groups. In battle, they can be surprisingly fierce opponents, using their speed and agility to dodge attacks and land powerful blows.",

  "Commoners are ordinary people with no particular skills or talents. They are not trained in combat and are generally weak and unprepared for battle. However, they can be useful in other ways, such as providing information or acting as decoys.",

  "Crabs are armored crustaceans that live in the ocean. They are skilled at hiding and can blend in with their surroundings to avoid detection. In battle, they can be surprisingly dangerous, using their powerful pincers to crush their enemies.",

  "Deer are swift and graceful creatures with keen senses. They are herbivores and generally avoid conflict, preferring to flee rather than fight. However, if cornered or threatened, they can be surprisingly aggressive, using their sharp hooves to kick and stomp their enemies.",

  "Eagles are majestic birds of prey with sharp talons and keen eyesight. They are powerful flyers and can swoop down on their prey with great accuracy. In battle, they can be difficult to hit and can cause significant damage with their talons and beak.",

  "Frogs are small, amphibious creatures with long tongues and sticky pads on their feet. They are skilled jumpers and can leap great distances to catch their prey. In battle, they can be surprisingly dangerous, using their speed and agility to dodge attacks and land powerful blows.",

  "Giant Fire Beetles are large, glowing insects that emit light from their abdomens. They are often used as a light source by adventurers exploring dark caves and dungeons. They are not particularly dangerous in battle, but can cause a distraction or annoyance to enemies.",

  "Goats are sturdy, sure-footed animals with sharp horns and a stubborn streak. They are strong and can be difficult to move or control once they have set their minds to something. In battle, they can be surprisingly fierce opponents, using their horns to gore and impale their enemies.",

  "Hawks are birds of prey with sharp talons and keen eyesight. They are skilled hunters and can swoop down on their prey with great speed and accuracy. In battle, they can be difficult to hit and can cause significant damage with their talons and beak.",

  "Homunculi are small, artificial creatures created through alchemy. They are intelligent and can be trained to perform a variety of tasks. In battle, they can be formidable opponents, using their speed and agility to dodge attacks and land powerful blows.",

  "Hyenas are scavengers with powerful jaws and sharp teeth. They are known for their distinctive laughter and their ability to take down much larger prey. In battle, they can be fierce opponents, using their strength and agility to overpower their enemies.",

  "Jackals are small, carnivorous animals with sharp teeth and keen senses. They are skilled hunters and can take down prey much larger than themselves. In battle, they can be surprisingly dangerous, using their speed and agility to dodge attacks and land powerful blows.",

  "Lemures are weak, mindless creatures that serve as cannon fodder for more powerful demons. They are not particularly dangerous in battle, but their sheer numbers can be overwhelming. They are often used as a distraction or a way to wear down enemies.",

  "Lizards are small, scaly creatures with long tails and sharp teeth. They are skilled climbers and can cling to walls and ceilings with ease. In battle, they can be surprisingly dangerous, using their speed and agility to dodge attacks and land powerful blows.",

  "Octopuses are aquatic creatures with eight tentacles and keen intelligence. They are skilled hunters and can camouflage themselves to blend in with their surroundings. In battle, they can be difficult to hit and can cause significant damage with their tentacles and beak.",

  "Owls are nocturnal birds of prey with sharp talons and keen eyesight. They are skilled hunters and can swoop down on their prey with great accuracy. In battle, they can be difficult to hit and can cause significant damage with their talons and beak.",

  "Quippers are small, aggressive fish with sharp teeth. They are often found in swarms and can take down much larger prey. In battle, they can be difficult to hit and can cause significant damage with their sharp teeth.",

  "Rats are small, agile creatures with sharp teeth and a nasty bite. They are skilled climbers and can squeeze through small spaces with ease. In battle, they can be surprisingly dangerous, using their speed and agility to dodge attacks and land powerful bites.",

  "Ravens are intelligent birds with a reputation for being harbingers of doom. They are skilled at mimicking sounds and can imitate human speech to some extent. In battle, they can be difficult to hit and can cause significant damage with their sharp beaks.",

  "Scorpions are arachnids with a venomous sting in their tail. They are skilled at hiding and can blend in with their surroundings to avoid detection. In battle, they can be surprisingly dangerous, using their speed and agility to dodge attacks and deliver powerful stings.",

  "Sea Horses are small, aquatic creatures with a distinctive curved tail. They are not particularly dangerous in battle, but their speed and agility can make them difficult to catch. They are often used as mounts by aquatic races.",

  "Shriekers are fungi that emit a loud, piercing sound when disturbed. They are often used as a warning system by creatures living in dark caves and dungeons. They are not particularly dangerous in battle, but their loud cries can attract unwanted attention.",

  "Spiders are eight-legged arachnids with venomous fangs. They are skilled at weaving webs and can use them to trap their prey. In battle, they can be surprisingly dangerous, using their speed and agility to dodge attacks and deliver powerful bites.",

  "Vultures are scavengers with sharp beaks and keen eyesight. They are often associated with death and decay. In battle, they can be difficult to hit and can cause significant damage with their sharp beaks.",

  "Weasels are small, agile creatures with sharp teeth and a nasty bite. They are skilled climbers and can squeeze through small spaces with ease. In battle, they can be surprisingly dangerous, using their speed and agility to dodge attacks and land powerful bites.",
];

export const getRandomCrZeroMonster = () => {
  let randomIndex = Math.floor(Math.random() * crZeroMonsters.length);
  return "   [ Monster: " + crZeroMonsters[randomIndex] + " ]   ";
};
