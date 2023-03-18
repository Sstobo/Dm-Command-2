export function getRandomOceanEncounter() {
  let encounterOptions = [
    "As you sail through the tranquil ocean waters, you come across a small island surrounded by dangerous-looking rocks and reefs. But as you approach, you notice something odd about the island - it appears to be moving. As you draw closer, it becomes clear that this is no island at all but a massive sea turtle sunning itself on the surface of the water.",

    "As you sail through a dense fog bank, your ship suddenly comes to a stop. You look over the side and realize that you are tangled in a massive seaweed forest - one that seems to move and shift of its own accord. As you try to free your vessel from its clutches, strange creatures emerge from the depths below.",
    
    "You come across what appears to be an abandoned ship floating adrift in the middle of nowhere. As you board it, you realize that something terrible must have happened here - there are signs of struggle everywhere, and the ship's cargo hold has been completely emptied except for one strange artifact that seems to pulse with magical energy.",
    
    "As you sail through open waters, a massive storm suddenly appears on the horizon. The waves grow higher and higher until they begin to crest over the deck of your ship. As lightning strikes all around, you realize that something is stirring beneath the waves - something that may be causing this unnatural tempest.",
    
    "You spot what looks like a deserted island on the horizon - until it suddenly disappears beneath the waves. As your crew rushes to investigate, they find themselves face-to-face with an enormous sea serpent who seems none too pleased about having visitors in his territory.",
    
    "You come across what appears to be a floating city on the horizon - one made entirely out of wood and rope. As you draw closer, however, it becomes clear that this is no ordinary city but a fleet of pirate ships disguised as such. They seem eager for new recruits but warn that there are many dangers ahead if you choose to join their ranks.",
    
    "As you sail through open waters, your ship suddenly comes under attack by a swarm of giant jellyfish. Their stingers are deadly and seem impervious to normal weapons. Your crew must quickly find a way to fend off this seemingly impossible threat before it's too late.",
    
    "You spot what looks like an enormous whale breaching nearby - until it turns and heads straight for your vessel. As it rams into your ship again and again, it becomes clear that this is not just any whale but some kind of magical creature with its own agenda.",
    
    "You come across what appears to be an enormous coral reef stretching as far as the eye can see. But as you get closer, strange things begin happening - colors start changing at random intervals and some sections seem to shift and move like they're alive. It becomes clear that this is no ordinary reef but some kind of sentient organism with its own desires.",
    
    "As you sail through calm waters under a sunny sky, something suddenly breaches nearby - something impossibly large and terrifyingly fast. It's not until it surfaces again right next to your ship that you realize what it is: an enormous kraken with tentacles long enough to wrap around your vessel ten times over.",

    "As you stand on the deck of your ship, you feel the salty spray of the ocean mist on your face. The vast expanse of blue water stretches out as far as the eye can see, and you can't help but feel a sense of both awe and trepidation at what lies ahead.",

"As you sail through the ocean, you come across a small island in the distance. It seems uninhabited, but there is something strange about it - perhaps an eerie mist that hangs over its shores or a strange energy emanating from within its depths.",

"As you sail through a particularly treacherous stretch of ocean, you hear the faint sound of singing coming from somewhere beneath the waves. It seems to be a haunting melody that draws sailors to their death - will you be able to resist its siren call?",

"You encounter a massive sea creature that dwarfs your ship in size. Its enormous tentacles writhe through the water as it approaches, and its eyes seem to fixate on your vessel with an unsettling intensity. Is it friend or foe? Only time will tell.",

"As you navigate through dense fog banks on the ocean surface, you suddenly come across a ghost ship drifting aimlessly in the mist. It seems like it has been abandoned for centuries - but as you approach, strange things begin to happen that make you question whether it's truly deserted.",

"You come across a bustling port city, teeming with life and activity. But something feels off about this place - perhaps its inhabitants are too friendly or too eager to trade. As night falls and shadows lengthen, things become even more unsettling - who knows what lurks in the dark corners of this seaside town?",

"You encounter a cluster of small islands surrounded by treacherous reefs and rocky shoals. As you attempt to navigate through them, strange shapes move beneath the waves - perhaps dangerous sea monsters or valuable sunken treasure waiting to be discovered.",

"As you sail through uncharted waters, you come across an enormous whirlpool that threatens to suck your ship under at any moment. But as you get closer, it becomes clear that something lurks within its depths - something dark and dangerous that could spell disaster for any unwary traveler.",

"You encounter a massive storm system at sea, with violent winds and towering waves threatening to capsize your ship at any moment. But amidst this chaos, something even more sinister seems to be stirring - perhaps an otherworldly entity that is using the storm as cover for some nefarious purpose.",

"As night falls on your journey through the open sea, strange lights begin to appear in the sky above - perhaps some kind of magical phenomenon unique to these waters? But as they grow closer and more intense with each passing moment, it becomes clear that this light show may be far more dangerous than previously thought.",

"As you sail across the endless sea, you come across a mysterious island shrouded in mist. It is said that the island is home to a powerful sorcerer, and that he guards a great treasure within its depths. But as you approach the shore, you realize that there is something strange about this place - perhaps something dangerous lurks beneath the surface of the water.",

"As you sail across the calm ocean waters, you hear a faint melody carried on the wind. Following the sound leads you to a group of mermaids singing and playing instruments on a nearby rock formation. They seem friendly enough, but be warned - mermaids are known for their trickery and may not have your best interests at heart.",

"You come across a massive whirlpool that seems to be pulling everything in its path down into its depths. As you navigate around it, you notice an enormous octopus emerging from within. It seems that something has angered this beast, and it will not let anyone pass without a fight.",

"As you sail through choppy waters, an enormous wave looms on the horizon. It grows larger and larger until it crashes down upon your ship with incredible force. As you try to regain control of your vessel, you notice something moving beneath the waves - something large and dangerous.",

"You come across an abandoned ship floating aimlessly in the ocean waters - its sails tattered and torn, its deck empty. As you board the ship to investigate, strange things begin to happen - perhaps this ship was abandoned for a reason.",

"As you sail through crystal clear waters, you notice an enormous school of fish swimming nearby. They seem harmless enough until they suddenly swarm your ship, attacking anything and everything in their path. It seems that these fish are more than they appear to be.",

"You come across what appears to be an underwater city surrounding by shimmering bubbles - perhaps some kind of magical barrier? As you enter its depths searching for treasure or answers about its origin and meaning - things quickly turn deadly when vicious sea creatures emerge from within.",

"You notice an enormous shadow moving beneath your ship's hull as it sails through calm waters. As it grows closer, it becomes clear that it is an enormous sea monster emerging from below the surface. You must decide whether to fight or flee before it brings your vessel crashing down into the depths below.",

"As night falls on your journey across the open ocean waters, strange lights appear on the horizon above - perhaps some kind of magical phenomenon unique to these seas? But as they grow closer and more intense with each passing moment, it becomes clear that this light show may be far more dangerous than previously thought.",

"You come across what appears to be an abandoned lighthouse perched atop a rocky outcropping in otherwise empty sea space. As you approach for investigation or shelter from stormy weather ahead - things quickly turn deadly when vicious creatures emerge from within."


  ];

  let randomIndex = Math.floor(Math.random() * encounterOptions.length);

  return "[Ocean Encounter: " + encounterOptions[randomIndex] + " ]";
}
