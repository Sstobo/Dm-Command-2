export const storyCalibration = {
  mainWorld: {
    name: 'Enter the name of the world here',
    description: 'Enter a brief description of the world here',
    history: 'Enter the world\'s history and lore here',
    regions: ['Enter the different regions of the world, one per array element'],
    races: ['Enter the races inhabiting the world, one per array element'],
    technologyLevel: 'Enter the world\'s general technology level here',
    magicSystem: {
      name: 'Enter the name of the magic system here',
      description: 'Enter a description of the magic system here',
      limitations: 'Enter the limitations of the magic system here'
    }
  },
  mainQuest: {
    name: 'Enter the name of the main quest here',
    description: 'Enter a brief description of the main quest here',
    objectives: ['Enter the main objectives of the quest, one per array element'],
    rewards: 'Enter the rewards for completing the main quest here'
  },
  villain: {
    name: 'Enter the name of the villain here',
    race: 'Enter the villain\'s race here',
    class: 'Enter the villain\'s class here',
    motivations: 'Enter the villain\'s motivations here',
    abilities: 'Enter the villain\'s abilities and powers here',
    weaknesses: 'Enter the villain\'s weaknesses here'
  },
  allies: [
    {
      name: 'Enter the name of an ally here',
      race: 'Enter the ally\'s race here',
      class: 'Enter the ally\'s class here',
      relationship: 'Enter the ally\'s relationship to the party here',
      abilities: 'Enter the ally\'s abilities and powers here'
    }
  ],
  keyLocations: [
    {
      name: 'Enter the name of a key location here',
      description: 'Enter a description of the location here',
      pointsOfInterest: ['Enter points of interest for the location, one per array element'],
      characters: [
        {
          name: 'Enter the name of a character in the location here',
          race: 'Enter the character\'s race here',
          class: 'Enter the character\'s class here',
          role: 'Enter the character\'s role in the story here'
        }
      ]
    },
    {
      name: 'Enter the name of another key location, if desired'
    }
  ],
  sideQuests: [
    {
      name: 'Enter the name of a side quest here',
      description: 'Enter a brief description of the side quest here',
      objectives: ['Enter the objectives of the side quest, one per array element'],
      rewards: 'Enter the rewards for completing the side quest here'
    }
  ],
  factions: [
    {
      name: 'Enter the name of a faction here',
      description: 'Enter a brief description of the faction here',
      goals: 'Enter the faction\'s goals and motivations here',
      relationships: 'Enter the faction\'s relationships with other factions or groups here'
    }
  ],
  uniqueItems: [
    {
      name: 'Enter the name of a unique item here',
      description: 'Enter a description of the item here',
      powers: 'Enter the item\'s powers and abilities here',
      limitations: 'Enter the item\'s limitations and drawbacks here',
      origin: 'Enter the item\'s history and origin here'
    }
  ]
};