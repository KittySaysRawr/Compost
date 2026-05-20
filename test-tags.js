const fs = require('fs');
const html = fs.readFileSync('script.js', 'utf8');
const itemsMatch = html.match(/const ITEMS = \[([\s\S]*?)\];/);
if (!itemsMatch) { console.log('Items not found'); process.exit(1); }
eval('var ITEMS = [' + itemsMatch[1] + '];');

const tagDefinitions = [
      { id: 'vegetarian', label: 'Vegetable', color: '#166534', bg: '#dcfce7', keywords: ['lettuce', 'spinach', 'kale', 'cabbage', 'broccoli', 'cauliflower', 'brussels', 'asparagus', 'celery', 'carrot', 'parsnip', 'radish', 'turnip', 'beet', 'potato', 'onion', 'garlic', 'leek', 'squash', 'zucchini', 'cucumber', 'pumpkin', 'corn', 'pea', 'bean', 'pepper', 'tomato', 'eggplant', 'chard', 'collard', 'artichoke', 'fennel', 'shallot', 'scallion', 'endive', 'watercress', 'arugula', 'mustard greens', 'microgreens', 'vegetable', 'veg', 'veggie', 'okra', 'bok choy', 'kohlrabi', 'soybean', 'edamame', 'lentil', 'vetch', 'gourd', 'purslane', 'pigweed', 'nettle', 'alfalfa', 'comfrey', 'escarole', 'frisee', 'radicchio', 'cress'] },
      { id: 'fruit', label: 'Fruit', color: '#831843', bg: '#fce7f3', keywords: ['apple', 'banana', 'orange', 'lemon', 'lime', 'fruit', 'peel', 'core', 'melon', 'berry', 'citrus', 'peach', 'plum', 'apricot', 'cherry', 'strawberry', 'raspberry', 'blueberry', 'blackberry', 'cranberry', 'grape', 'kiwi', 'mango', 'papaya', 'watermelon', 'cantaloupe', 'fig', 'date', 'pomegranate', 'persimmon', 'lychee', 'dragonfruit', 'passionfruit', 'avocado', 'honeydew'] },
      { id: 'herb_spice', label: 'Herbs & Spices', color: '#14532d', bg: '#dcfce7', keywords: ['herb', 'basil', 'cilantro', 'parsley', 'dill', 'mint', 'sage', 'rosemary', 'thyme', 'oregano', 'marjoram', 'tarragon', 'spice'] },
      { id: 'grain_carb', label: 'Grains & Pasta', color: '#854d0e', bg: '#fef3c7', keywords: ['pasta', 'rice', 'bread', 'oat', 'oatmeal', 'cornmeal', 'couscous', 'bulgur', 'millet', 'farro', 'barley', 'tortilla', 'bagel', 'pancake', 'pizza', 'pretzel', 'pita', 'matzo', 'cracker', 'wheatgrass', 'wheat bran', 'grain', 'flour', 'dough', 'cereal', 'popcorn'] },
      { id: 'nut_seed', label: 'Nuts, Seeds & Pits', color: '#78350f', bg: '#ffedd5', keywords: ['nut', 'seed', 'pit', 'shell', 'acorn', 'walnut', 'peanut', 'pistachio', 'pecan', 'almond', 'hazelnut', 'macadamia', 'coconut', 'cocoa'] },
      { id: 'coffee_tea', label: 'Coffee & Tea', color: '#451a03', bg: '#ffedd5', keywords: ['coffee', 'tea'] },
      { id: 'fungi', label: 'Fungi / Mushroom', color: '#374151', bg: '#f3f4f6', keywords: ['mushroom', 'yeast', 'agar'] },
      { id: 'marine', label: 'Seaweed / Algae', color: '#065f46', bg: '#d1fae5', keywords: ['seaweed', 'kelp', 'algae', 'nori'] },
      { id: 'fats_oils', label: 'Fats & Oils', color: '#854d0e', bg: '#fef08a', keywords: ['oil', 'grease', 'fat', 'lard'] },
      { id: 'meat', label: 'Meat/Fish', color: '#7f1d1d', bg: '#fee2e2', keywords: ['meat', 'beef', 'pork', 'chicken', 'fish', 'lamb', 'steak', 'ribs', 'turkey', 'sausage', 'ham', 'deli', 'bacon', 'venison', 'poultry', 'seafood', 'shrimp', 'crab'] },
      { id: 'bone', label: 'Bones', color: '#78350f', bg: '#fef3c7', keywords: ['bone', 'bones', 'carcass'] },
      { id: 'dairy', label: 'Dairy', color: '#1e3a8a', bg: '#dbeafe', keywords: ['milk', 'cheese', 'yogurt', 'butter', 'dairy', 'whey'] },
      { id: 'egg', label: 'Eggs', color: '#854d0e', bg: '#fef08a', keywords: ['egg', 'eggshell'] },
      { id: 'paper', label: 'Paper/Cardboard', color: '#374151', bg: '#f3f4f6', keywords: ['paper', 'cardboard', 'box', 'envelope', 'magazine', 'receipt', 'napkin', 'tissue', 'tp', 'carton'] },
      { id: 'wood', label: 'Wood & Bark', color: '#451a03', bg: '#fef08a', keywords: ['wood', 'sawdust', 'chip', 'twig', 'branch', 'briquette', 'cork', 'bamboo', 'particle board'] },
      { id: 'soil', label: 'Soil & Compost', color: '#3f2c06', bg: '#d6c6b3', keywords: ['soil', 'peat moss', 'coir', 'bark', 'mulch', 'ash', 'coal', 'charcoal', 'dirt'] },
      { id: 'natural_fibre', label: 'Natural Fibres', color: '#0f766e', bg: '#ccfbf1', keywords: ['cotton', 'wool', 'linen', 'silk', 'burlap', 'jute', 'hemp', 'thread', 'textile', 'loofah', 'fabric'] },
      { id: 'animal_product', label: 'Animal Products', color: '#78350f', bg: '#fef3c7', keywords: ['hair', 'fur', 'feather', 'nail', 'gelatin', 'leather'] },
      { id: 'plastic', label: 'Plastic', color: '#831843', bg: '#fdf2f8', keywords: ['plastic', 'synthetic', 'poly', 'nylon', 'spandex', 'rubber', 'latex', 'styrofoam', 'pvc', 'vinyl'] },
      { id: 'metal', label: 'Metal', color: '#334155', bg: '#e2e8f0', keywords: ['metal', 'aluminium', 'foil', 'tin', 'wire', 'copper', 'steel', 'iron', 'brass'] },
      { id: 'glass', label: 'Glass', color: '#0c4a6e', bg: '#e0f2fe', keywords: ['glass', 'ceramic', 'mirror', 'bulb'] },
      { id: 'chemical', label: 'Chemical/Toxic', color: '#7f1d1d', bg: '#fee2e2', keywords: ['chemical', 'pesticide', 'herbicide', 'fungicide', 'toxic', 'paint', 'solvent', 'bleach', 'ammonia', 'cleaner', 'wax', 'waxy', 'polish', 'poison', 'motor oil', 'antifreeze', 'brake fluid', 'aerosol', 'kerosene', 'fuel', 'diesel', 'lighter fluid', 'dryer lint', 'wipe', 'medicine', 'drug', 'cigar', 'snuff', 'tobacco', 'vape', 'nicotine', 'antiseptic', 'disinfectant', 'paraffin'] },
      { id: 'yard_waste', label: 'Yard Waste', color: '#14532d', bg: '#ecfccb', keywords: ['grass', 'weed', 'leaf', 'leaves', 'pine', 'straw', 'hay', 'plant', 'flower', 'clipping', 'garden', 'clover'] },
      { id: 'animal_waste', label: 'Animal/Human Waste', color: '#451a03', bg: '#fef3c7', keywords: ['poop', 'waste', 'litter', 'feces', 'manure', 'urine'] },
      { id: 'building_material', label: 'Building Materials', color: '#4b5563', bg: '#e5e7eb', keywords: ['drywall', 'insulation', 'asbestos', 'grout', 'plaster', 'spackle', 'cement', 'epoxy', 'super glue', 'caulk', 'putty', 'floral foam', 'rust converter'] },
      { id: 'pest', label: 'Pests / Bugs', color: '#581c87', bg: '#f3e8ff', keywords: ['bug', 'insect', 'flea', 'roach', 'cockroach', 'termite', 'rat', 'mouse', 'tick', 'wasp'] },
      { id: 'misc', label: 'Miscellaneous', color: '#1f2937', bg: '#e5e7eb', keywords: ['beer', 'wine', 'alcohol', 'jello', 'tofu', 'soy', 'hops', 'vacuum bag', 'rock', 'stone', 'sand', 'dust', 'glitter', 'silica', 'graphite', 'candle', 'matches'] }
];

let untagged = [];
ITEMS.forEach(item => {
  let categoryChips = [];
  const name = (item.name || "").toLowerCase();
  const note = (item.note || "").toLowerCase();
  
  tagDefinitions.forEach(tagDef => {
    if (tagDef.keywords.some(kw => {
      // Allow plural matches via s?, maybe es? for some, but keyword is good enough.
      const regex = new RegExp('\\b' + kw + 'e?s?\\b', 'i');
      return regex.test(name) || regex.test(note);
    })) {
      categoryChips.push(tagDef.id);
    }
  });

  if (categoryChips.length === 0) {
    if (name.includes("cork")) categoryChips.push("wood");
    if (name.includes("animal")) categoryChips.push("meat"); // "Dead animals"
    if (name.includes("gas") || name.includes("oil") || name.includes("coolant")) categoryChips.push("chemical");
  }

  if (categoryChips.length === 0) {
    untagged.push(item.name);
  }
});
console.log(JSON.stringify(untagged, null, 2));
