export function getForgottenRealmsLocation() {
  let locationOptions = [
    {
      title: "Faerûn",
      content:
        "When the eladrin first stepped upon its verdant soil, they called the world Faerûn, an old Elven term meaning “One Land.” Today, Faerûn describes only the westernmost portion of an immense landmass; Kara-Tur lies to the east. Faerûn is the cradle of the world. It is bounded on the west by the Trackless Sea, on the south by the Great Sea, on the east by the wide expanses of the Hordelands, and on the north by the ice of the uttermost arctic.",
    },
    {
      title: "The North",
      content:
        "The extent of the North is debated, but most agree it includes the entire wilderness south from the Spine of the World through the High Forest, and east from the Evermoors through to the Icerim Mountains. An endless, unbreakable wall of frigid, snowcapped peaks in the Spine of the World holds the Kingdom of Many-Arrows, an orc realm ruled by a succession of peaceable kings uncommon for their kind. Tucked beyond the Wall is tiny Icewind Dale. The more civilized of this “Savage Frontier” have come together in coalition to form Luruar, a confederation of city-states also known as the League of the Silver Marches. The dour dwarves in their fortified citadels left the League long ago, unwilling to break their age-old enmity with the orcs.",
    },
    {
      title: "Sword Coast",
      content:
        "Commerce along the Trade Way and other caravan routes binds the city-states of the Sword Coast. The coast itself is treacherous, featuring undersea reefs, rocky outcroppings, and a soft, mucky bottom that extends for miles in many areas. True ports are few and far between, a fact that makes the sheltered bay at the foot of Mount Waterdeep so precious. Its natural harbor has permitted Waterdeep, the City of Splendors, to grow into one of the shining jewels of the Sword Coast. Port cities north of Waterdeep didn’t fare well in the years after the Spellplague; both Neverwinter and Luskan are now in utter ruin. Baldur’s Gate, on the other hand, survived the last century relatively unscathed and has swelled to become the most populous city in Faerûn. Candlekeep remains a bastion of learning, though the crag it rests upon now stands at least 100 feet off the coast.",
    },
    {
      title: "Trackless Sea",
      content:
        "Many small kingdoms dot the restless sea off the western shores of the Sword Coast. The northern islands—among them Icepeak, Tuern, and Gundarlun—are little more than rugged peaks buffeted by swirling winds and cold currents brought south and west from the Sea of Moving Ice. At the heart of the Sea of Swords lie the Moonshaes, a large cluster of rocky islands cloaked in mists and covered in deep woods. Mastery of the Trackless Sea has long been the domain of proud seafaring peoples of Ruathym, though the reavers of the Nelanther Isles challenge that claim at present. The fey isle of Evermeet still lies more than a thousand miles west of the Sword Coast—but now the world has lost contact with this refuge, which has been relocated to the Feywild.",
    },
    {
      title: "Western Heartlands",
      content:
        "South of Luruar, the land and the people grow less wild. The Western Heartlands thrive on a gently rolling agricultural area centering on the Chionthar River, fortified by the gleaming bulwark of Elturgard and its righteous paladin defenders. The nearby City of Thousand Spires has so far resisted attempts to join the neighboring theocracy. Northeast of Elturgard, sandwiched between mighty Netheril and sinister Najara, dwells the mist-shrouded city of Evereska. Protected by its ancient mythal and staunch defenders, this eladrin city stands as a deterrent to expansion by the Netheril Empire. The most serious threat to the region stems from the serpent kingdom of Najara encompassing the eastern reaches of the High Moor, the Serpent Hills, the Forest of Wyrms, the Marsh of Chelimber, and the river valleys that meander through the area.",
    },
    {
      title: "Eastern Heartlands",
      content:
        "The human nations of the Heartlands share a common language, and their cultural heritage and social order are similar. Over the last century Cormyr has reluctantly grown into an imperial power annexing cities along the Dragon Coast, as well as fortifying its holdings throughout the Stonelands and Tilver’s Gap. Sembia, now a vassal state of the Netheril Empire, has become more aggressive, swallowing up a few dales along its borders. The remaining Dalelands have since united under strong leadership in Mistledale and the welcome protection of Myth Drannor. Westgate proved too large and powerful to be drawn into the orbit of either Cormyr or Sembia and remains self-governing. The once independent city-states of the Vast have united to form the nation of Vesperin. All free communities of the Eastern Heartlands remain vigilant, wary of the imposing presence of Netheril.",
    },
    {
      title: "Netheril",
      content:
        "The Empire of Netheril, long covered by the Great Desert of Anauroch, has been partially restored to the green steppes and verdant forests of its ancient past. Local Bedine tribes have been largely integrated into Netherese society, though a group of separatists known as the Sand Kings have been opposing the Shadovar at every opportunity. Netheril has also brought Sembia under its control as a vassal state, patrolled by the floating enclave Sakkors. It attempted the same in the Moonsea, but the Zhentarim fought back, forcing the Shadovar into more destructive acts of conquest.",
    },
    {
      title: "Moonsea Lands",
      description:
        "The Moonsea, in reality a deep freshwater lake, is the centerpiece of a land of harsh climate and hardened folk. The region includes many city-states ruled by tyrants. Its northern steppes are dominated by roving tribes. The western reaches are dotted with monster-infested ruins—the burned-out hulks of Zhentil Keep and other strongholds of the former Black Network. The Church of Bane is still strong in the region, its power base moved to the dark eastern metropolis of Mulmaster. The Great Gray Land of Thar remains a desolate breeding ground for orcs, ogres, and minotaurs. The brutish humanoids provide a buffer for the civilized lands against the growing predations of neighboring Vaasa.",
    },
    {
      title: "The Demonlands",
      description:
        "This region consists of isolated territories of tough folk, hardened by decades of conflict with demonic beasts and fell magic. It includes Impiltur, Damara, Vaasa, Narfell, and the Great Dale. The region saw a glimmer of hope when King Gareth Dragonsbane united Damara and Vaasa into the unified kingdom of Bloodstone, and when young King Imbrar II of Impiltur dissolved the council of paladins (the Lords of Imphras II) and began ruling unfettered by the dynastic machinations of the past. This prosperity was not to last. The assassination of Dragonsbane’s heir twenty years ago led to civil war throughout Bloodstone, allowing the patient Warlock Knights to seize control of windswept Vaasa. King Imbrar’s death and the retreat of the Inner Sea in the Year of Blue Fire ended Impiltur’s hopes. The kingdom is now firmly in the grip of the Fraternity of Tharos, a fanatical cult of demon-worshipers. Demons freely menace the Dunwood and terrorize the villages of the Great Dale and frigid Narfell.",
    },
    {
      title: "Auril’s Teeth",
      description:
        "The inhospitable wintry land of Auril’s Teeth features mile after mile of windswept tundra incapable of supporting agriculture. At its center lies indomitable Pelvuria, the Great Glacier. Only nomadic tribes of humans and dwarves, who hunt reindeer and fish the frigid rivers and lakes of the region, survive in this harsh land. The glacier has been slowly receding over the last century, and its melting has uncovered passages to the monster-infested Frostfell at the top of the world. The only civilization of any note in the area is the remote arctic realm of Sossal, sandwiched between Pelvuria and the Great Ice Sea.",
    },
    {
      title: "The Unapproachable East",
      description:
        "Beyond the Easting Reach lie the exotic lands folk in the Heartlands call the Unapproachable East. Today, this region is dominated by the dark and forbidding land of Thay and its endless undead armies. A pall of smoke and ash smothers the land, sometimes extending into neighboring territories. On Thay’s periphery lie the rugged lands of Aglarond, Rashemen, and Thesk. Aglarond is a land of open water and deep woods peopled predominately by half-elves. Feral warriors name the rolling hills and sparse pine forests of Rashemen home. Ruled by the Iron Lord and the mysterious Wychlaran, this land of witches and berserkers has confidently defended its borders for centuries. Thesk, the Gateway to the East, is the starting point of the fabled Golden Way trade road to far-off Shou Lung on the continent of Kara-Tur. This land of tolerant folk is home to large numbers of civilized orcs, Tuigan settlers, and Shou refugees.",
    },
    {
      title: "Empires of the Alamber Sea",
      description:
        "On the Alamber’s eastern shore rises the Empire of High Imaskar, ruling over the region once known as Mulhorand, which was wiped clean during the Spellplague. High Imaskar enjoys a trade alliance with Tymanther, a realm of dragonborn that occupies the former lands of Unther. The people of Tymanther are militaristic, toughened by generations of fighting dragons. Mount Thulbane in the north is an active volcano, sending billowing smoke into the air and blanketing dragon-ruled Threskel under an ashen sky. The Black Ash Plains, south of the Smoking Mountains, are home to a tribe of stone giants. South of High Imaskar, the ancient realm of Okoth has been restored at Azulduth. It is ruled by the sarrukh, an ancient race of serpent people and one of the legendary iqua Tel’Quessir (creator races). Okoth continues to rebuild, slowly and secretly, unwilling to draw the attention of more established realms.",
    },
    {
      title: "Sea of Fallen Stars",
      description:
        "The Inner Sea was once four separate bodies of water until the batrachi realm of Kolophoon was devastated nearly 33,000 years ago. Scholars generally hold that a chunk of Toril’s second moon struck Faerûn at that time. Today the Sea of Fallen Stars has dropped almost 50 feet from its pre-Spellplague level. The Abolethic Sovereignty, ruled by aboleths and their aberrant servitors from its floating city Xxiphu, is greatly feared throughout the region. Other monsters known as the Unfettered swim the waters and soar the skies of the Sea of Fallen Stars. The undersea depths of Serôs are controlled in the west by fey from Myth Nantar and in the east by the sahuagin realm of Aleaxtis. The Pirate Isles host buccaneers, cutthroats, and the like, though pirate attacks have been significantly reduced in the last century.",
    },

    {
      title: "Vilhon Wilds",
      description:
        "The lands of the Vilhon Reach were affected greatly by the merging of Abeir with Toril. The waters of the Reach were partially drained, revealing several ruined Cities of the Sword from the ancient Jhaamdath psiocracy. The once welcoming and cosmopolitan folk of Turmish have grown increasingly xenophobic. Akanûl, formerly the lands of Chondath, is now populated by genasi from the Abeiran land of Shyr. This region barely survived its first contact with the Abolethic Sovereignty roughly fifty years ago. Since the Year of Blue Fire, civilization has been slow to return to the wilder Spellplague-morphed regions. In the nearby Plaguewrought Land, the surreal landscape features thousands of earthmotes, swaths of moving rock, and great ravines that lead directly to the Underdark.",
    },
    {
      title: "Erlkazar and the Lake of Steam",
      description:
        "South of the Vilhon Wilds and north of the Lake of Steam, a temperate climate and good cropland engender stability and burgeoning populations. The Baronies of Erlkazar are seemingly peaceful and idyllic. When night falls, however, the vampire thralls of the Night Barony terrorize the region. Arnaden, the Lake of Steam, is a shallow, enclosed bay of the Shining Sea, its stinking, warm yellow waters a testament to volcanic activity. The desertification of the Lake’s southern shores has transformed the Border Kingdoms into a lawless frontier of outlaws and would-be rulers.",
    },
    {
      title: "Lands of Intrigue",
      description:
        "South of the Western Heartlands and west of Erlkazar are the so-called Lands of Intrigue: Amn, Muranndin, Tethyr, and the duchy of Velen. The entire region is suited to agriculture, though the ruling merchant houses of Amn have chosen to focus on trade and colonization, organizing mercenary companies to strong-arm and intimidate its neighbors. Tethyr’s feudal monarchy, the Rhindaun line, governs from its capital in Darromar. Between these two human nations lie the fey-ruled Wealdath and the monstrous kingdom of Muranndin. Cut off by Muranndin, remote Velen seceded from Tethyr in the Year of Thundering Hosts (1423 DR).",
    },
    {
      title: "Calimshan (Skyfire Emirates)",
      description:
        "Home to genasi and their human slaves, Calimshan is engaged in a civil war for control of the harsh desert of the Skyfire Wastes. A second Era of Skyfire once again pitted the forces of Calim and Memnon against each other. As during previous battles between these ancient foes, fell magic was employed that drained the life from the landscape. The sands of the Calim Desert spread east during the decades-long conflict, consuming the once-fertile Schamedar Plains and the fetid Spider Swamp (present-day Plain of Stone Spiders). Even the beautiful city of Suldolphor now lies in sand-blasted ruin along Talagath’s Gauntlet. Almraiven is the lone human bastion in this war-torn land of efreets, djinns, and their genasi servitors.",
    },
    {
      title: "Savage Coast",
      description:
        "Chult is a craggy jungle plateau rimmed by large volcanic mountains and filled with savage beasts, hulking behemoths, and disease-ridden swamps. To the east, the lands previously known as Samarach, Thindol, Tashalar, and Lapaliiya are now wholly or partially drowned. The yuan-ti kingdom of Serpentes fell too when the waters of the Great Sea joined violently with those of the Shining Sea. Today the few scattered miles of dry land poking above the ocean are known as the Mhair Archipelago.",
    },
    {
      title: "The Scarred South",
      description:
        "Once called the Shining South, the lands east of the Savage Coast have suffered cataclysmic changes since the days of the Spellplague. Formerly an immense savannah, the Shaar became a vast dustbowl when the formation of the Underchasm cut off all fresh water flowing to the area. South of the Shaar Desolation, scattered tribes of xenophobic elves hunt down and kill any intruders who attempt to cross this semi-arid region that outsiders name Elfharrow. Once a great magocracy, Halruaa today is wholly unrecognizable. Neither land nor population escaped the natural and magical disasters that struck the nation. Dambrathan clans rose up against their half-drow masters in the decades following the Spellplague and have since embraced lycanthropy. The formerly peaceful and tranquil halfling shire of Luiren now rests at the bottom of an immense gulf opening into the Great Sea. The few hin who survived the deluge fled to previously landlocked Delzimmer.",
    },
    {
      title: "The Beastlands",
      description:
        "The Beastlands derive their name primarily from the monster-infested remains of the lost kingdom of Veldorn. Still, most northerners lump Durpar, Estagund, and Ulgarth under the same appellation. Even the more civilized lands of the region are filled with bizarre sights unheard of in the north, such as Durpari replacing their natural limbs with magically animate crystal. The birdlike kenkus have become prominent in the region’s larger settlements.",
    },
    {
      title: "Murghôm",
      description:
        "Boxed in between the necrotic nation of Thay and the sandy badlands of Raurin, the ancient nations of Murghôm and Semphâr are under the dominion of the dragon princes. For the most part benevolent, the dragons receive monthly tribute from their subjects in exchange for protection. In recent decades, spies from High Imaskar have begun to infiltrate the area, seeking to unearth ancient artifacts from the ruins that dot the perimeter of Brightstar Lake. Many dragon princes are aware of, and fully support, these incursions, expecting to relieve the Imaskari of their ill-gotten gains once discovered.",
    },
    {
      title: "The Hordelands",
      description:
        "The steppes north of Murghôm are blasted in winter by storms from the Great Ice Sea, and baked in summer by searing winds from the Quoya Desert. This inhospitable mixture of extremes discourages all but the hardiest peoples from settling in a land others view as the Endless Waste. The horse warriors known as the Tuigan, descendants of the ancient empires of Imaskar and Raumathar, have long lived a nomadic existence on the rolling tundra and steppes of the region. Today, the environs in and around the Lake of Mists are home to all manner of elemental beasts. The lands for miles around are scattered with low mounds topped by standing stones. On the far eastern border of the Hordelands, past the enormous Quoya Desert, lie the ruins of the Dragonwall. The spirit of the dragon that once inhabited this structure was released from its millennia-long imprisonment during the chaos of the Spellplague.",
    },
    {
      title: "Returned Abeir",
      description:
        "A realm once forgotten is forgotten no more. When the Weave unraveled and the Spellplague collapsed the walls of reality, the antediluvian world of Abeir crashed through to Toril. The two long-separated siblings were joined anew, but only imperfectly. Portions of Abeir fell across Toril, overlaying some lands and obliterating others. In Faerûn, therealms of Akanûl and Tymanther are Abeiran seeds that germinated nations. The greatest portion of the returning world, however, replaced Maztica, the continent west of Faerûn. Now, a savage land breathes beneath a steely sky across the Trackless Sea: Returned Abeir. Here, ancient primordials sleep while their rapacious dragon mounts of old rule vast empires. It is from Abeir that dragonborn and genasi hail,",
    },

    {
      title: "Akanûl",
      description:
        "A realm in Faerûn, Akanûl is a land of Abeiran origin that germinated into a nation after the merging of Abeir and Toril. It is characterized by its unique geography and the presence of the genasi, a race of elemental humanoids. Akanûl is known for its mysterious and magical nature, with ancient secrets waiting to be discovered.",
    },

    {
      title: "Tymanther",
      description:
        "Another realm in Faerûn with origins in Abeir, Tymanther is a nation formed after the merging of the two worlds. It is the homeland of the dragonborn, a race of draconic humanoids who have made their mark on the history of the world. Tymanther is a land filled with ancient ruins and powerful dragons, making it a dangerous and thrilling place to explore.",
    },

    {
      title: "Maztica",
      description:
        "Once a continent west of Faerûn, Maztica was replaced by Returned Abeir after the merging of the two worlds. It was a land of rich history and vibrant cultures, but now its fate remains unknown. Those who seek to discover the secrets of Maztica may find themselves journeying to the heart of Returned Abeir, a land filled with primordials, dragons, and countless dangers.",
    },

    {
      title: "Trackless Sea",
      description:
        "The Trackless Sea lies between Faerûn and the savage land of Returned Abeir. This vast expanse of water is filled with mystery and danger, as powerful storms and treacherous currents make navigation difficult. Despite the risks, adventurers and explorers are drawn to the sea in search of lost treasures and undiscovered lands.",
    },
    {
    title: "The Underdark",
    description: 
    "The Underdark is a network of tunnels, caverns, seas,and rivers that spans the entire world. Lightless, butfar from lifeless, the Underdark is home to a dizzying array o creatures, from the civilized but unforgiving drow to carnivorous monsters that haunt the darkness. In these depths, drow rule mighty cities, the queen of which is the metropolis of Menzoberranzan. But their rule is far from absolute.  In dark tunnels, mind flayers conspire, and aboleths slide on mucus trails."
    }
  ];

  let randomIndex = Math.floor(Math.random() * locationOptions.length);

  return "[ Setting: " + locationOptions[randomIndex].title + " " + locationOptions[randomIndex].description    + " ]";
}