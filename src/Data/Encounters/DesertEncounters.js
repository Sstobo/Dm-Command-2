export function getRandomDesertEncounter() {
  let encounterOptions = [
    "A vast sandstorm is heading towards the players, obscuring their vision and making it difficult to breathe. As they try to find shelter or a way to navigate through it, they hear the sound of galloping hooves getting closer. The danger in this encounter comes from the sandstorm itself, as well as the possibility of being trampled by a group of wild camels or other desert creatures seeking refuge from the storm.",

    "The players come across a large oasis, with crystal-clear water surrounded by palm trees and other vegetation. However, they soon realize that the water is being guarded by a group of territorial water elementals., The opportunity in this encounter is the chance to rest and replenish their supplies, but they must first figure out a way to either defeat or appease the guardians.",

    "As they traverse a seemingly endless stretch of sand dunes, the players notice an unusual formation of rocks ahead. Upon closer inspection, they see that the rocks have been arranged to form a giant maze. The danger in this encounter comes from getting lost or trapped within the maze, as well as potential traps or ambushes set up by whoever created it.",

    "The players stumble upon an abandoned caravan, with no sign of what may have happened to its previous occupants. As they investigate, they notice that some of the goods are still intact and valuable. The opportunity in this encounter is the chance to acquire new supplies or treasure, but there may also be clues or threats lurking around that could lead to further danger.",

    "As they rest for the night, the players notice strange luminescent creatures flitting around in the darkness. Upon closer inspection, they realize that these are not fireflies but tiny spirits of light. The opportunity in this encounter is the chance to interact with these spirits and potentially gain new insights or magical abilities. However, if disturbed or angered, they may prove to be dangerous foes.",

    "The players come across a massive sand dune with an enormous crater at its peak. Upon investigation, they discover that there is an entrance leading underground into a vast network of tunnels and caverns filled with traps and treasure. The opportunity in this encounter is the chance to explore an ancient ruin filled with forgotten treasures and secrets. However, navigating through the traps and avoiding dangerous creatures will require skill and caution.",

    "As they travel through a particularly barren stretch of desert, the players notice a group of nomads approaching from afar. These nomads seem friendly enough but are guarding a valuable artifact that could prove useful on their journey. The opportunity in this encounter is both potential trade for valuable goods as well as gaining potential allies for future encounters.",

    "The players approach what appears to be an enormous statue carved out of rock. However upon closer inspection it is revealed that it's not just any statue; it is actually a golem left behind by an ancient civilization that still guards its hidden treasures. The danger in this encounter comes from facing off against an ancient guardian golem while searching for treasure within its domain.",

    "As night falls over the desert landscape and temperatures drop rapidly; players stumble upon a group of travelers huddled around their fire seeking shelter from vicious sandstorms. They seem friendly enough but who knows what secrets they may hold. The opportunity here lies both within potentially befriending these travelers who could prove useful allies later on but also gaining insight into darker secrets lurking within these desolate sands.",

    "The players spot something glinting in the distance causing them to investigate further; which leads them straight into an ambush laid out by bandits looking for easy prey roaming these parts. The danger here lies not only in facing off against bandits who could potentially overpower them but also losing valuable assets through theft during combat.",

    "As you traverse the desert wasteland, the sandy dunes stretch out endlessly before you. Suddenly, you spot a group of camels grazing in the distance. Upon closer inspection, you notice that one of the camels is much larger than the others and has a strange symbol branded onto its fur. A group of nomadic traders approach the player, offering to trade their wares for precious water or other goods.",

    "As the sun beats down on you relentlessly, you come across a small oasis. The water sparkles invitingly, but as you step closer, you notice something strange about it. The water seems to be shimmering with an iridescent glow. Upon drinking the water, players may gain temporary magical powers or suffer hallucinations.",

    "You stumble upon an ancient tomb half-buried in the sand. As you enter, you feel a sense of unease and ancient magic emanating from within. Players must navigate traps and puzzles to uncover valuable treasure or face mummified guardians.",

    "The blistering heat becomes almost unbearable as you trek through the desert. Suddenly, a sandstorm whips up around you, obscuring your vision and making it difficult to breathe. The storm may cause players to lose their way or encounter dangerous creatures taking refuge from the storm.",

    "A lone figure stands atop a nearby dune, silhouetted against the blazing sun. As they descend towards you, it becomes clear that they are a skilled warrior seeking a worthy opponent in combat. Players must defeat their opponent in order to gain respect and perhaps valuable information or resources.",

    "You hear a haunting melody carried on the winds across the desert sands. As you follow its source, it leads you to a mysterious bard singing beneath a palm tree oasis. The bard may offer clues or valuable information in exchange for entertainment or assistance with their own goals.",

    "A caravan of merchants is being attacked by bandits in the distance. As they spot your approach, they plead for your assistance in defending their goods and lives. Players must fend off waves of bandits and protect valuable cargo.",

    "An enormous sandworm emerges from beneath the ground in front of you, its gaping maw full of razor-sharp teeth. Players must either fight or flee from this dangerous creature.",

    "You come across an abandoned campsite with no sign of its former inhabitants. Upon investigation, players discover clues leading them on a quest to uncover what happened to them.",

    "As night falls over the desert landscape, strange lights begin flickering on and off in the distance. They seem to be leading towards an abandoned temple complex untouched by time. Players must explore this mysterious temple complex, facing traps and puzzles along with valuable treasures guarded by ancient spirits.",
    "As the hot sun beats down on the endless sand dunes, you come across a small oasis. Palm trees and other vegetation provide much-needed shade from the heat, and a shallow pool of water beckons you to take a drink. However, as you approach the water's edge, you notice several large scorpions emerging from beneath the rocks. It seems they are fiercely guarding their territory, and they do not take kindly to visitors.",

    "As you trudge through the desert, your attention is drawn to a strange sight on the horizon. As you approach, you realize that it is an enormous sandstorm rapidly approaching. You have two choices: try to outrun it and risk getting lost in the desert or take cover and wait it out. But be warned, sandstorms are not just dangerous because of their blinding winds; they can also unearth dangerous creatures that live beneath the sand.",

    "You come across a caravan of traders making their way through the desert. They seem happy to see new faces and invite you to share their fire and rest for a while. They offer food and drink in exchange for stories of your travels. However, as night falls, you begin to hear strange noises coming from the surrounding dunes. It seems that something dangerous is lurking nearby.",

    "As you approach what looks like an abandoned temple in the middle of nowhere, you hear chanting coming from within. The temple seems ancient and weathered, with strange markings etched into its walls. You must decide whether to investigate further or flee before whatever is happening inside becomes aware of your presence.",

    "You come across what appears to be an oasis in the middle of a vast desert expanse. It is beautiful, with clear blue water and lush vegetation all around. However, there is something strange about this place - everything seems too perfect, too symmetrical. As you approach the water's edge, you realize that there is no reflection staring back at you; instead, there is only darkness.",

    "You hear a faint humming sound as you walk through the desert sands. As it grows louder, you realize it is coming from an enormous hive perched atop a nearby rocky outcropping. You must decide whether to investigate or give it a wide berth - after all, whatever lives inside could be either fiercely territorial or extremely valuable.",

    "You come across a small village nestled deep in the heart of the desert. The people seem friendly enough but are clearly on edge about something they refuse to discuss with outsiders. They offer food and shelter but warn of dangers lurking in the surrounding dunes - something they call 'sand devils' that emerge during sandstorms.",

    "You stumble upon an ancient ruin buried deep in the sands of the desert - perhaps once an important city or temple long since forgotten by time. As you explore deeper into its depths, however, it becomes clear that something dark now inhabits this place - perhaps even guarding some great treasure within its depths.",

    "As night falls on your journey through the desert sands, strange lights appear in the sky above - perhaps some kind of magical phenomenon unique to these lands? But as they grow closer and more intense with each passing moment, it becomes clear that this light show may be far more dangerous than previously thought.",

    "You stumble upon what appears to be a massive sinkhole or cave entrance hidden amidst some rocky outcroppings in an otherwise empty stretch of desert wasteland. But as you enter its depths searching for treasure or answers about its origin and meaning - things quickly turn deadly when vicious creatures emerge from within.",

    "As you're traveling through the scorching desert, you notice an abandoned campsite in the distance. The camp looks like it was hastily abandoned with personal belongings and supplies scattered all over the place. As you investigate the area, you notice strange tracks leading away from the campsite. You must decide whether to follow the tracks and uncover what happened or move on and avoid potential danger.",

    "As you walk through the barren desert, a strange mirage appears in front of you. It looks like a beautiful oasis with lush vegetation and a crystal clear pool of water. However, as you approach the oasis, you realize that it's all an illusion - a trap set by a group of bandits who prey on weary travelers like yourself.",

    "You come across an ancient tomb hidden deep in the heart of the desert. The tomb is massive and filled with treasures beyond your wildest imagination. However, as you delve deeper into its depths, it becomes clear that something dark and dangerous is guarding these treasures.",

    "As you journey through the desert sands, you notice strange rock formations that resemble faces staring back at you. As night falls, these formations seem to come to life and whisper secrets into your ear. You must decide whether to listen to their whispers or risk going mad from their haunting words.",

    "You hear a faint yet eerie tune carried by the wind as you walk through the desert sands. As it grows louder, you realize that it's coming from a group of nomads around a campfire in the distance. They seem friendly enough but warn of an ancient curse that plagues this land - one that can only be lifted by completing a dangerous quest.",

    "You come across what seems to be an abandoned mine in the middle of nowhere. The entrance is blocked by piles of rubble, but as you investigate further, you discover a hidden entrance leading further down into its depths. Inside, there are strange crystals that emit a soft glow - perhaps they hold some kind of magical power? But be warned - something dangerous guards these crystals from would-be treasure hunters.",

    "As you travel through the endless sand dunes, you notice strange patterns etched into the sand - perhaps some kind of ancient writing? As you follow these patterns deeper into the desert, they lead to an ancient temple buried beneath the sands. Inside, there are dangerous traps and even more dangerous guardians protecting whatever lies within its walls.",

    "You stumble upon what appears to be an abandoned city in the middle of nowhere - one that has been swallowed up by the sands over time. As you explore further into its depths, however, it becomes clear that something dark still lingers within its ruins - something that preys on travelers who dare enter its domain.",

    "You come across what appears to be an enormous skeleton half-buried in the sands of the desert wasteland - perhaps once an ancient dragon or other fearsome beast long since passed? As night falls, however, strange noises emanate from deep within its bones - perhaps something still lives within this skeletal behemoth?",

    "An enormous sandstorm engulfs your party as they traverse across endless dunes. The party takes cover behind some rocks as they wait for it to pass when they hear whispers above them- three djinns have appeared out of nowhere and offer their help to brave adventurers who can pass their tests.",

    "As you trek across the barren desert, you catch sight of an enormous sandstorm in the distance. As you draw closer, you see that it's not just a storm of sand and wind - it's a massive swarm of locusts, devouring everything in their path.",

    "Amidst the endless dunes, you encounter a caravan of nomads. They offer to trade with you, but warn that they are being pursued by a pack of deadly sand wolves. You must decide whether to help defend them or risk losing their valuable wares in the chaos.",

    "You come across an ancient shrine half-buried in the sand. As you approach, you see that it is guarded by a group of fanatical cultists who will stop at nothing to protect their sacred space. You must decide whether to try and reason with them or fight your way through.",

    "Up ahead, you see what appears to be an enormous oasis - but as you draw closer, you realize that it's actually an illusion cast by a powerful desert mage. You must decide whether to investigate further or flee before his magic turns on you.",

    "As the sun beats down mercilessly on the desert sands, you stumble upon what appears to be a small town. The people seem friendly enough, but there's something off about them - perhaps it's the way they all wear identical robes and speak in hushed whispers when outsiders are near.",

    "You hear whispers on the wind as you cross the desert sands - whispers that seem to be calling your name. As they grow louder and more insistent, you realize that something dangerous is stalking you from within the dunes themselves.",

    "As night falls on your journey through the desert sands, strange glowing orbs begin to appear all around you. They seem almost like fireflies at first - until they start attacking.",

    "You spot what appears to be an abandoned oasis in the distance. As you draw closer, however, you realize that it's far from deserted - instead, it's home to a colony of giant ants who don't take kindly to intruders.",

    "You come across what appears to be an ancient library buried deep beneath the sands. Its shelves are filled with dusty scrolls and mysterious artifacts - but as you explore deeper into its depths, strange things begin to happen.",

    "As you trudge through the scorching desert heat, your vision begins to blur and warp. Eventually, it seems like everything around you is made of glass - even your own body. You must find a way to break free from this bizarre illusion before it's too late.",

    "You spot what appears to be a mirage up ahead - but as you draw closer, it becomes clear that it's actually a hidden oasis guarded by powerful magic. You must decide whether to risk approaching or turn back before its guardians become aware of your presence.",

    "You come across an ancient temple dedicated to a long-forgotten deity of sun and sand. But as you explore its depths seeking treasure or knowledge about this forgotten god, strange things begin happening around every corner.",

    "As night falls on the desert sands around you, strange shapes begin materializing out of thin air. They seem almost like ghosts at first - until they start attacking with deadly force.",

    "You spot an enormous dragon circling high above in the sky ahead - but as it swoops down towards your position, it becomes clear that this isn't just any dragon; this one is made entirely out of sand and flame.",

    "Amidst the endless dunes lies what appears at first glance to be a simple stone archway leading nowhere in particular. But as soon as anyone passes through its portal... things get weird fast.",

    "You come across a group of travelers seeking refuge from the relentless sun under an enormous rock formation jutting out from amidst endless dunes. But as night falls and strange sounds begin emanating from within its depths... things become far more dangerous than anyone anticipated.",

    "You spot what appears at first glance to be an ordinary cactus up ahead... until it starts moving towards you with alarming speed and ferocity!",

    "The hot desert winds carry with them strange whispers promising power beyond imagining for those who are brave enough (or foolish enough) to follow them into unknown perils...",

    "You catch sight of an enormous pyramid looming up out of nowhere amidst otherwise empty desert wasteland. But as soon as anyone approaches its entrance... things get weird fast!",

    "As night falls everywhere around seemingly endless dunes... except for one small patch where everything seems strangely frozen in time!",
  ];

  let randomIndex = Math.floor(Math.random() * encounterOptions.length);

  return "[Desert Encounter: " + encounterOptions[randomIndex] + "] ";
}
