export const AQUARIUM = [
  {
    accessScore: '0',
    levelScore: '0',
    description:
      'Questions about different species of fish commonly found in aquariums.',
    subject: 'Fish Species',
    isOpen: true,
    id: 'fs1',
    levelQuestions: [
      {
        id: 'fsq1',
        question:
          'Which fish species is known for its vibrant orange color and is commonly found in home aquariums?',
        options: ['Guppy', 'Goldfish', 'Betta', 'Tetra'],
        answer: 'Goldfish',
      },
      {
        id: 'fsq2',
        question:
          'What is the common name for the fish species "Pterophyllum scalare"?',
        options: ['Angelfish', 'Discus', 'Clownfish', 'Gourami'],
        answer: 'Angelfish',
      },
      {
        id: 'fsq3',
        question:
          'Which fish is known for its distinctive black and white stripes and is often seen in saltwater aquariums?',
        options: ['Blue Tang', 'Clownfish', 'Moorish Idol', 'Zebra Danio'],
        answer: 'Moorish Idol',
      },
      {
        id: 'fsq4',
        question: 'What type of fish is a "Corydoras aeneus"?',
        options: ['Catfish', 'Cichlid', 'Tetra', 'Guppy'],
        answer: 'Catfish',
      },
      {
        id: 'fsq5',
        question:
          'Which species is often referred to as the "cleaner fish" due to its algae-eating habits?',
        options: ['Betta', 'Plecostomus', 'Neon Tetra', 'Angelfish'],
        answer: 'Plecostomus',
      },
      {
        id: 'fsq6',
        question:
          'What is the common name for the fish species "Symphysodon aequifasciatus"?',
        options: ['Guppy', 'Betta', 'Discus', 'Tetra'],
        answer: 'Discus',
      },
      {
        id: 'fsq7',
        question:
          'Which fish is known for its ability to inflate and is commonly found in both freshwater and saltwater aquariums?',
        options: ['Pufferfish', 'Angelfish', 'Gourami', 'Clownfish'],
        answer: 'Pufferfish',
      },
      {
        id: 'fsq8',
        question:
          'Which freshwater fish is known for its colorful fins and elaborate mating displays?',
        options: ['Goldfish', 'Betta', 'Tetra', 'Catfish'],
        answer: 'Betta',
      },
      {
        id: 'fsq9',
        question:
          'What is the common name for the fish species "Poecilia reticulata"?',
        options: ['Guppy', 'Tetra', 'Gourami', 'Betta'],
        answer: 'Guppy',
      },
      {
        id: 'fsq10',
        question:
          'Which fish species is known for its bright blue color and is popular in marine aquariums?',
        options: ['Angelfish', 'Blue Tang', 'Neon Tetra', 'Clownfish'],
        answer: 'Blue Tang',
      },
    ],
  },
  {
    accessScore: '0',
    levelScore: '0',
    description:
      'Questions about how to properly maintain and care for an aquarium.',
    subject: 'Aquarium Maintenance',
    isOpen: false,
    id: 'am2',
    levelQuestions: [
      {
        id: 'amq1',
        question:
          'How often should you perform a partial water change in a freshwater aquarium?',
        options: [
          'Every week',
          'Every month',
          'Every six months',
          'Once a year',
        ],
        answer: 'Every week',
      },
      {
        id: 'amq2',
        question:
          'What is the ideal temperature range for most tropical fish in an aquarium?',
        options: [
          '15-20°C (59-68°F)',
          '20-25°C (68-77°F)',
          '25-30°C (77-86°F)',
          '30-35°C (86-95°F)',
        ],
        answer: '20-25°C (68-77°F)',
      },
      {
        id: 'amq3',
        question:
          'Which device is essential for maintaining proper oxygen levels in an aquarium?',
        options: ['Heater', 'Filter', 'Air pump', 'Light fixture'],
        answer: 'Air pump',
      },
      {
        id: 'amq4',
        question:
          'What is the primary purpose of a biological filter in an aquarium?',
        options: [
          'To remove large debris',
          'To add oxygen to the water',
          'To break down harmful ammonia and nitrites',
          'To regulate water temperature',
        ],
        answer: 'To break down harmful ammonia and nitrites',
      },
      {
        id: 'amq5',
        question: 'How often should you clean the aquarium filter?',
        options: [
          'Every day',
          'Once a month',
          'Every three months',
          'Every six months',
        ],
        answer: 'Once a month',
      },
      {
        id: 'amq6',
        question:
          'What is the recommended pH level for most freshwater aquarium fish?',
        options: ['5.0-6.0', '6.5-7.5', '7.5-8.5', '8.5-9.0'],
        answer: '6.5-7.5',
      },
      {
        id: 'amq7',
        question: 'What should you do first when setting up a new aquarium?',
        options: [
          'Add fish',
          'Install the lighting',
          'Rinse the substrate and decorations',
          'Fill the tank with water',
        ],
        answer: 'Rinse the substrate and decorations',
      },
      {
        id: 'amq8',
        question:
          "Which of the following is a sign that an aquarium's water quality is poor?",
        options: [
          'Clear water',
          'Strong water flow',
          'Excess algae growth',
          'Healthy fish behavior',
        ],
        answer: 'Excess algae growth',
      },
      {
        id: 'amq9',
        question:
          'What type of test kit is essential for monitoring the nitrogen cycle in an aquarium?',
        options: [
          'Hardness test kit',
          'pH test kit',
          'Ammonia/nitrite/nitrate test kit',
          'Chlorine test kit',
        ],
        answer: 'Ammonia/nitrite/nitrate test kit',
      },
      {
        id: 'amq10',
        question:
          'How often should you check the water parameters in your aquarium?',
        options: ['Daily', 'Weekly', 'Monthly', 'Every six months'],
        answer: 'Weekly',
      },
    ],
  },
  {
    accessScore: '15',
    levelScore: '0',
    description:
      'Questions about the different types of equipment used in aquariums, such as filters, heaters, and lighting.',
    subject: 'Aquarium Equipment',
    isOpen: false,
    id: 'ae3',
    levelQuestions: [
      {
        id: 'aeq1',
        question:
          'Which piece of equipment is used to maintain a consistent water temperature in an aquarium?',
        options: ['Filter', 'Heater', 'Air pump', 'Thermometer'],
        answer: 'Heater',
      },
      {
        id: 'aeq2',
        question:
          'What type of lighting is commonly used to promote plant growth in a planted aquarium?',
        options: ['Incandescent', 'Fluorescent', 'LED', 'Halogen'],
        answer: 'LED',
      },
      {
        id: 'aeq3',
        question:
          'Which device helps to keep the aquarium water clean by removing debris and waste?',
        options: ['Heater', 'Skimmer', 'Filter', 'CO2 system'],
        answer: 'Filter',
      },
      {
        id: 'aeq4',
        question: 'What is the purpose of an aquarium air pump?',
        options: [
          'To filter the water',
          'To add oxygen to the water',
          'To heat the water',
          'To provide lighting',
        ],
        answer: 'To add oxygen to the water',
      },
      {
        id: 'aeq5',
        question:
          'Which piece of equipment measures the salinity of water in a marine aquarium?',
        options: ['Hydrometer', 'Thermometer', 'pH meter', 'Ammonia test kit'],
        answer: 'Hydrometer',
      },
      {
        id: 'aeq6',
        question:
          'What is the function of an aquarium protein skimmer in a saltwater setup?',
        options: [
          'To filter out solid waste',
          'To add nutrients to the water',
          'To remove organic compounds and proteins',
          'To heat the water',
        ],
        answer: 'To remove organic compounds and proteins',
      },
      {
        id: 'aeq7',
        question:
          'Which type of filter uses bacteria to break down ammonia and nitrites in the aquarium?',
        options: [
          'Mechanical filter',
          'Chemical filter',
          'Biological filter',
          'UV sterilizer',
        ],
        answer: 'Biological filter',
      },
      {
        id: 'aeq8',
        question:
          'What is the main benefit of using an LED light fixture in an aquarium?',
        options: [
          'Increases water temperature',
          'Reduces algae growth',
          'Provides natural-looking lighting with energy efficiency',
          'Reduces water hardness',
        ],
        answer: 'Provides natural-looking lighting with energy efficiency',
      },
      {
        id: 'aeq9',
        question:
          'Which piece of equipment is essential for monitoring and maintaining CO2 levels in a planted aquarium?',
        options: [
          'Protein skimmer',
          'CO2 diffuser and regulator',
          'Air pump',
          'Heater',
        ],
        answer: 'CO2 diffuser and regulator',
      },
      {
        id: 'aeq10',
        question:
          'What is the primary purpose of using an aquarium gravel vacuum?',
        options: [
          'To clean the glass surface',
          'To change the water',
          'To remove debris from the substrate',
          'To measure water parameters',
        ],
        answer: 'To remove debris from the substrate',
      },
    ],
  },
  {
    accessScore: '22',
    levelScore: '0',
    description:
      'Questions about aquatic plants that can be found in aquariums and their care requirements.',
    subject: 'Aquarium Plants',
    isOpen: true,
    id: 'ap1',
    levelQuestions: [
      {
        id: 'apq1',
        question:
          'Which aquarium plant is known for its carpet-like growth and is often used in aquascaping?',
        options: ['Anubias', 'Java Moss', 'Dwarf Hairgrass', 'Amazon Sword'],
        answer: 'Dwarf Hairgrass',
      },
      {
        id: 'apq2',
        question:
          'What type of lighting is generally best for growing most aquatic plants?',
        options: ['Incandescent', 'Fluorescent', 'LED', 'Halogen'],
        answer: 'LED',
      },
      {
        id: 'apq3',
        question:
          'Which plant is commonly used as a background plant due to its tall, thin leaves?',
        options: ['Vallisneria', 'Java Fern', 'Anubias', 'Cryptocoryne'],
        answer: 'Vallisneria',
      },
      {
        id: 'apq4',
        question:
          'Which aquatic plant is known for its ability to attach to rocks and driftwood?',
        options: ['Hornwort', 'Java Fern', 'Duckweed', 'Ludwigia'],
        answer: 'Java Fern',
      },
      {
        id: 'apq5',
        question:
          'What is the common name for the plant species "Echinodorus bleheri"?',
        options: ['Water Sprite', 'Amazon Sword', 'Cryptocoryne', 'Java Moss'],
        answer: 'Amazon Sword',
      },
      {
        id: 'apq6',
        question:
          'Which plant is known for its bright red coloration under high light conditions?',
        options: ['Rotala', 'Anubias', 'Java Moss', 'Hornwort'],
        answer: 'Rotala',
      },
      {
        id: 'apq7',
        question:
          'What is a key nutrient often supplemented to support healthy plant growth in aquariums?',
        options: ['Calcium', 'Iron', 'Magnesium', 'Phosphate'],
        answer: 'Iron',
      },
      {
        id: 'apq8',
        question:
          'Which plant is a floating species often used in aquariums to provide shade and shelter?',
        options: ['Java Moss', 'Water Lettuce', 'Hornwort', 'Anubias'],
        answer: 'Water Lettuce',
      },
      {
        id: 'apq9',
        question:
          'Which low-light plant is commonly used in aquascaping for its compact growth?',
        options: ['Cryptocoryne', 'Ludwigia', 'Anubias', 'Java Fern'],
        answer: 'Cryptocoryne',
      },
      {
        id: 'apq10',
        question:
          'Which plant is known for its lace-like leaves and is often a centerpiece in aquascapes?',
        options: ['Amazon Sword', 'Lace Plant', 'Java Moss', 'Duckweed'],
        answer: 'Lace Plant',
      },
    ],
  },
  {
    accessScore: '30',
    levelScore: '0',
    description:
      'Questions about water parameters such as pH, ammonia, nitrite, and nitrate levels, and how to manage them.    ',
    subject: 'Aquarium Chemistry',
    isOpen: true,
    id: 'ac1',
    levelQuestions: [
      {
        id: 'acq1',
        question:
          'What is the ideal pH range for most freshwater aquarium fish?',
        options: ['4.0-5.0', '6.0-7.5', '8.0-9.0', '9.0-10.0'],
        answer: '6.0-7.5',
      },
      {
        id: 'acq2',
        question:
          'What chemical is primarily responsible for harmful spikes in a newly established aquarium?',
        options: ['Nitrite', 'Nitrate', 'Ammonia', 'Carbon dioxide'],
        answer: 'Ammonia',
      },
      {
        id: 'acq3',
        question:
          'Which test kit is essential for monitoring the nitrogen cycle in an aquarium?',
        options: [
          'pH test kit',
          'Hardness test kit',
          'Ammonia/nitrite/nitrate test kit',
          'Chlorine test kit',
        ],
        answer: 'Ammonia/nitrite/nitrate test kit',
      },
      {
        id: 'acq4',
        question:
          'What is the recommended concentration of nitrate (NO3) in a freshwater aquarium?',
        options: ['0-20 ppm', '40-60 ppm', '80-100 ppm', '100-150 ppm'],
        answer: '0-20 ppm',
      },
      {
        id: 'acq5',
        question:
          'Which substance is commonly used to dechlorinate tap water for aquarium use?',
        options: [
          'Sodium chloride',
          'Calcium carbonate',
          'Sodium thiosulfate',
          'Magnesium sulfate',
        ],
        answer: 'Sodium thiosulfate',
      },
      {
        id: 'acq6',
        question:
          'What is the acceptable range of general hardness (GH) in most freshwater aquariums?',
        options: ['0-2 dGH', '3-6 dGH', '7-12 dGH', '13-20 dGH'],
        answer: '7-12 dGH',
      },
      {
        id: 'acq7',
        question:
          'Which parameter measures the buffering capacity of water in an aquarium?',
        options: [
          'pH',
          'GH (General Hardness)',
          'KH (Carbonate Hardness)',
          'TDS (Total Dissolved Solids)',
        ],
        answer: 'KH (Carbonate Hardness)',
      },
      {
        id: 'acq8',
        question:
          'What is the safe level of ammonia (NH3) in a well-maintained aquarium?',
        options: ['0 ppm', '0.5 ppm', '1.0 ppm', '2.0 ppm'],
        answer: '0 ppm',
      },
      {
        id: 'acq9',
        question:
          'What is the effect of high levels of carbon dioxide (CO2) in an aquarium?',
        options: [
          'Increased oxygen levels',
          'Decreased pH levels',
          'Increased pH levels',
          'Decreased oxygen levels',
        ],
        answer: 'Decreased pH levels',
      },
      {
        id: 'acq10',
        question:
          'Which chemical element is commonly supplemented in planted aquariums to promote plant growth?',
        options: ['Chlorine', 'Iron', 'Sodium', 'Lead'],
        answer: 'Iron',
      },
    ],
  },
  {
    accessScore: '37',
    levelScore: '0',
    description:
      'Questions about recreating natural habitats and ecosystems within an aquarium',
    subject: 'Habitat and Ecosystems',
    isOpen: true,
    id: 'he1',
    levelQuestions: [
      {
        id: 'heq1',
        question:
          'Which type of aquarium setup mimics a river or stream environment with moderate to high water flow?',
        options: [
          'Reef tank',
          'Brackish tank',
          'Paludarium',
          'Freshwater river tank',
        ],
        answer: 'Freshwater river tank',
      },
      {
        id: 'heq2',
        question:
          'What type of aquarium replicates a coastal environment where freshwater meets seawater?',
        options: [
          'Saltwater tank',
          'Brackish tank',
          'Freshwater tank',
          'Reef tank',
        ],
        answer: 'Brackish tank',
      },
      {
        id: 'heq3',
        question:
          'Which ecosystem is characterized by clear, slightly acidic water with dense vegetation, often found in South America?',
        options: [
          'African Rift Lake',
          'Amazon biotope',
          'Asian blackwater',
          'Australian outback',
        ],
        answer: 'Amazon biotope',
      },
      {
        id: 'heq4',
        question:
          'What is the primary function of a refugium in a marine aquarium?',
        options: [
          'To filter out impurities',
          'To provide a breeding ground for fish',
          'To reduce water temperature',
          'To grow macroalgae and provide habitat for beneficial organisms',
        ],
        answer:
          'To grow macroalgae and provide habitat for beneficial organisms',
      },
      {
        id: 'heq5',
        question:
          'Which type of substrate is commonly used in aquariums to replicate a sandy riverbed environment?',
        options: ['Gravel', 'Sand', 'Peat', 'Clay'],
        answer: 'Sand',
      },
      {
        id: 'heq6',
        question:
          'What kind of plants are typically found in a mangrove aquarium setup?',
        options: ['Mosses', 'Floating plants', 'Mangrove trees', 'Ferns'],
        answer: 'Mangrove trees',
      },
      {
        id: 'heq7',
        question:
          'Which aquarium habitat is known for its high biodiversity and colorful coral reefs?',
        options: [
          'Freshwater planted tank',
          'African cichlid tank',
          'Marine reef tank',
          'Brackish tank',
        ],
        answer: 'Marine reef tank',
      },
      {
        id: 'heq8',
        question:
          'What type of fish would you most likely find in a rocky African Rift Lake biotope?',
        options: ['Discus', 'Clownfish', 'Cichlids', 'Guppies'],
        answer: 'Cichlids',
      },
      {
        id: 'heq9',
        question:
          'Which ecosystem setup would be most suitable for fish that thrive in acidic, tannin-stained water?',
        options: [
          'Amazon blackwater biotope',
          'Brackish tank',
          'Marine reef tank',
          'Freshwater river tank',
        ],
        answer: 'Amazon blackwater biotope',
      },
      {
        id: 'heq10',
        question:
          'In a planted aquarium, what role do fast-growing plants play in maintaining a healthy ecosystem?',
        options: [
          'They increase water temperature.',
          'They compete with algae for nutrients.',
          'They lower water pH.',
          'They release toxins into the water.',
        ],
        answer: 'They compete with algae for nutrients.',
      },
    ],
  },
  {
    accessScore: '45',
    levelScore: '0',
    description:
      'Questions about invertebrates like shrimp, snails, and corals that are commonly kept in aquariums.',
    subject: 'Aquarium Invertebrates',
    isOpen: true,
    id: 'ai1',
    levelQuestions: [
      {
        id: 'aiq1',
        question:
          'Which invertebrate is commonly known for its ability to clean algae off aquarium glass and decorations?',
        options: ['Hermit Crab', 'Amano Shrimp', 'Sea Urchin', 'Turbo Snail'],
        answer: 'Turbo Snail',
      },
      {
        id: 'aiq2',
        question:
          'What type of shrimp is often used in freshwater aquariums for its vibrant red color?',
        options: [
          'Ghost Shrimp',
          'Cherry Shrimp',
          'Amano Shrimp',
          'Bamboo Shrimp',
        ],
        answer: 'Cherry Shrimp',
      },
      {
        id: 'aiq3',
        question:
          'Which invertebrate is known for its peaceful nature and is often kept with other community fish?',
        options: [
          'Blue Leg Hermit Crab',
          'Fire Shrimp',
          'Nerite Snail',
          'Coral Banded Shrimp',
        ],
        answer: 'Nerite Snail',
      },
      {
        id: 'aiq4',
        question:
          'What is the common name for the freshwater invertebrate "Caridina multidentata"?',
        options: [
          'Ghost Shrimp',
          'Amano Shrimp',
          'Red Cherry Shrimp',
          'Crystal Red Shrimp',
        ],
        answer: 'Amano Shrimp',
      },
      {
        id: 'aiq5',
        question:
          'Which type of snail is particularly effective at controlling algae in a planted aquarium?',
        options: [
          'Assassin Snail',
          'Mystery Snail',
          'Nerite Snail',
          'Apple Snail',
        ],
        answer: 'Nerite Snail',
      },
      {
        id: 'aiq6',
        question:
          'Which of the following invertebrates is known for its bioluminescence in marine aquariums?',
        options: [
          'Cleaner Shrimp',
          'Firefly Squid',
          'Peppermint Shrimp',
          'Sea Anemone',
        ],
        answer: 'Firefly Squid',
      },
      {
        id: 'aiq7',
        question:
          'Which invertebrate is famous for its symbiotic relationship with clownfish?',
        options: ['Sea Cucumber', 'Anemone', 'Starfish', 'Sea Urchin'],
        answer: 'Anemone',
      },
      {
        id: 'aiq8',
        question:
          'What is the primary diet of a freshwater shrimp like the Red Cherry Shrimp?',
        options: ['Meat', 'Algae and biofilm', 'Large fish', 'Coral'],
        answer: 'Algae and biofilm',
      },
      {
        id: 'aiq9',
        question:
          'Which invertebrate is known for its ability to burrow into the substrate and aerate the soil in an aquarium?',
        options: [
          'Nerite Snail',
          'Bristle Worm',
          'Malaysian Trumpet Snail',
          'Sea Urchin',
        ],
        answer: 'Malaysian Trumpet Snail',
      },
      {
        id: 'aiq10',
        question:
          'Which invertebrate is often used in marine aquariums to help control Aiptasia anemones?',
        options: [
          'Peppermint Shrimp',
          'Fire Shrimp',
          'Harlequin Shrimp',
          'Cleaner Shrimp',
        ],
        answer: 'Peppermint Shrimp',
      },
    ],
  },
  {
    accessScore: '55',
    levelScore: '0',
    description: 'Questions about common fish diseases and their treatments.',
    subject: 'Aquarium Diseases and Treatments',
    isOpen: true,
    id: 'adt1',
    levelQuestions: [
      {
        id: 'adtq1',
        question:
          'What is the common name for the disease caused by the parasite Ichthyophthirius multifiliis?',
        options: [
          'Fin Rot',
          'Velvet Disease',
          'White Spot Disease (Ich)',
          'Dropsy',
        ],
        answer: 'White Spot Disease (Ich)',
      },
      {
        id: 'adtq2',
        question:
          'Which of the following is a symptom of Fin Rot in aquarium fish?',
        options: [
          'White spots on fins',
          'Fins with ragged edges and decay',
          'Swollen abdomen',
          'Fish scratching against objects',
        ],
        answer: 'Fins with ragged edges and decay',
      },
      {
        id: 'adtq3',
        question:
          'What is the recommended treatment for White Spot Disease (Ich) in aquarium fish?',
        options: [
          'Increasing water temperature and adding salt',
          'Lowering water temperature',
          'Removing all fish and letting the tank sit empty',
          'Adding copper-based medication',
        ],
        answer: 'Increasing water temperature and adding salt',
      },
      {
        id: 'adtq4',
        question:
          "Which disease is characterized by gold or rust-colored dust on the fish's body?",
        options: ['Fin Rot', 'Velvet Disease', 'Dropsy', 'Columnaris'],
        answer: 'Velvet Disease',
      },
      {
        id: 'adtq5',
        question:
          'What is a common treatment for Velvet Disease in aquarium fish?',
        options: [
          'Antibiotics',
          'Anti-parasitic medication and dimming the lights',
          'Adding salt to the water',
          'Increasing water temperature',
        ],
        answer: 'Anti-parasitic medication and dimming the lights',
      },
      {
        id: 'adtq6',
        question:
          "Which disease causes a fish's scales to protrude, giving it a pinecone-like appearance?",
        options: ['Ich', 'Velvet Disease', 'Dropsy', 'Fin Rot'],
        answer: 'Dropsy',
      },
      {
        id: 'adtq7',
        question:
          'What is the primary cause of Hole-in-the-Head Disease in fish?',
        options: [
          'Poor water quality and nutritional deficiencies',
          'Bacterial infection',
          'Parasitic infection',
          'Viral infection',
        ],
        answer: 'Poor water quality and nutritional deficiencies',
      },
      {
        id: 'adtq8',
        question:
          'Which of the following is a common symptom of Swim Bladder Disorder in fish?',
        options: [
          'Fish floating upside down or sideways',
          'White spots on fins',
          'Gold or rust-colored dust on the body',
          'Loss of appetite',
        ],
        answer: 'Fish floating upside down or sideways',
      },
      {
        id: 'adtq9',
        question:
          'What is the recommended treatment for bacterial infections like Columnaris in aquarium fish?',
        options: [
          'Antibiotics',
          'Increasing water temperature',
          'Adding salt to the water',
          'Anti-parasitic medication',
        ],
        answer: 'Antibiotics',
      },
      {
        id: 'adtq10',
        question:
          'What preventive measure can help reduce the risk of disease outbreaks in aquariums?',
        options: [
          'Feeding fish more food',
          'Quarantining new fish before adding them to the main tank',
          'Keeping the lights on 24/7',
          'Using natural, untreated water sources',
        ],
        answer: 'Quarantining new fish before adding them to the main tank',
      },
    ],
  },
  {
    accessScore: '64',
    levelScore: '0',
    description:
      'Questions about well-known public aquariums around the world and their notable exhibits.',
    subject: 'Famous Aquariums',
    isOpen: true,
    id: 'fa1',
    levelQuestions: [
      {
        id: 'faq1',
        question:
          'Which aquarium is known for having the largest single aquarium tank in the world?',
        options: [
          'Shedd Aquarium',
          'Monterey Bay Aquarium',
          'Georgia Aquarium',
          'Okinawa Churaumi Aquarium',
        ],
        answer: 'Georgia Aquarium',
      },
      {
        id: 'faq2',
        question: 'In which city is the Monterey Bay Aquarium located?',
        options: ['San Francisco', 'Monterey', 'Los Angeles', 'San Diego'],
        answer: 'Monterey',
      },
      {
        id: 'faq3',
        question: 'Which famous aquarium is home to the Whale Shark exhibit?',
        options: [
          'Georgia Aquarium',
          'Shedd Aquarium',
          "Ripley's Aquarium of Canada",
          'Sydney Sea Life Aquarium',
        ],
        answer: 'Georgia Aquarium',
      },
      {
        id: 'faq4',
        question:
          'The S.E.A. Aquarium, known for its diverse marine life, is located in which country?',
        options: ['Japan', 'Australia', 'United States', 'Singapore'],
        answer: 'Singapore',
      },
      {
        id: 'faq5',
        question:
          'Which aquarium is known for its impressive Kelp Forest exhibit?',
        options: [
          'Monterey Bay Aquarium',
          'Vancouver Aquarium',
          'National Aquarium',
          'New England Aquarium',
        ],
        answer: 'Monterey Bay Aquarium',
      },
      {
        id: 'faq6',
        question:
          'What is the main attraction of the Dubai Aquarium and Underwater Zoo?',
        options: [
          'Dolphin shows',
          'Shark feeding',
          'The 10-million-liter tank',
          'Penguin encounters',
        ],
        answer: 'The 10-million-liter tank',
      },
      {
        id: 'faq7',
        question:
          'In which aquarium can you find the famous Ocean Voyager exhibit?',
        options: [
          'Okinawa Churaumi Aquarium',
          'Shedd Aquarium',
          'Monterey Bay Aquarium',
          'Georgia Aquarium',
        ],
        answer: 'Georgia Aquarium',
      },
      {
        id: 'faq8',
        question:
          "Which city is home to the L'Oceanografic, the largest aquarium in Europe?",
        options: ['Berlin', 'Valencia', 'Paris', 'Rome'],
        answer: 'Valencia',
      },
      {
        id: 'faq9',
        question:
          'The Two Oceans Aquarium is located at the meeting point of the Atlantic and Indian Oceans in which country?',
        options: ['South Africa', 'India', 'Brazil', 'Australia'],
        answer: 'South Africa',
      },
      {
        id: 'faq10',
        question:
          "Which famous aquarium features the Coral Triangle Exhibit, showcasing the biodiversity of Southeast Asia's coral reefs?",
        options: [
          'Vancouver Aquarium',
          "Ripley's Aquarium of Canada",
          'S.E.A. Aquarium',
          'Sydney Sea Life Aquarium',
        ],
        answer: 'Sydney Sea Life Aquarium',
      },
    ],
  },
];
