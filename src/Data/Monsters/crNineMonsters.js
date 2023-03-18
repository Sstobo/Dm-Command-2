const crNineMonsters = [
  
    "The bone devil is a demonic creature whose skeletal frame is covered with razor-sharp spines, each capable of delivering a lethal strike. Its wings are leathery and bat-like, and its face is humanoid, but its eyes are black and its mouth is filled with razor-sharp teeth. It has long, sharp claws that can rend flesh and a poisonous tail that can deliver a deadly sting. The bone devil is a cunning and intelligent creature that can manipulate others to its will. It is known for its ability to use its poisonous tail and its ability to summon other devils to aid it in battle.",
    
    "The clay golem is a massive, hulking construct made entirely of clay. It is animated by magic and has immense strength, capable of crushing boulders with ease. Its large, muscular frame is covered in a layer of rough, earth-toned clay, with glowing, red eyes set deep in its head. It moves with a slow, lumbering gait, its movements as ponderous as they are inexorable. The clay golem is immune to many forms of attack, including poison and psychic damage. It can also regenerate quickly if it is damaged. However, it is vulnerable to lightning and thunder damage.",
    
    "The cloud giant is a massive humanoid that stands over twenty feet tall. Its skin is pale like the clouds it commands, and its hair is white like a winter's frost. It wears clothing made of clouds that swirl around its form like a constantly shifting storm. The giant's features are sharp and angular, and its eyes are as blue as the sky. It carries a giant-sized weapon, usually a sword or a club, made of pure white clouds. The cloud giant is often found in mountainous regions, where it can control the weather and create clouds. It is known to be friendly to those who do not threaten it.",
    
    "The fire giant is a massive humanoid that stands over fifteen feet tall. Its skin is covered in thick, red scales that glow with an inner heat. Its eyes blaze with a fierce intelligence, and its hair is made of flames that flicker and dance in a non-existent wind. It carries a massive hammer, the head of which is made of solidified magma. The fire giant is immune to fire damage and is resistant to many other forms of attack. It is known for its ability to breathe fire and for its incredible strength.",
    
    "The glabrezu is a towering demon that stands over nine feet tall. Its body is covered in thick, chitinous armor, and it has four muscular arms that end in sharp claws. Its face is that of a baboon, but its eyes glow with a sickly green light that betrays its demonic nature. The glabrezu is known for its ability to cast spells and for its incredible strength, which allows it to overpower even the strongest warriors. It is often summoned to do the bidding of evil wizards and is a fearsome opponent in battle.",
    
    "The treant is a massive tree-like creature that stands over twenty feet tall. Its bark is thick and gnarled, and its branches are strong and sturdy. Its eyes glow with a fierce, otherworldly light, and its movements are slow and deliberate. The treant is known for its ability to communicate with animals and for its wisdom, which makes it an invaluable ally to those who seek its counsel. It is a peaceful creature that will only attack if threatened.",
    
    "The young blue dragon is a fearsome creature that stands over fifteen feet tall. Its scales are a deep, sapphire blue that shimmer in the sunlight, and its eyes are a piercing yellow. It has a long, serpentine body that is covered in hard, angular plates that protect its vital organs. Its wings are leathery and bat-like, allowing it to soar through the sky with incredible speed and agility. The young blue dragon is known for its ability to breathe lightning, which it can unleash in a devastating bolt that can strike multiple targets at once. It is often found in deserts, where it can hunt its prey with ease and is a fearsome opponent in battle.",
    
    "The young silver dragon is a noble creature that stands over fifteen feet tall. Its scales are a shimmering silver that reflects the light like a thousand tiny mirrors. Its eyes are a piercing blue that seem to see into the hearts of those who look upon it. It has a long, serpentine body that is lithe and agile, and its wings are large and powerful. The young silver dragon is known for its ability to breathe frost, which it can unleash in a cone that freezes everything in its path. It is a peaceful creature that will only attack if threatened, but it will defend its allies with all its might."
    
];

export const getRandomCrNineMonster = () => {
    let randomIndex = Math.floor(Math.random() * crNineMonsters.length);
    return (
      "   [ Monster: " +
      crNineMonsters[randomIndex] + " ]   "
    );
  };
  