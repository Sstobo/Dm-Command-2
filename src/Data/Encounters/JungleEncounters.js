export function getRandomJungleEncounter() {
  let encounterOptions = [
    "As you make your way through the dense jungle, you come across a clearing. In the center of the clearing stands a massive tree, its trunk wider than three men. As you get closer, you realize that the tree is covered in glowing mushrooms that emit an eerie light. But be warned, where there are mushrooms there may also be deadly toxins or dangerous creatures lurking nearby.",

    "You hear a faint rumble in the distance as you move through the thick foliage of the jungle. As it grows louder, you realize it is coming from an enormous waterfall cascading down into a pool below. But as you approach, you see something strange - a hidden cave system behind the falls that seems to beckon adventurers with its mystery and potential rewards for those brave enough to explore it.",

    "You come across a small village in the heart of the jungle. The people seem friendly enough but are clearly on edge about something they refuse to discuss with outsiders. They offer food and shelter but warn of dangers lurking in the surrounding jungle - something they call 'jungle spirits' that emerge during certain times of year.",

    "As you walk along a narrow path through the dense jungle, you come across an ancient ruin hidden amidst overgrown vines and trees. The temple seems ancient and weathered, with strange markings etched into its walls. You must decide whether to investigate further or flee before whatever is happening inside becomes aware of your presence.",

    "You spot movement up ahead and raise your weapon instinctively - only to realize that it's not a creature at all but rather an enormous tree with massive roots crawling across the ground like some kind of living spider web. You must decide whether to investigate further or give it a wide berth - after all, whatever lives inside could be either fiercely territorial or extremely valuable.",

    "As night falls on your journey through the thick jungle, strange noises echo through the trees - perhaps some kind of magical phenomenon unique to these lands? But as they grow closer and more intense with each passing moment, it becomes clear that this sound show may be far more dangerous than previously thought.",

    "You come across what appears to be an abandoned campsite deep in the heart of the jungle. The campfire is still smoldering, but there is no sign of whoever was here before. As you investigate further, however, it becomes clear that something dark now inhabits this place - perhaps even guarding some great treasure left behind by those who came before.",

    "You hear a faint humming sound as you walk through the dense jungle undergrowth. As it grows louder, you realize it is coming from an enormous hive perched atop a nearby tree. You must decide whether to investigate or give it a wide berth - after all, whatever lives inside could be either fiercely territorial or extremely valuable.",

    "You stumble upon what appears to be an ancient stone altar buried deep in the heart of the jungle - perhaps once used by ancient peoples for religious or sacrificial purposes long since forgotten by time. As you explore deeper into its depths, however, it becomes clear that something dark now inhabits this place - perhaps even guarding some great treasure within its depths.",

    "As you make your way through the thick underbrush of the jungle floor, strange flowers catch your eye in brilliant hues not seen anywhere else in nature. Upon closer inspection however these flowers reveal not only their beauty but also their danger as they spray deadly poison at any who stray too close.",

    "As you venture deeper into the thick jungle, you come across an ancient temple - clearly long forgotten by any known civilization. As you explore its depths, you begin to realize that there is something strange and otherworldly about this place - perhaps even something dangerous.",

    "You stumble upon a small tribe of indigenous people who seem friendly enough. They offer food and shelter but warn of dangers lurking in the jungle - something they call 'shadow beasts' that emerge during the darkest hours of the night.",

    "As you trek through dense jungle foliage, you come across a small clearing with a beautiful waterfall cascading down into a crystal clear pool. The water looks inviting, but as you approach the edge, you realize that there is something else in there with you - perhaps a group of territorial crocodiles or some other dangerous predator.",

    "As you make your way through the jungle underbrush, you hear strange whispers coming from deeper within. The whispers seem to be calling your name - urging you to come closer and explore whatever dark secrets lie within.",

    "You come across a massive tree with strange markings etched into its bark. As you approach it, you begin to feel dizzy and disoriented - almost as though some kind of magic is at work here. But what kind of magic? And why would someone go to such effort to protect this tree?",

    "You stumble upon an ancient altar deep within the jungle. Strange symbols line its surface and strange runes are etched into its base. But as night falls and the stars begin to shine overhead, something stirs beneath its surface - perhaps even some malevolent spirit trapped within.",

    "As day turns to night in the dense jungle, strange glowing insects begin to emerge from their hiding places. They are beautiful to look at but also highly poisonous if touched or ingested. You must either find a way around them or risk facing their deadly sting head-on.",

    "You come across an old campsite deep in the heart of the jungle. The fire still burns low and there are signs that someone was here recently but has since moved on. But as night falls and strange sounds begin to fill the air, it becomes clear that whatever was here before may not have left willingly.",

    "As you make your way through dense undergrowth, you come across an ancient burial ground surrounded by tall stone pillars adorned with intricate carvings depicting scenes from some unknown civilization's history. The site feels peaceful at first glance but as strange shapes emerge from beneath the earth's surface, it becomes clear that this is no ordinary grave site.",

    "You hear a faint humming sound as you walk through the dense jungle foliage. As it grows louder, you realize it is coming from an enormous hive perched atop a nearby tree trunk or rock formation. You must decide whether to investigate or give it a wide berth - after all, whatever lives inside could be either fiercely territorial or extremely valuable.",

    "You step into a dense jungle, the trees forming an impenetrable canopy overhead. The air is thick and humid, with the sounds of exotic birds and animals filling your ears. But as you venture deeper into the foliage, you realize that something is watching you - perhaps a predator stalking its prey or something far more sinister.",

    "You come across an ancient temple nestled deep in the heart of the jungle. Its walls are overgrown with vines and moss, and strange carvings adorn its surface. As you explore its depths, you realize that someone - or something - has been here before you. It seems that this temple is not entirely abandoned after all.",

    "As you make your way through the dense jungle undergrowth, you come across a clearing where several tribespeople are gathered around a large fire. They seem friendly enough but are clearly wary of outsiders. They offer food and shelter but warn of dangers lurking in the surrounding jungle - perhaps some kind of deadly predator or malevolent spirit.",

    "You hear a strange rustling in the underbrush as you make your way through the jungle. As it grows louder, you realize that something large is moving towards you - perhaps an enormous snake or an angry gorilla. You must act fast if you hope to survive this encounter.",

    "You come across what appears to be an ancient burial ground deep in the heart of the jungle. The graves are marked with strange symbols and carvings, and it seems that someone has recently disturbed one of them. The ground is still fresh and disturbed, indicating that someone - or something - has recently been digging here.",

    "As night falls on your journey through the jungle, strange noises emerge from deep within the foliage - perhaps some kind of nocturnal predator on the hunt? But as they grow closer and more intense with each passing moment, it becomes clear that this nighttime chorus may be far more dangerous than previously thought.",

    "You catch sight of a mysterious figure darting between trees just ahead of you on your path through the jungle. Is it a rival explorer or someone with sinister intentions? You must decide whether to investigate further or retreat before putting yourself in harm's way.",

    "You come across a crystal-clear river flowing through the heart of the jungle. The water looks invitingly cool and refreshing after your long journey, but as you wade in, you realize that something else shares this river with you - perhaps some kind of freshwater predator lurking beneath its surface.",

    "You stumble upon what appears to be an abandoned campsite deep within the thick jungle underbrush. There are signs of struggle everywhere - broken weapons, torn clothing, and empty food containers littering the area around campfire ashes still warm to the touch. What happened here? And could it happen to you?",

    "As you make your way through thick vines and dense foliage, suddenly everything goes quiet. No sounds from animals or insects or anything at all can be heard. You realize that something must have scared them off or worse... hunted them down.",
  ];

  let randomIndex = Math.floor(Math.random() * encounterOptions.length);

  return "[ Jungle Encounter: " + encounterOptions[randomIndex] + " ]";
}
