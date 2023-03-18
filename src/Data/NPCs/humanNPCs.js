const humanNPCs = [
  {
    name: "Gorin One-Smile",
    motivation: "Gorin was a jovial and kind-hearted smith from the small farming village of Riversong. He had a strong passion for adventure, though his family wished he would stay behind and take up the forge. He is determined to explore the world and meet interesting people, and he dreams of one day owning a large smithy and a fully-fledged armory.",
    quirk: "Gorin is always smiling, no matter the situation. His unusual good cheer can often be seen as disarming to his enemies, as if he is toying with them.",
    appearance: "Gorin is a stout, well-built man with a strong jawline and a wide, toothy grin. He wears a well-crafted leather apron and carries with him a hammer and a satchel full of smithing tools."
},
{
    name: "Malika Fingersmith",
    motivation: "Malika comes from a long line of thieves and pickpockets, and she has been trained in the art of becoming invisible in a crowd. She loves to travel and explore the world, and she dreams of one day finding a hidden treasure that she can call her own.",
    quirk: "Malika has a habit of picking her fingernails while she contemplates her next move. She uses this as a way to observe her surroundings without appearing to be paying them any attention.",
    appearance: "Malika is a lithe, graceful woman with an angular face and deep brown eyes. She wears a black hooded cloak, and always carries a small pouch of tools and coins."
},
{
    name: "Perrin Goldbeard",
    motivation: "Perrin is a retired mercenary who has seen more than his share of battles. He is now on a quest to find meaning in his life, and to put his experience to good use. He hopes to help those in need and make a name for himself.",
    quirk: "Perrin's huge handlebar moustache often twitches when he is deep in thought, or when he is excited by something. He also has a habit of speaking in the third person when referring to himself.",
    appearance: "Perrin is an imposing figure, standing a full head taller than most. He has a shaggy beard, piercing blue eyes, and wears a suit of leather armor and a large, wide-brimmed hat."
},
{
    name: "Tordek Old-Lane",
    motivation: "Tordek is an aging adventurer who has seen his share of battles. He is now seeking to reclaim some of the glory of his youth, and to ingratiate himself in local legends. He hopes to prove himself worthy of the title of a heroic figure.",
    quirk: "Tordek has a habit of humming old ballads and folk songs when he is alone or in deep thought. He also speaks with an exaggeratedly formal and old-fashioned tone of voice.",
    appearance: "Tordek is a sturdy man with a deeply lined face and white hair. He carries himself with an air of dignity and carries a large, well-worn greatsword across his back."
},
{
    name: "Lisele Strongbow",
    motivation: "Lisele is a half-elven ranger who has taken to the wilds in search of adventure. She is determined to prove her worth and make her mark in the world, and is unafraid of danger and death. She dreams of one day becoming a great warrior, and of leading a company of heroes.",
    quirk: "Lisele has a habit of speaking in a loud and cheery tone, no matter the situation. She also has a tendency to punctuate her speech with exaggerated gestures, often with her bow or sword.",
    appearance: "Lisele is an athletic woman with a cheerful face and long, dark hair. She typically wears brightly-colored leather armor and carries a longbow and a quiver of arrows."
},
{
    name: "Ugol Redson",
    motivation: "Ugol is a retired soldier who is looking to make a name for himself as a mercenary. He is determined to prove his worth and to make a living doing what he loves. He dreams of one day becoming a renowned leader of a mercenary company.",
    quirk: "Ugol has a tendency to rub his chin when he is in deep thought. He also has a habit of speaking in a deep and gravelly voice, even when trying to be gentle.",
    appearance: "Ugol is an imposing figure, standing a full head taller than most. He has a thick beard, a steely gaze, and wears a suit of chain mail and a large, wide-brimmed hat."
},
{
    name: "Lonan Swiftfoot",
    motivation: "Lonan is a halfling rogue who is always looking for a new adventure. He loves the thrill of danger and the challenge of the unknown. He dreams of one day finding his fortune and becoming a renowned master thief.",
    quirk: "Lonan has a tendency to jingle the coins in his pocket when he is nervous or excited. He also speaks in an exaggeratedly high-pitched and nasal tone, which can often be comical.",
    appearance: "Lonan is a small, wiry man with a mischievous grin and twinkling eyes. He wears a black hooded cloak and carries a rapier and a pouch of lockpicks."
},
{
    name: "Morrigan Fierceshadow",
    motivation: "Morrigan is a wild and untamed druid who is determined to protect the wilderness and its creatures. She is unafraid of danger, and will do whatever it takes to keep the natural world safe. She dreams of one day becoming a legendary druid and a powerful guardian of the wilds.",
    quirk: "Morrigan often speaks in an exaggeratedly hushed and whispery tone, as if she is trying to keep her presence a secret. She also has a habit of wringing her hands when she is frustrated or anxious.",
    appearance: "Morrigan is a wild-looking woman with a sharp jawline and piercing green eyes. She wears a simple robe of gray and brown, and carries a staff with a large, ornate crystal at its end."
},
{
  name: "Gwendolyn Sootwitch",
  motivation: "Gwendolyn is a secretive witch who is always on the search for new and powerful magics. She is determined to learn all she can, and to become a respected and powerful practitioner of the arcane arts. She dreams of one day becoming a powerful and renowned wizard.",
  quirk: "Gwendolyn has a habit of tapping her fingers together when she is in deep thought. She also has a tendency to speak in a low, eerily calm voice, as if she is trying to keep her presence a secret.",
  appearance: "Gwendolyn is a tall, slender woman with a pale complexion and dark hair. She wears a long, hooded robe and carries a staff with her at all times. Her eyes are a piercing green, and she carries herself with an air of mystery and power."
},
{
  name: "Fergus Grimstone",
  motivation: "Fergus is a mercenary who seeks out to make a name for himself in the world. He is driven by a desire for fame, wealth and power and is always pushing himself and his crew to take on greater and more dangerous tasks. He is determined to be remembered as a great hero, no matter what it takes.",
  quirk: "Fergus is a master of sarcasm and rarely passes up an opportunity to make a witty comment. He also has a habit of twirling his moustache when deep in thought.",
  appearance: "Fergus is a massive, imposing figure with a broad chest and a no-nonsense attitude. He wears heavy armor with a cape and a large moustache that he loves to twirl. His eyes are a deep blue, and he carries himself with a proud, confident demeanor."
},
{
  name: "Alonzo Hexburner",
  motivation: "Alonzo is a sorcerer out to prove his worth. He seeks to make a name for himself and to be remembered as one of the greatest wizards of his time. He will stop at nothing to achieve his goals and will take any opportunity to show off his power.",
  quirk: "Alonzo has a habit of twirling his long, black beard when deep in thought. He also loves to show off his magical prowess and will often attempt to do a spell even if it isn't necessary.",
  appearance: "Alonzo is an older man with a bald head and a long, black beard. He wears a floor-length robe and carries a staff with him. His eyes are a deep brown, and he carries himself with an air of arrogance."
},
{
  name: "Finnley Ironmane",
  motivation: "Finnley seeks to prove his worth and make a name for himself in the world. He is driven by a desire to be seen as a great warrior, and is constantly pushing himself to be better and to take on greater challenges. He dreams of one day becoming a legendary champion.",
  quirk: "Finnley loves to tell stories and will often try to use one to prove a point. He also has a tendency to whistle while he is waiting for something to happen.",
  appearance: "Finnley is a large, muscular man with a shaved head. He wears armor and carries a large sword with him. His eyes are a bright blue, and he carries himself with a proud, confident demeanor."
},
{
  name: "Sonia Whitelock",
  motivation: "Sonia is a clever and resourceful rogue who seeks to make a name for herself as a master thief. She is driven by a desire for wealth and power, and will stop at nothing to achieve her goals. She dreams of one day becoming a notorious crime lord.",
  quirk: "Sonia has a habit of twirling her hair when deep in thought. She also loves to show off her skills and will often attempt to pick pockets even when there is no need to.",
  appearance: "Sonia is a small, lithe woman with pale skin and black hair. She wears a dark leather outfit and has a number of daggers tucked away in her belt. Her eyes are a bright green, and she carries herself with a mischievous grin on her face."
},
{
  name: "Anya Greyfang",
  motivation: "Anya is a fierce warrior who seeks to make a name for herself as a great hero. She is driven by a desire for glory and fame and is always pushing herself to take on greater challenges. She dreams of one day becoming a legendary champion and is determined to prove her worth.",
  quirk: "Anya has a habit of twirling her long blonde hair when deep in thought. She also loves to show off her skills and will often attempt to take on an opponent even when there is no need to.",
  appearance: "Anya is a tall, muscular woman with a pale complexion and long blonde hair. She wears a full set of armor and carries a large sword with her at all times. Her eyes are a deep blue, and she carries herself with a proud, confident demeanor."
},
{
  name: "Ernesto Faerwind",
  motivation: "Ernesto is a wanderer who seeks to make a name for himself as a great explorer. He is driven by a desire for knowledge, and is always looking for new and exotic places to explore. He dreams of one day becoming a famous and renowned explorer and is determined to prove his worth.",
  quirk: "Ernesto has a habit of whistling a tune when deep in thought. He also has a tendency to look at the stars when lost in thought and loves to tell stories about his journeys.",
  appearance: "Ernesto is a tall, slender man with a pale complexion and dark hair. He wears a long, hooded cloak and carries a backpack with him at all times. His eyes are a deep brown, and he carries himself with an air of mystery and adventure."
},
{
  name: "Mikayla Redshadow",
  motivation: "Mikayla is a cunning and resourceful rogue who seeks to make a name for herself as a master thief. She is driven by a desire for wealth and power, and will stop at nothing to achieve her goals. She dreams of one day becoming a notorious crime lord and is determined to prove her worth.",
  quirk: "Mikayla has a habit of tapping her fingers together when deep in thought. She also loves to show off her skills and will often attempt to pick locks even when there is no need to.",
  appearance: "Mikayla is a small, slender woman with a pale complexion and dark hair. She wears a dark leather outfit and has a number of daggers tucked away in her belt. Her eyes are a bright green, and she carries herself with a mischievous grin on her face."
},
{
  name: "Nora Whitepaw",
  motivation: "Nora is a fierce warrior who seeks to make a name for herself as a great hero. She is driven by a desire for glory and fame and is always pushing herself to take on greater challenges. She dreams of one day becoming a legendary champion and is determined to prove her worth.",
  quirk: "Nora has a habit of twirling her long, blonde hair when deep in thought. She also loves to show off her skills and will often attempt to take on an opponent even when there is no need to.",
  appearance: "Nora is a tall, muscular woman with a pale complexion and long blonde hair. She wears a full set of armor and carries a large sword with her at all times. Her eyes are a deep blue, and she carries herself with a proud, confident demeanor."
},
{
  name: "Roland Blackbrew",
  motivation: "Roland is a master brewer who seeks to make a name for himself in the world. He is driven by a desire for fame, wealth and power and is always pushing himself to create the perfect brew. He dreams of one day becoming a renowned master brewer and is determined to achieve his goals.",
  quirk: "Roland has a habit of tapping his fingers together when he is in deep thought. He also has a tendency to speak in a loud voice, as if he is trying to get people to taste his creations. ",
  appearance: "Roland is a stout, muscular man with a bald head and a thick beard. He wears a leather apron and carries an array of brewing tools with him at all times. His eyes are a deep brown, and he carries himself with a proud, confident demeanor."
},
{
  name: "Finnian Earthknuckle",
  motivation: "Finnian is a powerful mage who seeks to make a name for himself as a great wizard. He is driven by a desire for knowledge and power, and is always searching for new and powerful magics. He dreams of one day becoming a powerful and renowned wizard and is determined to prove his worth.",
  quirk: "Finnian has a habit of twirling his long, white beard when deep in thought. He also loves to show off his magical prowess and will often attempt to do a spell even if it isn't necessary.",
  appearance: "Finnian is an older man with a bald head and a long, white beard. He wears a floor-length robe and carries a staff with him. His eyes are a deep blue, and he carries himself with an air of arrogance."
},
{
  name: "Hiram Farrunner",
  motivation: "Hiram is a wanderer who seeks to make a name for himself as a great explorer. He is driven by a desire for knowledge, and is always looking for new and exotic places to explore. He dreams of one day becoming a famous and renowned explorer and is determined to prove his worth.",
  quirk: "Hiram has a habit of whistling a tune when deep in thought. He also has a tendency to look at the stars when lost in thought and loves to tell stories about his journeys.",
  appearance: "Hiram is a tall, slender man with a pale complexion and dark hair. He wears a long, hooded cloak and carries a backpack with him at all times. His eyes are a deep brown, and he carries himself with an air of mystery and adventure."
},
{
  name: "Kendrick Silvermane",
  motivation: "Kendrick is a fierce warrior who seeks to make a name for himself as a great hero. He is driven by a desire for glory and fame and is always pushing himself to take on greater challenges. He dreams of one day becoming a legendary champion and is determined to prove his worth.",
  quirk: "Kendrick has a habit of twirling his long, silver hair when deep in thought. He also loves to show off his skills and will often attempt to take on an opponent even when there is no need to.",
  appearance: "Kendrick is a tall, muscular man with a pale complexion and long, silver hair. He wears a full set of armor and carries a large sword with him at all times. His eyes are a deep blue, and he carries himself with a proud, confident demeanor."
},
{
  name: "Paulo Firenail",
  motivation: "Paulo is a daring rogue who seeks to make a name for himself as a master thief. He is driven by a desire for wealth and power, and will stop at nothing to achieve his goals. He dreams of one day becoming a notorious crime lord and is determined to prove his worth.",
  quirk: "Paulo has a habit of twirling his hair when deep in thought. He also loves to show off his skills and will often attempt to pick locks even when there is no need to.",
  appearance: "Paulo is a small, lithe man with a pale complexion and dark hair. He wears a dark leather outfit and has a number of daggers tucked away in his belt. His eyes are a bright green, and he carries himself with a mischievous grin on his face."
},
{
    name: "Lorelai Sayers",
    motivation: "A fighter hailing from a long line of warriors, Lorelai was born and bred to enter the battlefield. With a fierce sense of pride fueling her fire, she seeks to make her ancestors proud with her combat prowess and strength of will. Driven by a strong belief in justice and a desire to protect the innocent, Lorelai will go to any lengths to ensure that good prevails over evil.",
    quirk: "Lorelai's one unique quirk is her fondness for singing. Whenever she engages in combat, she hums a faint melody that helps to keep her in the moment and focused on the task at hand.",
    appearance: "Tall and strong with auburn hair, Lorelai carries an air of grace and elegance about her. She normally wears a set of light armor for protection, and her weapons are always close at hand."
},
{
    name: "Gavin Rando",
    motivation: "An ambitious adventurer, Gavin is driven by a deep desire to explore the unknown and uncover its secrets. He has a deep fascination with magic and history, and he will often take great risks in order to experience them. He is also a kind soul, always looking out for those less fortunate than himself.",
    quirk: "Gavin has a habit of always carrying a small notebook with him. He jots down any interesting information he happens to come across in his travels, and uses it to help him along his journey.",
    appearance: "Of medium build and average height, Gavin has an eager and friendly expression. He typically wears a set of dark clothing, and he is often seen carrying a large backpack full of supplies."
},
{
    name: "Trevor Ferro",
    motivation: "Trevor is a rogue on the run from his past. A former thief, he left his life of crime behind and vowed to never look back. He travels the land in search of redemption, looking for a chance to prove himself and make up for the mistakes of his past. He is also a bit of a thrill seeker, always looking for a chance to experience something new.",
    quirk: "Trevor has a knack for finding hidden secrets and unlocking locked doors. He has an unerring sense for detecting traps, and he often finds a way out of tricky situations with relative ease.",
    appearance: "Trevor is a wiry man with a hard, weathered face. He typically wears a set of dark clothing, and his eyes are often darting around in search of something new. He carries a few simple tools on him at all times, and he is always ready for a fight."
},
{
    name: "Jacqueline Kole",
    motivation: "Jacqueline is a veteran mercenary who has seen more combat than most could ever imagine. She is driven by a deep sense of loyalty to her comrades and a strong belief in justice. She will go to any lengths to ensure her allies are safe and to make sure that evil is defeated.",
    quirk: "Jacqueline has an uncanny knack for reading people. She can often tell in an instant if someone is lying or hiding something, and she is always on the lookout for potential threats.",
    appearance: "Jacqueline is a tall and imposing figure. She wears a set of heavy armor, and her weapons are always close at hand. She has a no-nonsense attitude, and her eyes carry the weight of her many battles."
},
{
    name: "Albert Salazar",
    motivation: "Albert is a man of science and reason. He is driven by a deep curiosity and a desire to understand the world around him. He is constantly searching for knowledge, and he is not afraid to take risks in order to do so. He is also a passionate defender of the truth, and he will use his skills to ensure that justice prevails.",
    quirk: "Albert has an odd habit of talking to himself when in deep thought. He often mumbles to himself under his breath, as if he is trying to make sense of a difficult problem.",
    appearance: "Albert is a short, bespectacled man with a wild mane of hair. He typically wears a set of plain clothing, and he often carries a small satchel of tools and supplies. He has an intense and focused gaze, and he is always ready to learn something new."
},
{
    name: "Nedra Fitch",
    motivation: "Nedra is a driven merchant, always looking for a chance to make a profit. She is a shrewd negotiator and an expert haggler, and she never settles for less than she deserves. She also has a strong sense of justice, and she will always stand up for those who cannot stand up for themselves.",
    quirk: "Nedra has a strange habit of always carrying a small doll with her. She refuses to tell anyone why, but she often speaks to it in times of distress as if it were a confidant.",
    appearance: "Nedra is a short, thin woman with an eye for fashion. She typically wears a set of colorful clothing, and her small frame is often adorned with various trinkets and baubles. She has a sharp tongue and a wry smile, and she is always ready to make a deal."
},
{
    name: "Shirley Leigh",
    motivation: "Shirley is an accomplished diplomat, always looking to bring peace and understanding to all she meets. She is driven by a strong belief in the power of words, and she will go to any lengths to ensure that all parties involved reach a fair and just agreement. She is also a passionate defender of her people, and she will do whatever it takes to protect them.",
    quirk: "Shirley has an odd habit of always carrying a small music box with her. She often takes it out when she needs to think, and the soft melody it plays helps to soothe her mind.",
    appearance: "Shirley is a tall, slender woman with an air of refinement about her. She typically wears a set of fine clothing, and her hair is always neatly kept. Her eyes are often filled with determination, and her voice carries authority."
},
{
    name: "Archie Miller",
    motivation: "Archie is a simple farmer, looking to make a living off of the land. He is driven by a deep love of nature, and he will not hesitate to protect it from those who would do it harm. He also has a strong sense of justice, and he will do whatever it takes to ensure that good prevails over evil.",
    quirk: "Archie has a strange habit of always carrying a small pouch of seeds with him. He often uses them to plant small patches of vegetables wherever he goes, and he takes great pride in his work.",
    appearance: "Archie is a stout, broad-shouldered man with a friendly smile. He typically wears a set of plain clothing, and his hands are often covered in dirt from tending to his crops. His eyes are often filled with determination, and he is always ready to work."
},
{
    name: "Ellen Winters",
    motivation: "Ellen is a talented mage, driven by a deep desire to understand the power of magic. She is obsessed with uncovering its secrets, and she will go to any lengths to learn more. She is also a passionate defender of knowledge, and she will use her skills to protect it from those who would do it harm.",
    quirk: "Ellen has an odd habit of always carrying a small book of spells with her. She often takes it out when she needs to think, and the soft words of the incantations help to center her mind.",
    appearance: "Ellen is a tall, slender woman with an air of refinement about her. She typically wears a set of fine clothing, and her hands are often covered in ancient runes. Her eyes are often filled with determination, and her voice carries authority."
},
{
    name: "Karen Willoughby",
    motivation: "Karen is a pious priestess, always looking to spread the word of her deity. She is driven by a deep sense of faith, and she will go to any lengths to ensure that her beliefs are respected. She is also a passionate defender of the innocent, and she will do whatever it takes to protect them.",
    quirk: "Karen has an odd habit of always carrying a small prayer book with her. She often takes it out when she needs to think, and the soft words of the prayers help to soothe her mind.",
    appearance: "Karen is a tall, broad-shouldered woman with a kind face. She typically wears a set of fine clothing, and her hands are often adorned with holy symbols. Her eyes are often filled with serenity, and her voice carries authority."
},
{
    name: "Carol Holmes",
    motivation: "An ace detective, Carol is driven by a deep desire to uncover the truth. She is a master of deduction, and she will go to any lengths to ensure that justice is done. She is also a kind soul, always looking out for those less fortunate than herself.",
    quirk: "Carol has a habit of always carrying a small notebook with her. She jots down any interesting information she happens to come across in her investigations, and uses it to help her along her journey.",
    appearance: "Carol is a wiry woman with a sharp eye and an inquisitive expression. She typically wears a set of dark clothing, and she is often seen carrying a large magnifying glass. Her eyes are often darting around in search of clues, and she is always ready to solve a case."
},
{
    name: "Miles Stiles",
    motivation: "Miles is a talented bard, always looking for a chance to perform. He is driven by a deep love of music, and he will go to any lengths to ensure his songs are heard. He is also a passionate defender of the arts, and he will use his skills to protect them from those who would do them harm.",
    quirk: "Miles has an odd habit of always carrying a small lute with him. He often takes it out when he needs to think, and the soft strumming of the strings helps to soothe his soul.",
    appearance: "Miles is a tall, slender man with an air of refinement about him. He typically wears a set of fine clothing, and his hands are often adorned with musical notes. His eyes are often filled with determination, and his voice carries authority."
},
{
    name: "Doreen Wilcox",
    motivation: "Doreen is an accomplished craftsman, always looking to make her mark on the world. She is driven by a deep love of art, and she will not hesitate to protect it from those who would do it harm. She is also a passionate defender of the truth, and she will use her skills to ensure that justice prevails.",
    quirk: "Doreen has an odd habit of always carrying a small sketchbook with her. She often takes it out when she needs to think, and the soft lines of the drawings help to inspire her.",
    appearance: "Doreen is a tall, broad-shouldered woman with an eye for detail. She typically wears a set of fine clothing, and her hands are often adorned with small tools. Her eyes are often filled with determination, and her voice carries authority."
}, {
      name: "Alastor Delgaunt",
      motivation: "Alastor is a member of a powerful merchant family from the city of Baldur's Gate. He is motivated by gathering wealth and power, and he is willing to take risks to get both. He is a shrewd businessman and a master of manipulation, and he is determined to ascend to the highest levels of wealth and societal standing.",
      quirk: "Alastor has a habit of humming a tune to himself in moments of intense thought or concentration. He also has a habit of biting his fingernails when he is anxious or nervous.",
      appearance: "Alastor is a middle-aged man of average build and height. He has a neatly trimmed goatee and hair, and he typically wears fine silks and velvets with a lot of jewelry and trinkets. His eyes are steel gray, and his face is usually expressionless and unreadable." 
  },
  {
      name: "Garock Karstang",
      motivation: "Garock is a veteran of the Tethyrian military who was recently discharged after a long and distinguished career. He is looking for steady work and a safe place to put down roots and live out his remaining years in peace. He is a skilled leader and tactician, and he is looking for a way to put his skills to use.",
      quirk: "Garock has a habit of talking aloud to himself when no one else is around. He also has a habit of humming old military marches when he is thinking.",
      appearance: "Garock is a middle-aged human man of average height and build. He has a bald head but a full beard, and he typically wears simple but well-made clothes. His face is weathered and sun-baked, and his eyes are a deep, stormy blue." 
  },
  {
      name: "Ranae Ambramar",
      motivation: "Ranae is a former acolyte of the church of Chauntea. She is a woman of deep faith and a strong belief in justice. She is looking for a way to put her skills to use and to help those in need. She is a skilled healer and a decent fighter, and she is motivated by doing what is right.",
      quirk: "Ranae has a habit of saying a prayer before meals and before bed. She also has a habit of pacing when she is thinking or trying to figure something out.",
      appearance: "Ranae is a middle-aged human woman of average height and build. She has long, dark hair and bright, blue eyes. She typically wears simple but practical clothes and a holy symbol of Chauntea around her neck." 
  },
  {
      name: "Gedrik Graevorn",
      motivation: "Gedrik is a former scholar from the city of Neverwinter. He is a man of deep curiosity and a love of knowledge. He is searching for a way to put his knowledge to use and to make a difference in the world. He is a skilled researcher and a decent fighter, and he is motivated by learning and teaching.",
      quirk: "Gedrik has a habit of twirling his beard when he is thinking or trying to remember something. He also has a habit of speaking in a soft, almost inaudible whisper when talking to himself.",
      appearance: "Gedrik is a middle-aged human man of average height and build. He has a bald head but a full, well-groomed beard. He typically wears fine, scholarly robes and a pair of glasses. His face is pale and his eyes are a deep, misty blue." 
  },
  {
      name: "Tovar Ammantar",
      motivation: "Tovar is a former sailor from the city of Waterdeep. He is an adventurous soul who loves to travel and explore. He is looking for a way to put his skills to use and to make a name for himself. He is a skilled sailor and an experienced fighter, and he is motivated by adventure and fame.",
      quirk: "Tovar has a habit of whistling a sea shanty when bored or waiting. He also has a habit of tapping his foot when thinking or trying to remember something.",
      appearance: "Tovar is a middle-aged human man of average height and build. He has short, dark hair and bright, green eyes. He typically wears simple but practical clothing and a pair of well-worn boots. His face is weathered and tanned, and he has a wry smile." 
  },
  {
      name: "Tindra Olavar",
      motivation: "Tindra is a former street urchin from the city of Baldur's Gate. She is a brave and resourceful young woman who is looking for a way to make a name for herself and to find a place in the world. She is a skilled thief and a decent fighter, and she is motivated by money and power.",
      quirk: "Tindra has a habit of twirling a lock of her hair when bored or lost in thought. She also has a habit of mumbling to herself when walking alone.",
      appearance: "Tindra is a young human woman of average height and build. She has long, dark hair and bright, brown eyes. She typically wears simple, practical clothing and a pair of scuffed boots. Her face is lithe and her eyes are mischievous." 
  },
  {
      name: "Nahla Qualnar",
      motivation: "Nahla is a former stay-at-home mother from the city of Waterdeep. She is a kind and gentle woman who loves her children and is looking for a way to make a difference in the world. She is a skilled healer and a decent fighter, and she is motivated by doing what is right and helping those in need.",
      quirk: "Nahla has a habit of humming while she works. She also has a habit of drumming her fingers when anxious or impatient.",
      appearance: "Nahla is a middle-aged human woman of average height and build. She has long, dark hair and bright, green eyes. She typically wears simple, practical clothing and a pair of comfortable shoes. Her face is weathered and her eyes are warm and inviting." 
  },
  {
      name: "Tahalar Norsk",
      motivation: "Tahalar is a former mercenary from the city of Neverwinter. He is a proud and stoic warrior who is looking for a way to make a name for himself and to put his skills to use. He is a skilled fighter and a decent strategist, and he is motivated by money and glory.",
      quirk: "Tahalar has a habit of sharpening his swords and axes in moments of boredom. He also has a habit of pacing when deep in thought or trying to figure something out.",
      appearance: "Tahalar is a middle-aged human man of average height and build. He has short, dark hair and bright, blue eyes. He typically wears simple but well-made clothing and a pair of well-worn boots. His face is weathered and his eyes are a deep, icy blue." 
  },
  {
      name: "Tindra Olavar",
      motivation: "Tindra is a former street urchin from the city of Baldur's Gate. She is a brave and resourceful young woman who is looking for a way to make a name for herself and to find a place in the world. She is a skilled thief and a decent fighter, and she is motivated by money and power.",
      quirk: "Tindra has a habit of twirling a lock of her hair when bored or lost in thought. She also has a habit of mumbling to herself when walking alone.",
      appearance: "Tindra is a young human woman of average height and build. She has long, dark hair and bright, brown eyes. She typically wears simple, practical clothing and a pair of scuffed boots. Her face is lithe and her eyes are mischievous." 
  },
  {
      name: "Rowan Seabreeze",
      motivation: "Rowan is a former pirate from the city of Waterdeep. He is a free-spirited adventurer who loves to explore the unknown. He is looking for a way to put his skills to use and to make a difference in the world. He is a skilled sailor and an experienced fighter, and he is motivated by adventure and fame.",
      quirk: "Rowan has a habit of humming a sea shanty when bored or waiting. He also has a habit of tapping his foot when thinking or trying to remember something.",
      appearance: "Rowan is a middle-aged human man of average height and build. He has short, dark hair and bright, green eyes. He typically wears simple but practical clothing and a pair of well-worn boots. His face is weathered and tanned, and he has a wry smile." 
  },
  {
      name: "Hastur Galmear",
      motivation: "Hastur is a former soldier from the city of Neverwinter. He is a brave and disciplined warrior who is looking for a way to make a name for himself. He is a skilled fighter and a decent leader, and he is motivated by money and glory.",
      quirk: "Hastur has a habit of sharpening his weapons in moments of boredom. He also has a habit of tapping his foot when deep in thought or trying to figure something out.",
      appearance: "Hastur is a middle-aged human man of average height and build. He has short, dark hair and bright, blue eyes. He typically wears simple but well-made clothing and a pair of well-worn boots. His face is weathered and his eyes are a deep, icy blue." 
  },
  {
      name: "Alina Ammantar",
      motivation: "Alina is a former acolyte of the church of Chauntea. She is a woman of deep faith and a strong belief in justice. She is looking for a way to put her skills to use and to help those in need. She is a skilled healer and a decent fighter, and she is motivated by doing what is right.",
      quirk: "Alina has a habit of saying a prayer before meals and before bed. She also has a habit of pacing when she is thinking or trying to figure something out.",
      appearance: "Alina is a middle-aged human woman of average height and build. She has long, dark hair and bright, blue eyes. She typically wears simple but practical clothes and a holy symbol of Chauntea around her neck." 
  },
  {
      name: "Yana Qualnar",
      motivation: "Yana is a former stay-at-home mother from the city of Waterdeep. She is a kind and gentle woman who loves her children and is looking for a way to make a difference in the world. She is a skilled healer and a decent fighter, and she is motivated by doing what is right and helping those in need.",
      quirk: "Yana has a habit of humming while she works. She also has a habit of drumming her fingers when anxious or impatient.",
      appearance: "Yana is a middle-aged human woman of average height and build. She has long, dark hair and bright, green eyes. She typically wears simple, practical clothing and a pair of comfortable shoes. Her face is weathered and her eyes are warm and inviting." 
  },


];


export const getRandomHumanNPC = () => {
    let randomIndex = Math.floor(Math.random() * humanNPCs.length);
    return " [Human NPC:" + humanNPCs[randomIndex].name + ". " + humanNPCs[randomIndex].motivation  +     humanNPCs[randomIndex].quirk + "]";
}

  