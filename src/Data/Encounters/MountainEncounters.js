export function getRandomMountainEncounter() {
  let encounterOptions = [

    "The player stumbles upon a small village nestled high in the mountains. The villagers are friendly but warn of a dark force that has been terrorizing their homes. They ask for the player's help in finding and defeating the source of their troubles. As they journey deeper into the mountains, they come across an ancient ruin where the evil magic is emanating from. The ruin is overgrown with vines and moss, and crumbling pillars rise up like fingers pointing to the sky. Strange runes are etched into the walls, faintly glowing with an otherworldly light that makes one feel uneasy.",

    "A sudden blizzard strikes as the player climbs higher up the mountain range. Visibility is reduced to almost nothing, and if they're not careful, they might fall off a cliff or lose their way. They must find shelter quickly before succumbing to frostbite. The howling wind whips up snowdrifts that bury everything in sight except for jagged rocks that jut out menacingly.",

    "The player comes across a massive waterfall cascading down from high above. The water is so clear that the bottom can be seen even though it's several meters deep. A rainbow stretches across it, and if they're lucky, they might even spot some rare fish swimming around. The sound of rushing water echoes off nearby rocks creating a soothing melody for anyone who stops to listen.",

    "As night falls, the player stumbles upon an abandoned campsite complete with tents and cooking equipment that looks like it was left in a hurry. As they explore further, they find signs of a fight and bloodstains on some of the gear left behind. Twigs snap underfoot as you move through dense forest foliage that surrounds this abandoned campsite.",

    "A strange mist envelopes the player as they make their way up a mountain path. Strange shadows move within it, and eerie whispers can be heard just out of reach. Everything around you is shrouded in an eerie mist which obscures all vision beyond ten feet.",

    "The player comes across an old mining shaft that leads deep into the mountain's heart. Once inside, strange noises can be heard echoing off the walls; whispers that sound like something ancient and malevolent trapped within.The air is thick with dust and stale air mixed with an acrid scent emanating from rusted tools scattered about.",

    "As night falls, strange glowing mushrooms sprout up all around players making for an otherworldly landscape as far as they can see... but these mushrooms hold secrets not easily uncovered...The mushrooms glow brightly casting eerie shadows on everything around them - making it difficult to discern what else might be lurking nearby.",

    "The player comes across a hidden hot spring nestled deep in a valley surrounded by snow-capped peaks.The water is so warm it almost feels like it's burning but eases any pain or injury if used correctly.Steam rises from clear blue waters creating an almost mystical atmosphere - birds chirp happily nearby while deer drink from its banks.",

    "A series of giant stone pillars loom above as far as you can see in both directions- each one with its own unique carvings depicting ancient legends... but what do these legends mean? Each pillar stands at least fifty feet tall made of stone so old it seems to have grown organically rather than been quarried.",

    "The player comes across a narrow mountain pass that leads to a hidden valley. The valley is filled with lush foliage and exotic flowers, and a crystal clear stream runs through it. However, the tranquility is disturbed by the presence of a group of bandits who have taken up residence in the valley. They are heavily armed and very dangerous, making it difficult for the player to navigate through their territory.",

    "As the player nears the summit, they come across a massive stone archway that leads to an ancient temple. The temple is guarded by fearsome stone statues that come to life as soon as they sense an intruder. The temple is built into the mountain itself, and its halls are filled with secrets and treasures waiting to be discovered.",

    "The player comes across a massive fissure in the mountain's side that leads to a series of underground tunnels. The tunnels are inhabited by strange creatures that have never seen the light of day. They can be dangerous if provoked but can also be a source of valuable information if approached with caution.",

    "As the player climbs higher up the mountain range, they stumble upon a massive glacier that stretches as far as the eye can see. The ice is slick and treacherous, and if they're not careful, they might fall into one of its deep crevices. However, there are also valuable treasures buried within its icy depths waiting to be discovered.",

    "The player comes across an ancient watchtower perched on top of a rocky outcropping. The tower is in ruins, but there are signs that someone has taken up residence inside. As they explore further, they discover that it's been converted into a makeshift laboratory where forbidden experiments are being conducted.",

    "A raging river blocks the player's path up the mountain range. The river is too treacherous to cross without proper equipment or skills. However, there is a small village nearby where they can obtain what they need to make their way across safely.",

    "As night falls, strange lights can be seen flickering in the distance high up on the mountain range. As you get closer, you realize that it's not just one light but many - hundreds of glowing orbs floating in mid-air like fireflies caught in amber.",

    "The player comes across a massive boulder blocking their path up the mountain range. It's too heavy to move on their own, but if they're lucky, they might find someone willing to help them out in exchange for a favor or two.",

    "As they climb higher up the mountain range, strange music can be heard echoing off nearby cliffs and rock formations. The music is hauntingly beautiful but also very dangerous - those who listen too closely risk being lured off course or hypnotized into doing something they might regret later.",

    "The player comes across an ancient monastery built into the side of a cliff face high up on the mountain range. The monks who live there have dedicated their lives to spiritual enlightenment and offer valuable insights into ancient lore and forgotten wisdom.",
    "As the player treks up a steep mountain path, they come across a field of rare and exotic flowers. The vibrant colors and sweet scents are entrancing, but the flowers are guarded by a swarm of angry bees. The buzzing grows louder as the player approaches, and they must decide whether to risk getting stung to collect some of the precious pollen.",

    "The player comes across an ancient stone circle perched on a cliff's edge. The stones tower above them, and strange markings cover their surfaces. As they explore, they realize that the circle is a portal to another realm. They can almost see otherworldly creatures moving just beyond their reach.",

    "A massive boulder blocks the player's path up the mountain. Strange markings cover its surface, and it seems almost alive. As they approach, it rumbles to life, revealing itself as a massive golem made of stone. The golem is not hostile but warns of dangers further up the mountain and provides guidance on how best to proceed.",

    "As night falls, strange lights can be seen dancing in the sky above the mountains. The lights move in intricate patterns that seem almost otherworldly. As the player watches them dance, they can't help but feel like they're being watched.",

    "The player comes across an ancient temple built into the side of the mountain range. The temple is overgrown with vines and moss and seems abandoned except for a group of monks who have taken up residence there. They offer advice on how best to navigate through the treacherous mountains ahead.",

    "A massive glacier looms in front of the player, stretching as far as they can see in either direction. The ice is slick and treacherous, but hidden within it lies an ancient artifact that could change everything for those who possess it.",

    "The player comes across a small village perched on a cliff's edge overlooking a deep ravine below. The villagers are friendly but warn of a dangerous creature that has been terrorizing them for months. They offer rewards for anyone who can defeat it.",

    "A massive storm rages across the mountainscape as lightning strikes all around the player. They must navigate their way through treacherous terrain while avoiding getting struck by lightning or swept away by flash floods caused by heavy rain.",

    "The player comes across an abandoned mine deep within the mountainside. The mine is filled with abandoned carts and rusted mining equipment but also holds valuable gems and ores hidden away among its tunnels.",
    "The player discovers a hidden cave system that leads deep into the mountain's heart. The walls are lined with glowing crystals of all colors, illuminating the passage as they walk. The air is humid, and there's a faint musky scent in the air, suggesting something sinister lurks nearby.",

    "A sudden earthquake shakes the ground beneath the player's feet, causing boulders and rocks to tumble down from above. The player must find shelter quickly before being crushed under the falling debris.",

    "An old wooden bridge spans across a deep chasm that leads to a hidden temple high atop the mountain peak. The bridge looks ancient and unstable, but the reward for crossing it could be great if they make it across unscathed.",

    "The player comes across a small lake nestled high in the mountains. The water is so clear that fish can be seen swimming around, and there are signs of wildlife everywhere. However, there's also evidence of something more dangerous lurking nearby, like claw marks on trees and strange footprints in the dirt.",

    "As they climb higher up the mountain range, the player comes across an abandoned monastery that has been overrun by strange vines and twisted roots. It's said that an evil force has taken hold of it, making it a dangerous place to explore.",

    "A sudden thunderstorm strikes as the player climbs higher up the mountain range. Lightning flashes all around, striking nearby peaks with ferocity. They must find shelter quickly before being struck by lightning.",

    "The player comes across a series of underground tunnels that lead deep into the mountainside. Strange noises echo off the walls, making it hard to see what lies ahead without taking extra precautions.",

    "As night falls, strange glowing insects swarm all around players making for an otherworldly landscape as far as they can see... but these insects are not what they seem...The insects glow brightly casting eerie shadows on everything around them - making it difficult to discern what else might be lurking nearby.",

    "The player comes across an ancient stone circle hidden high in the mountains. It's said that this place was once used for ancient rituals and sacrifices by long-forgotten cultures. Strange markings etched into its surface suggest something ominous may still be present.",
  ];

  let randomIndex = Math.floor(Math.random() * encounterOptions.length);

  return "[Mountain Encounter: " + encounterOptions[randomIndex] + " ] ";
}
