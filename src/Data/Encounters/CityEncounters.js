export function getRandomCityEncounter() {
    let encounterOptions = [
      "A dark alleyway looms ahead, littered with debris and the stench of decay. Suddenly, a group of hooded figures emerge from the shadows, each carrying a strange glowing orb. They mutter in an unknown language, and seem to be performing some sort of ritual.",
      "An ancient statue stands in the center of a bustling marketplace, but as the players approach, they notice that its eyes seem to be following them. Suddenly, the statue comes to life and attacks!",
      "As the players wander through the city streets, they come across a group of street performers putting on a mesmerizing show. However, upon closer inspection, it becomes clear that these performers are actually using magic to manipulate their audience's thoughts and emotions.",
      "Amidst the chaos of a crowded tavern, a wealthy nobleman approaches the players with an intriguing proposition. He offers them a large sum of money in exchange for stealing an important artifact from his rival's estate.",
      "A mysterious fog rolls into town, obscuring all visibility. As the players navigate through the thick mist, they begin to hear strange whispers and feel something cold breathing down their necks.",
      "The players stumble upon an abandoned warehouse on the outskirts of town. Upon entering, they discover that it's actually a secret hideout for a group of smugglers.",
      "As they walk through an upscale part of town, the players notice that every single person is wearing a strange amulet around their neck. When they ask about it, they're met with hostility and suspicion.",
      "A powerful mage is holding court in the city square, offering to grant wishes to those who can solve his riddles. However, there's something off about his demeanor – he seems almost too eager to make deals with anyone who crosses his path.",
      "As night falls over the city streets, strange creatures begin to emerge from the shadows. The players must fight off hordes of undead monsters as they try to make their way back to safety.",
      "The players stumble upon an underground fighting ring where participants battle each other – and deadly beasts – for huge sums of money. However, it quickly becomes clear that this is no ordinary arena.",
      "The players come across a group of protestors in the city square, chanting and holding signs demanding change. However, as the players watch, the protestors suddenly turn violent and begin attacking anyone in their path.",
      "As they walk through a poor part of town, the players come across a group of children playing a game that seems almost too real. They're fighting imaginary monsters with makeshift weapons, but somehow the monsters seem to be getting hurt.",
      "A beautiful garden filled with exotic plants and flowers stretches out before the players. However, as they explore, they begin to notice that some of the plants seem to be moving on their own – and attacking anything that comes too close.",
      "A small group of people are huddled around a bonfire in the middle of town, telling ghost stories and legends about the city's past. As they listen, the players begin to realize that some of these stories might be more than mere fiction.",
      "As they wander through an abandoned section of town, the players suddenly hear the sound of someone – or something – following them. When they turn around, there's nothing there – but they can still hear breathing right behind them.",
      "The players stumble upon a hidden black market where illegal goods are bought and traded. However, when they try to leave with their purchases, they discover that someone has tampered with their items – and now they're being hunted by law enforcement.",
      "As they explore an old castle on the outskirts of town, the players hear strange whispers coming from behind a locked door. When they finally break down the door, they find themselves face-to-face with a powerful demon who's been trapped inside for centuries.",
      "A wealthy merchant hires the players to help him transport his valuable cargo through dangerous territory. However, as they make their way through an abandoned mine shaft, they begin to suspect that something – or someone – is following them.",
      "The players come across an old fortune teller who offers to read their palms and predict their futures. However, as she looks into their eyes, she begins to speak in tongues and her eyes roll back into her head.",
      "A group of beggars huddle together in a dark alleyway, but as the players approach, they notice that these beggars have been infected with a strange disease that causes them to mutate and become violent.",
      "As the players walk through the city gates, they're met with the sight of a massive army camped outside. The players must navigate through this hostile territory without getting caught up in the brewing conflict.",
      "The city's main library is hosting an exhibition of rare and powerful magical artifacts. However, one of these artifacts has been stolen – and it's up to the players to recover it before it falls into the wrong hands.",
      "The city's famous clock tower suddenly goes haywire, causing time to warp and twist in unpredictable ways. The players must navigate through this time-bending landscape and try to set things right.",
      "A group of street urchins approaches the players, begging for help in rescuing their friend who has been kidnapped by a notorious gang of thieves. However, as they delve deeper into this plot, they realize that there's more going on than meets the eye.",
      "The players come across a strange carnival that seems to have appeared out of nowhere. As they explore its twisted attractions, they begin to realize that this carnival is actually a portal to another dimension.",
      "A powerful necromancer has taken over the city cemetery, using the corpses buried there to create an army of undead soldiers. The players must fight their way through this unholy army and put an end to this dark ritual.",
      "The city's docks are bustling with activity as various ships come and go. However, one ship stands out – it's a ghost ship that seems to be manned by spectral pirates who are looking for new recruits.",
      "As the players enter a rundown tavern on the outskirts of town, they're met with suspicious glares from its patrons. It becomes clear that this tavern is actually a front for a dangerous cult that worships an otherworldly entity.",
      "The players come across a dilapidated mansion on the outskirts of town. Upon entering, they find that the mansion is haunted by the ghosts of its former inhabitants, who are intent on keeping them trapped within its walls.",
      "A group of bandits have taken control of the city gates, demanding payment from anyone who wishes to enter or leave. The players must find a way to either pay them off or defeat them in combat.",
      "As the players wander through the city streets, they come across a strange fortune-teller who claims to be able to see into their future. However, it soon becomes apparent that this fortune-teller has more sinister intentions.",
      "The players stumble upon a hidden underground network of tunnels that seem to stretch on for miles. As they explore deeper and deeper, they realize that they're not alone down here…",
      "A powerful wizard is conducting a magical experiment in the middle of a busy intersection. However, something goes terribly wrong and the players must help contain the magical explosion before it destroys everything in its path.",
      "An eccentric inventor has set up shop in the city square, displaying all manner of strange and wondrous inventions. However, his latest creation seems to have some dangerous side effects.",
      "The players find themselves caught in the middle of a massive street brawl between two rival gangs vying for control over the city's criminal underworld.",
      "As the players explore an abandoned graveyard on the outskirts of town, they come across a group of cultists performing a dark ritual. They must stop them before they summon an ancient evil from beyond the grave.",
      "A powerful sorcerer has cast a spell over the entire city, causing everyone to fall into a deep sleep. The players are immune to its effects and must navigate through an eerily quiet cityscape to find and confront the sorcerer responsible.",
      "The players stumble upon an underground marketplace where merchants sell all manner of illegal goods and services. However, they soon realize that there's more going on here than meets the eye…",
      "As you enter the bustling city gates, the sights and sounds of a busy marketplace assault your senses. Street vendors hawk their wares, while performers and beggars alike vie for your attention. But amidst the chaos, you notice a group of thieves attempting to pickpocket unsuspecting passersby.",
  
      "As you walk down an alleyway, you are suddenly confronted by a group of heavily armed guards. They demand to know your business in this part of town and threaten to throw you in jail if they don't like your answer.",
  
      "You arrive at the docks just in time to see a pirate ship being chased down by a naval vessel. The ensuing battle is fierce and chaotic, with cannon fire raining down on both sides. You must decide whether to stay and watch or flee for safety.",
  
      "As you make your way through the city's winding streets, you notice that every building seems to be covered in intricate murals and carvings. But upon closer inspection, you realize that these images depict dark and disturbing scenes - perhaps some kind of ancient ritual or sacrifice?",
  
      "You come across a grand library filled with rare books and manuscripts from all over the world. But as you peruse its shelves, you begin to sense that something is amiss - perhaps there is an ancient curse or dangerous secret lurking within its walls.",
  
      "You catch sight of a wealthy merchant being robbed at knifepoint by a group of thugs. You must decide whether to intervene or let things play out - after all, this is a dangerous city where violence is often the norm.",
  
      "You stumble upon an underground fighting ring where brutal gladiatorial battles take place for the entertainment of wealthy patrons. However, it quickly becomes clear that these fights are not always fair - many of the combatants are slaves or prisoners forced into combat against their will.",
  
      "As you approach what appears to be a grand temple dedicated to some forgotten deity, you hear strange chanting coming from within. Upon entering, you discover that this temple is actually home to a dangerous cult that seeks to summon some great evil into the world.",
  
      "You come across an old fortune teller's shop nestled deep within one of the city's seedier districts. But as she reads your fortune with her tarot cards, it becomes clear that she knows far more about your future than she should - perhaps she has some kind of magical powers at her disposal?",
  
      "You find yourself in the midst of a massive protest against the city's corrupt rulers. The air is thick with tension as riot police confront angry crowds armed with nothing but their voices and makeshift weapons.",
  
      "You stumble upon what appears to be an abandoned warehouse district on the outskirts of town. However, as you explore its dark alleys and empty buildings, it becomes clear that something dangerous now inhabits this place - perhaps even guarding some great treasure within its depths.",
  
      "As you walk through one of the city's many parks, you notice strange plants growing amongst the flowers and trees. Upon closer inspection, these plants appear to be sentient - they move and react in response to your presence.",
  
      "You come across what appears to be an ancient crypt hidden beneath one of the city's grandest cathedrals. As you explore deeper into its depths searching for treasure or answers about its origin and meaning - things quickly turn deadly when undead creatures emerge from within.",
  
      "As night falls on your journey through the city streets, strange lights appear in the sky above - perhaps some kind of magical phenomenon unique to these lands? But as they grow closer and more intense with each passing moment, it becomes clear that this light show may be far more dangerous than previously thought.",
  
      "You stumble upon what appears to be an abandoned laboratory deep within one of the city's many abandoned buildings. As you explore its dark corridors searching for answers about its purpose - things quickly turn deadly when dangerous experiments left behind by mad scientists begin coming back to life!",
  
      "As you enter one of the city's many taverns looking for information on local legends or rumors - things quickly get out of hand when drunken patrons start picking fights with each other (and possibly even with you!).",
  
      "You come across what appears to be an enchanted garden hidden behind one of the city's grandest estates. But as beautiful as it may seem at first glance - it quickly becomes clear that something dark now inhabits this place - perhaps even guarding some great treasure within its depths.",
  
      "Amidst all the noise and chaos of everyday life in this fantasy city environment- there exists a mysterious street performer who seems able to bend reality itself with his illusions! But beware- his tricks may not always be what they seem...",
  
      "As night falls over this fantasy metropolis- strange howls can be heard echoing throughout its winding streets! Is it just wolves crying out from beyond- or something far more dangerous lurking nearby?",
  
      "You encounter a strange old woman selling bizarre trinkets out on one corner- but there is something odd about her wares... Are they cursed objects waiting for unsuspecting buyers- or have they been imbued with powerful magical properties?",
    ];
  
    let randomIndex = Math.floor(Math.random() * encounterOptions.length);
  
    return "[ City Scenario: " + encounterOptions[randomIndex] + " ]";
  }
  