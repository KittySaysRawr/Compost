
/* --- Loading Screen Logic --- */
const loaderMessages = [
  "Loading compost data...",
  "Arranging greens and browns...",
  "Waking up the microbes...",
  "Preparing your bin..."
];
let messageIndex = 0;
const loaderInterval = setInterval(() => {
  messageIndex = (messageIndex + 1) % loaderMessages.length;
  const loadingText = document.getElementById('loadingText');
  if (loadingText) loadingText.textContent = loaderMessages[messageIndex];
}, 800);

const hideLoadingScreen = () => {
  setTimeout(() => {
    clearInterval(loaderInterval);
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
      loadingOverlay.classList.add('hidden');
      setTimeout(() => {
        if (loadingOverlay.parentNode) {
          loadingOverlay.parentNode.removeChild(loadingOverlay);
        }
      }, 500);
    }
  }, 2400);
};

if (document.readyState === 'complete') {
  hideLoadingScreen();
} else {
  window.addEventListener('load', hideLoadingScreen);
}

    const ITEMS = [
      // === GREENS (Nitrogen-Rich) ===
      { name: "Apple cores & peels", category: "Green", note: "Common kitchen scrap; decomposes quickly." },
      { name: "Banana peels", category: "Green", note: "Rich in potassium; chop up to speed up breakdown." },
      { name: "Orange rinds", category: "Green", note: "Acidic; used in moderation, they are fine." },
      { name: "Lemon & Lime halves", category: "Green", note: "Citrus is fine in most piles; avoids if vermicomposting." },
      { name: "Grapefruit skins", category: "Green", note: "Large citrus skins should be chopped." },
      { name: "Pear cores", category: "Green", note: "Quick to rot." },
      { name: "Peach pits", category: "Green", note: "Very slow to decompose but purely organic." },
      { name: "Plum pits", category: "Green", note: "Hard pits add structure; slow breakdown." },
      { name: "Apricot pits", category: "Green", note: "Similar to plum pits." },
      { name: "Cherry pits", category: "Green", note: "Small and easy to ignore." },
      { name: "Strawberry tops", category: "Green", note: "Green leafy tops are great." },
      { name: "Raspberry mush", category: "Green", note: "Old berries rot very fast." },
      { name: "Blueberry scraps", category: "Green", note: "Old or mouldy berries are fine." },
      { name: "Blackberry stems (Green)", category: "Green", note: "Fresh green stems only." },
      { name: "Cranberry sauce (plain)", category: "Green", note: "Avoid if it has lots of sugar/preservatives." },
      { name: "Grape stems", category: "Green", note: "Fine to add; slightly woody." },
      { name: "Kiwi skins", category: "Green", note: "Fuzzy skins are no problem." },
      { name: "Mango skins & pits", category: "Green", note: "Large pits take a long time." },
      { name: "Papaya seeds & skin", category: "Green", note: "Soft and fast-rotting." },
      { name: "Pineapple cores & skin", category: "Green", note: "Tough; chop well." },
      { name: "Watermelon rinds", category: "Green", note: "High water content; chop to avoid slimy mess." },
      { name: "Cantaloupe seeds & rind", category: "Green", note: "Seeds may sprout but are fine." },
      { name: "Honeydew melon scraps", category: "Green", note: "High moisture." },
      { name: "Fig scraps", category: "Green", note: "Sugary and fast-rotting." },
      { name: "Date pits", category: "Green", note: "Very hard; will last a while." },
      { name: "Pomegranate skins", category: "Green", note: "Leathery; chop up." },
      { name: "Persimmon tops", category: "Green", note: "Soft leafy tops." },
      { name: "Guava scraps", category: "Green", note: "Tropical fruit waste." },
      { name: "Lychee skins", category: "Green", note: "Thin and easy." },
      { name: "Starfruit edges", category: "Green", note: "Fleshy fruit." },
      { name: "Dragonfruit skin", category: "Green", note: "Soft and colourful." },
      { name: "Passionfruit shells", category: "Green", note: "May take some time to soften." },
      { name: "Avocado skins", category: "Green", note: "Leathery; don't break down quickly but are harmless." },
      { name: "Avocado pits", category: "Green", note: "Slowest fruit pit; chop if possible." },
      { name: "Tomato tops & cores", category: "Green", note: "High moisture; seeds may survive." },
      { name: "Cucumber ends", category: "Green", note: "Very fast decomposition." },
      { name: "Bell pepper seeds & stems", category: "Green", note: "Basic kitchen green." },
      { name: "Hot pepper scraps", category: "Green", note: "Fine for pile; keep away from eyes when handling." },
      { name: "Squash guts & seeds", category: "Green", note: "Pumpkin, butternut, etc." },
      { name: "Zucchini ends", category: "Green", note: "Fleshy and moist." },
      { name: "Eggplant scraps", category: "Green", note: "Soft sponges for moisture." },
      { name: "Okra tips", category: "Green", note: "Slimy but good nitrogen." },
      { name: "Lettuce leaves", category: "Green", note: "Wilted salad is perfect." },
      { name: "Spinach stems", category: "Green", note: "Leafy greens are gold." },
      { name: "Kale ribs", category: "Green", note: "Tougher than leaves but still Green." },
      { name: "Chard stalks", category: "Green", note: "colourful and nitrogen-rich." },
      { name: "Collard greens", category: "Green", note: "Wilted or old leaves." },
      { name: "Bok choy ends", category: "Green", note: "Crunchy green stems." },
      { name: "Cabbage cores", category: "Green", note: "Dense; chop to help microbes." },
      { name: "Broccoli stems", category: "Green", note: "Shave or chop to speed up." },
      { name: "Cauliflower leaves", category: "Green", note: "Often discarded; great for compost." },
      { name: "Brussels sprouts", category: "Green", note: "Old or outer leaves." },
      { name: "Asparagus ends", category: "Green", note: "Woody but Green." },
      { name: "Celery hearts", category: "Green", note: "Fibrous; chop well." },
      { name: "Carrot tops", category: "Green", note: "The green leafy part is excellent." },
      { name: "Parsnip scraps", category: "Green", note: "Root vegetable waste." },
      { name: "Radish tops", category: "Green", note: "Leafy and green." },
      { name: "Turnip skins", category: "Green", note: "Peelings from roots." },
      { name: "Beet greens", category: "Green", note: "High in nutrients." },
      { name: "Potato peelings", category: "Green", note: "Avoid if they have 'eyes' starting to sprout or blight." },
      { name: "Sweet potato scraps", category: "Green", note: "Fleshy root waste." },
      { name: "Onion skins (Inner)", category: "Green", note: "Fleshy inner parts are Green; Outer papery skins are Brown." },
      { name: "Garlic cloves (Old)", category: "Green", note: "Smelly but fine." },
      { name: "Shallot ends", category: "Green", note: "Small onion-like scraps." },
      { name: "Leek greens", category: "Green", note: "The dark green tops are often composted." },
      { name: "Scallion roots", category: "Green", note: "Small and fast." },
      { name: "Pea pods", category: "Green", note: "Empty shells are great nitrogen." },
      { name: "Bean scraps", category: "Green", note: "Green beans, snap peas, etc." },
      { name: "Corn husks", category: "Green", note: "Green husks are Green; dried are Brown." },
      { name: "Artichoke leaves", category: "Green", note: "Very tough; chop aggressively." },
      { name: "Fennel fronds", category: "Green", note: "Aromatic green." },
      { name: "Rhubarb leaves", category: "Green", note: "Safe for compost; microbes don't mind the oxalic acid." },
      { name: "Radicchio leaves", category: "Green", note: "Purple/green salad waste." },
      { name: "Endive scraps", category: "Green", note: "Leafy bitter greens." },
      { name: "Watercress stems", category: "Green", note: "Aquatic green." },
      { name: "Arugula", category: "Green", note: "Leftover salad." },
      { name: "Mustard greens", category: "Green", note: "Spicy greens." },
      { name: "Microgreens (Old)", category: "Green", note: "Tiny and fast-rotting." },
      { name: "Grass clippings (Fresh)", category: "Green", note: "High nitrogen; mix with browns to avoid stench." },
      { name: "Weeds (No seeds)", category: "Green", note: "Dandelions, chickweed, etc. before they flower." },
      { name: "Green leaves (Fresh)", category: "Green", note: "From garden pruning." },
      { name: "Flower petals", category: "Green", note: "Roses, lilies, etc." },
      { name: "Wilted bouquets", category: "Green", note: "Remove any wire or floral foam." },
      { name: "Herb scraps", category: "Green", note: "Basil, cilantro, parsley stems." },
      { name: "Seaweed (Rinsed)", category: "Green", note: "Rinse salt off first." },
      { name: "Kelp", category: "Green", note: "Ocean nitrogen source." },
      { name: "Algae", category: "Green", note: "From birdbaths or ponds." },
      { name: "Moss (Green)", category: "Green", note: "Garden moss." },
      { name: "Clover (Fresh)", category: "Green", note: "Nitrogen fixer." },
      { name: "Alfalfa meal", category: "Green", note: "Used as a compost starter." },
      { name: "Spent coffee grounds", category: "Green", note: "Nitrogen-rich despite the colour." },
      { name: "Tea leaves", category: "Green", note: "Loose leaf is best." },
      { name: "Tea bags (Natural fibre)", category: "Green", note: "Check for staples and plastic content." },
      { name: "Human hair", category: "Green", note: "Slow to break down but high nitrogen." },
      { name: "Pet fur", category: "Green", note: "From dogs/cats (untreated with flea meds)." },
      { name: "Chicken manure", category: "Green", note: "Very 'hot'; must be balanced with browns." },
      { name: "Rabbit manure", category: "Green", note: "Can go directly in or composted." },
      { name: "Cow manure", category: "Green", note: "Standard farm green." },
      { name: "Horse manure", category: "Green", note: "Great bulk nitrogen." },
      { name: "Sheep manure", category: "Green", note: "Small pellets, high nitrogen." },
      { name: "Goat manure", category: "Green", note: "Similar to sheep manure." },
      { name: "Feathers (Natural)", category: "Green", note: "From old pillows or poultry." },
      { name: "Cooked pasta (Plain)", category: "Green", note: "No sauce, oils, or salt." },
      { name: "Cooked rice (Plain)", category: "Green", note: "Small amounts to avoid attracting pests." },
      { name: "Old bread (No seeds)", category: "Green", note: "Bury deep if adding." },
      { name: "Tofu scraps", category: "Green", note: "Plant protein is nitrogen-rich." },
      { name: "Tempeh bits", category: "Green", note: "Fermented soy waste." },
      { name: "Edamame shells", category: "Green", note: "Soybean pods." },
      { name: "Lentil scraps", category: "Green", note: "Cooked plain pulses." },
      { name: "Chickpea waste", category: "Green", note: "Hummus-related scraps (no oils)." },
      { name: "Pumpkin guts", category: "Green", note: "Halloween classic." },
      { name: "Gourd scraps", category: "Green", note: "Decorative gourds when they rot." },
      { name: "Hops (Spent)", category: "Green", note: "From home brewing." },
      { name: "Vetch", category: "Green", note: "Cover crop green." },
      { name: "Buckwheat (Green)", category: "Green", note: "Garden cover crop." },
      { name: "Urine (Diluted)", category: "Green", note: "High nitrogen; use 1:10 ratio with water or add to browns." },
      { name: "Liquid from canned veggies", category: "Green", note: "Only if unsalted and no additives." },
      { name: "Fruit juice (Old)", category: "Green", note: "Dilute well; attracts bees/flies." },
      { name: "Soy milk (Expired)", category: "Green", note: "Small amounts only." },
      { name: "Beer (Flat)", category: "Green", note: "Nourishes bacteria; use in moderation." },
      { name: "Wine (Leftover)", category: "Green", note: "Small amounts are fine." },
      { name: "Stale crackers", category: "Green", note: "Basic grain waste." },
      { name: "Oatmeal (Plain/Spent)", category: "Green", note: "Leftover breakfast." },
      { name: "Cornmeal", category: "Green", note: "Can attract pests if not buried." },
      { name: "Brussels sprouts stems", category: "Green", note: "Chop into small pieces." },
      { name: "Grape skins", category: "Green", note: "Leftover from juice or snacking." },
      { name: "Watermelon seeds", category: "Green", note: "Tough but organic." },
      { name: "Cantaloupe seeds", category: "Green", note: "Often found in 'guts'." },
      { name: "Honeydew seeds", category: "Green", note: "High moisture." },
      { name: "Squash seeds", category: "Green", note: "Pumpkin, acorn, etc." },
      { name: "Cucumber peels", category: "Green", note: "Fastest rotting green." },
      { name: "Carrot skins", category: "Green", note: "Peeled for salads." },
      { name: "Parsnip peelings", category: "Green", note: "Root waste." },
      { name: "Beet skins", category: "Green", note: "Stains everything but good nitrogen." },
      { name: "Radish skins", category: "Green", note: "Peppery and fast." },
      { name: "Onion hearts", category: "Green", note: "Fleshy inner onion." },
      { name: "Garlic skins (Inner)", category: "Green", note: "Fleshy inner part." },
      { name: "Shallot skins (Inner)", category: "Green", note: "Small and moist." },
      { name: "Leek hearts", category: "Green", note: "Soft inner leek." },
      { name: "Asparagus tips", category: "Green", note: "Soft and fast." },
      { name: "Broccoli florets (Old)", category: "Green", note: "Yellowing broccoli." },
      { name: "Cauliflower florets (Old)", category: "Green", note: "Browning cauliflower." },
      { name: "Cabbage leaves (Outer)", category: "Green", note: "Usually the dirtiest leaves." },
      { name: "Spinach (Wilted)", category: "Green", note: "Salad bag liquid if not careful." },
      { name: "Lettuce (Slimy)", category: "Green", note: "Old salad." },
      { name: "Kale (Yellowed)", category: "Green", note: "Nitrogen rich." },
      { name: "Chard (Wilted)", category: "Green", note: "Stalks are fine too." },
      { name: "Collards (Old)", category: "Green", note: "Tough but nitrogenous." },
      { name: "Bok Choy (Soft)", category: "Green", note: "High water." },
      { name: "Escarole scraps", category: "Green", note: "Leafy green." },
      { name: "Endive (Bitter)", category: "Green", note: "Fine to add." },
      { name: "Frisee scraps", category: "Green", note: "Light and leafy." },
      { name: "Radicchio (Old)", category: "Green", note: "Purple nitrogen." },
      { name: "Arugula (Slimy)", category: "Green", note: "Aromatic green." },
      { name: "Watercress (Wilted)", category: "Green", note: "Aquatic nitrogen." },
      { name: "Cress (Old)", category: "Green", note: "Tiny and fast." },
      { name: "Sprouts (Expired)", category: "Green", note: "Alfalfa, bean, etc." },
      { name: "Microgreens (Spent)", category: "Green", note: "Quickest decomposition." },
      { name: "Basil (Wilted)", category: "Green", note: "Fragrant nitrogen." },
      { name: "Cilantro (Slimy)", category: "Green", note: "Stems are gold." },
      { name: "Parsley (Wilted)", category: "Green", note: "Common kitchen green." },
      { name: "Dill (Old)", category: "Green", note: "Light and feathery." },
      { name: "Mint (Fresh)", category: "Green", note: "Can be invasive if it has roots." },
      { name: "Sage (Wilted)", category: "Green", note: "Fuzzy nitrogen." },
      { name: "Rosemary (Green)", category: "Green", note: "Woody green." },
      { name: "Thyme (Fresh)", category: "Green", note: "Small and fast." },
      { name: "Oregano (Wilted)", category: "Green", note: "Aromatic green." },
      { name: "Marjoram (Old)", category: "Green", note: "Similar to oregano." },
      { name: "Tarragon (Wilted)", category: "Green", note: "Licorice-like nitrogen." },
      { name: "Chives (Old)", category: "Green", note: "Onion-like nitrogen." },
      { name: "Bay leaves (Fresh)", category: "Green", note: "Very slow breakdown." },
      { name: "Lemon balm (Fresh)", category: "Green", note: "Fragrant nitrogen." },
      { name: "Lavender flowers", category: "Green", note: "Great for scent." },
      { name: "Calendula flowers", category: "Green", note: "Vibrant nitrogen." },
      { name: "Nasturtium leaves", category: "Green", note: "Pungent and green." },
      { name: "Dandelion leaves (Fresh)", category: "Green", note: "No seeds!" },
      { name: "Chickweed (Fresh)", category: "Green", note: "Common garden green." },
      { name: "Plantain leaves (Fresh)", category: "Green", note: "Broadleaf weed." },
      { name: "Purslane (Fresh)", category: "Green", note: "Succulent green." },
      { name: "Lamb's quarters", category: "Green", note: "Nutritionally dense weeds." },
      { name: "Pigweed (Fresh)", category: "Green", note: "Amaranth family." },
      { name: "Nettle (Fresh)", category: "Green", note: "Wear gloves! High nitrogen." },
      { name: "Comfrey leaves", category: "Green", note: "Superfood for compost." },
      { name: "Spent mushroom substrate", category: "Green", note: "Rich in mycelium and nitrogen." },
      { name: "Mushroom scraps", category: "Green", note: "Quick to rot." },
      { name: "Turnip greens", category: "Green", note: "Garden fresh green." },
      { name: "Kohlrabi greens", category: "Green", note: "Tough but Green." },
      { name: "Mustard seeds (Old)", category: "Green", note: "Small and fast." },
      { name: "Sesame seeds (Expired)", category: "Green", note: "Oily but okay in small amounts." },
      { name: "Pumpkin seeds (Raw)", category: "Green", note: "Might sprout; chop if worried." },
      { name: "Sunflower seeds (Raw)", category: "Green", note: "Rich in fats/nitrogen." },
      { name: "Poppy seeds (Old)", category: "Green", note: "Micro-nitrogen." },
      { name: "Chia seeds (Expired)", category: "Green", note: "Gelatinous when wet." },
      { name: "Flax seeds (Old)", category: "Green", note: "Nutrient dense." },
      { name: "Hemp seeds (Spent)", category: "Green", note: "High protein nitrogen." },
      { name: "Quinoa (Cooked plain)", category: "Green", note: "Grain waste." },
      { name: "Couscous (Plain leftover)", category: "Green", note: "Wheat based nitrogen." },
      { name: "Bulgur (Leftover)", category: "Green", note: "Grain nitrogen." },
      { name: "Millet (Old)", category: "Green", note: "Bird seed green." },
      { name: "Farro (Cooked plain)", category: "Green", note: "Chewy nitrogen." },
      { name: "Barley (Spent)", category: "Green", note: "Brewing byproduct." },
      { name: "Rye (Cooked plain)", category: "Green", note: "Heavy grain waste." },
      { name: "Oats (Soggy)", category: "Green", note: "Leftover oatmeal." },
      { name: "Corn kernels (Expired)", category: "Green", note: "High starch." },
      { name: "Popcorn (Unpopped)", category: "Green", note: "Hard nitrogen." },
      { name: "Popcorn (Popped/Plain)", category: "Green", note: "Airy carbon/nitrogen mix." },
      { name: "Taco shells (Plain)", category: "Green", note: "Corn based." },
      { name: "Tortillas (Corn/Expired)", category: "Green", note: "Soft nitrogen." },
      { name: "Tortillas (Flour/Expired)", category: "Green", note: "Wheat nitrogen." },
      { name: "Bagel bits (Plain/mouldy)", category: "Green", note: "No toppings." },
      { name: "Muffin crumbs (Plain)", category: "Green", note: "Basic flour waste." },
      { name: "Pancake scraps (Plain)", category: "Green", note: "Egg/Flour nitrogen." },
      { name: "Waffle bits (Plain)", category: "Green", note: "Breakfast waste." },
      { name: "Pizza crust (Clean)", category: "Green", note: "Baked dough." },
      { name: "Pretzel bits (Unsalted)", category: "Green", note: "Baked wheat." },
      { name: "Pita bread (Old)", category: "Green", note: "Pocket bread nitrogen." },
      { name: "Naan (Plain/Old)", category: "Green", note: "Yogurt/Flour nitrogen." },
      { name: "Matzo (Expired)", category: "Green", note: "Unleavened nitrogen." },
      { name: "Crackers (Plain/Stale)", category: "Green", note: "Salty, rinse if possible." },
      { name: "Rice cakes (Plain)", category: "Green", note: "Airy rice waste." },
      { name: "Seaweed snacks (Plain)", category: "Green", note: "Thin nitrogen sheets." },
      { name: "Nori scraps", category: "Green", note: "Sushi grade nitrogen." },
      { name: "Agar agar (Spent)", category: "Green", note: "Gelatinous nitrogen." },
      { name: "Jello (Plain/Expired)", category: "Green", note: "Animal protein nitrogen." },
      { name: "Gelatin (Unflavored)", category: "Green", note: "Pure nitrogen." },
      { name: "Pudding (Plain/Expired)", category: "Green", note: "Dairy/Starch nitrogen." },
      { name: "Custard bits (Plain)", category: "Green", note: "Egg nitrogen." },
      { name: "Tofu dregs (Okara)", category: "Green", note: "Soy byproduct." },
      { name: "Soy pulp", category: "Green", note: "High protein green." },
      { name: "Almond pulp (Spent)", category: "Green", note: "From nut milk." },
      { name: "Nut milk residues", category: "Green", note: "Dilute if adding." },
      { name: "Alfalfa sprouts (Expired)", category: "Green", note: "Fast rotting nitrogen." },
      { name: "Bean sprouts (Old)", category: "Green", note: "Common kitchen green." },
      { name: "Bamboo shoots (Fresh)", category: "Green", note: "Young bamboo is Green." },
      { name: "Bok choy cores", category: "Green", note: "Dense nitrogen." },
      { name: "Clover clippings (Fresh)", category: "Green", note: "Nitrogen fixing green." },
      { name: "Comfrey (Chopped)", category: "Green", note: "Compost supercharger." },
      { name: "Dandelion flowers (No seeds)", category: "Green", note: "Bright nitrogen." },
      { name: "Duck manure", category: "Green", note: "Hot manure; use with browns." },
      { name: "Honeydew skins", category: "Green", note: "Melon waste." },
      { name: "Kelp meal", category: "Green", note: "Ocean mineral green." },
      { name: "Lima bean pods", category: "Green", note: "Shelling waste." },
      { name: "Mustard greens (Wilted)", category: "Green", note: "Spicy nitrogen." },
      { name: "Okra trimmings", category: "Green", note: "Slimy but good." },
      { name: "Seaweed (Washed)", category: "Green", note: "Rinse salt off first." },
      { name: "Soybeans (Plain)", category: "Green", note: "Protein rich nitrogen." },
      { name: "Valerian root", category: "Green", note: "Garden herb." },
      { name: "Winter squash peels", category: "Green", note: "Acorn, Butternut, etc." },
      { name: "Wheatgrass (Spent)", category: "Green", note: "After juicing." },
      { name: "Yeast (Expired)", category: "Green", note: "Active microbes love it." },
      { name: "Yucca peels", category: "Green", note: "Tough green." },
      
      // === BROWNS (Carbon-Rich) ===
      { name: "Dry leaves (Maple)", category: "Brown", note: "Classic carbon." },
      { name: "Dry leaves (Oak)", category: "Brown", note: "Thicker leaves; shred for faster results." },
      { name: "Dry leaves (Ash)", category: "Brown", note: "Good carbon source." },
      { name: "Dry leaves (Birch)", category: "Brown", note: "Quick to crumble." },
      { name: "Dry leaves (Beech)", category: "Brown", note: "Waxy but fine." },
      { name: "Dry leaves (Cherry)", category: "Brown", note: "Common garden leaves." },
      { name: "Dry leaves (Elm)", category: "Brown", note: "Autumn staple." },
      { name: "Dry leaves (Poplar)", category: "Brown", note: "Light and easy." },
      { name: "Dry leaves (Cottonwood)", category: "Brown", note: "Large leaves; shred them." },
      { name: "Pine needles (Dried)", category: "Brown", note: "Acidic; use in moderation." },
      { name: "Pine cones", category: "Brown", note: "Very slow; crush them if possible." },
      { name: "Dry grass / Straw", category: "Brown", note: "Great for aeration." },
      { name: "Hay (Seedless)", category: "Brown", note: "Feeding hay can have seeds; bedding is better." },
      { name: "Corn stalks (Dry)", category: "Brown", note: "Chop into bits." },
      { name: "Corn cobs (Dry)", category: "Brown", note: "Chopping is a must for these." },
      { name: "Twigs (Small)", category: "Brown", note: "Pencil sized or smaller." },
      { name: "Wood chips (Untreated)", category: "Brown", note: "Slow to break down; adds air." },
      { name: "Sawdust (Untreated)", category: "Brown", note: "Sprinkle thin layers." },
      { name: "Wood shavings (Pet bedding)", category: "Brown", note: "Ensure it's from untreated wood." },
      { name: "Bark mulch", category: "Brown", note: "Slow carbon." },
      { name: "Bamboo skewers", category: "Brown", note: "Break them up." },
      { name: "Chopsticks (Wooden)", category: "Brown", note: "Untreated wood only." },
      { name: "Cardboard (Corrugated)", category: "Brown", note: "Best brown resource." },
      { name: "Cereal boxes", category: "Brown", note: "Remove plastic inner liners." },
      { name: "Egg cartons (Paper)", category: "Brown", note: "Tear into pieces." },
      { name: "Toilet paper rolls", category: "Brown", note: "Easy to shred by hand." },
      { name: "Paper towel rolls", category: "Brown", note: "Clean cardboard only." },
      { name: "Brown paper bags", category: "Brown", note: "Classic brown material." },
      { name: "Envelopes (No window)", category: "Brown", note: "Plain paper only." },
      { name: "Shredded office paper", category: "Brown", note: "Avoid white bleached or glossy paper if possible." },
      { name: "Newspaper (Black/White)", category: "Brown", note: "Soy inks are safe; avoid colour ads." },
      { name: "Construction paper", category: "Brown", note: "Kid's craft waste." },
      { name: "Tissue paper (Plain)", category: "Brown", note: "Uncoated only." },
      { name: "Crepe paper", category: "Brown", note: "Birthday party waste." },
      { name: "Paper napkins", category: "Brown", note: "As long as they aren't greasy." },
      { name: "Paper towels", category: "Brown", note: "Unless used with cleaners." },
      { name: "Paper plates (Uncoated)", category: "Brown", note: "Plain white paper plates." },
      { name: "Coffee filters", category: "Brown", note: "Paper filters are perfect browns." },
      { name: "Cupcake liners (Paper)", category: "Brown", note: "Unwaxed only." },
      { name: "Pizza boxes (Clean parts)", category: "Brown", note: "Tear off parts with no grease." },
      { name: "Wine corks (Natural)", category: "Brown", note: "Must be real cork, not plastic." },
      { name: "Matchsticks (Used)", category: "Brown", note: "Small wood bits." },
      { name: "Burlap (Jute/Hemp)", category: "Brown", note: "Natural fibres only." },
      { name: "Cotton scraps (100%)", category: "Brown", note: "Cut into small shreds." },
      { name: "Wool scraps (100%)", category: "Brown", note: "Natural wool only." },
      { name: "Linen scraps (100%)", category: "Brown", note: "Ancient flax fibre." },
      { name: "Silk scraps (100%)", category: "Brown", note: "Natural silk thread." },
      { name: "String/Twine (Jute)", category: "Brown", note: "Check for synthetic cores." },
      { name: "Walnut shells (Crushed)", category: "Brown", note: "Slow but carbon-rich." },
      { name: "Peanut shells", category: "Brown", note: "Classic brown." },
      { name: "Pistachio shells", category: "Brown", note: "Wash off salt first." },
      { name: "Sunflower seed shells", category: "Brown", note: "Bird feeder waste." },
      { name: "Pumpkin seed shells", category: "Brown", note: "Dry and crunchy." },
      { name: "Acorns", category: "Brown", note: "Crush them to help microbes." },
      { name: "Pecan shells", category: "Brown", note: "Southern brown staple." },
      { name: "Almond shells", category: "Brown", note: "Hard but organic." },
      { name: "Hazelnut shells", category: "Brown", note: "Very slow breakdown." },
      { name: "Dryer lint (Natural only)", category: "Brown", note: "Do not use if washing synthetics." },
      { name: "Vacuum bag content", category: "Brown", note: "Only if you have natural rugs/dust." },
      { name: "Old potting soil", category: "Brown", note: "Spent soil adds bulk." },
      { name: "Peat moss (Dry)", category: "Brown", note: "Highly absorbent." },
      { name: "Coir (Coconut fibre)", category: "Brown", note: "Great peat alternative." },
      { name: "Abandoned bird nests", category: "Brown", note: "Twigs and mud." },
      { name: "Eggshells (Dried)", category: "Brown", note: "Calcium source; often grouped with browns for structure." },
      { name: "Nut husk (Cocoa)", category: "Brown", note: "Aromatic carbon." },
      { name: "Wheat bran (Old)", category: "Brown", note: "Dry carbon source." },
      { name: "Rice hulls", category: "Brown", note: "Often used in potting mixes." },
      { name: "Peanut butter jars (Lidless paper parts)", category: "Brown", note: "Clean only." },
      { name: "Bird feathers (Down)", category: "Brown", note: "Lightweight nitrogen/carbon mix." },
      { name: "Cotton balls (100% cotton)", category: "Brown", note: "pure natural fibre." },
      { name: "Cotton swabs (Paper stick)", category: "Brown", note: "Eco-friendly bathroom waste." },
      { name: "Cardboard tubes (Inner)", category: "Brown", note: "Foil wrap or paper towels." },
      { name: "Cardboard shippers", category: "Brown", note: "Remove all plastic tape first." },
      { name: "Cardboard spacers", category: "Brown", note: "Product packaging waste." },
      { name: "Paper berry baskets", category: "Brown", note: "Farmer's market waste." },
      { name: "Paper coffee sleeves", category: "Brown", note: "Coffee shop brown." },
      { name: "Paper straws (Used)", category: "Brown", note: "Check for plastic coating." },
      { name: "Paper cupcake liners", category: "Brown", note: "Uncoated ones only." },
      { name: "Paper candy wrappers", category: "Brown", note: "Plain paper only, no foil." },
      { name: "Paper lunch bags", category: "Brown", note: "Classic brown." },
      { name: "Paper grocery bags", category: "Brown", note: "Shred for nesting." },
      { name: "Paper flour bags", category: "Brown", note: "Dust off excess flour." },
      { name: "Paper sugar bags", category: "Brown", note: "Rinse sugar if possible." },
      { name: "Paper mail (No plastic)", category: "No window envelopes." },
      { name: "Paper calendars (Matte)", category: "Brown", note: "Avoid glossy ones." },
      { name: "Paper worksheets (Old)", category: "Brown", note: "School waste." },
      { name: "Paper colouring pages", category: "Brown", note: "Crayon is okay in tiny amounts." },
      { name: "Paper sketchbook pages", category: "Brown", note: "Graphite/charcoal is fine." },
      { name: "Paper notepad pages", category: "Brown", note: "Basic office brown." },
      { name: "Paper sticky notes", category: "Brown", note: "Small glue strip is negligible." },
      { name: "Paper index cards", category: "Brown", note: "Uncoated cardstock." },
      { name: "Paper streamers (Matte)", category: "Brown", note: "Party waste." },
      { name: "Paper tissue (Facial)", category: "Brown", note: "Clean only, no lotions." },
      { name: "Paper toilet tissue", category: "Brown", note: "Clean only." },
      { name: "Paper napkins (Unused/Clean)", category: "Brown", note: "Picnic waste." },
      { name: "Paper tablecloths (Paper)", category: "Brown", note: "Disposable picnic gear." },
      { name: "Paper confetti (Matte)", category: "Brown", note: "Non-metallic only." },
      { name: "Paper book pages (Old)", category: "Brown", note: "Check for safe inks." },
      { name: "Paper ledger pages", category: "Brown", note: "Vintage office brown." },
      { name: "Paper graph paper", category: "Brown", note: "Standard office waste." },
      { name: "Paper sheet music", category: "Brown", note: "Non-glossy." },
      { name: "Paper catalogs (Matte)", category: "Brown", note: "Avoid shiny covers." },
      { name: "Paper telephone books", category: "Brown", note: "The yellow pages are brown!" },
      { name: "Paper menus (Takeout)", category: "Brown", note: "Plain paper." },
      { name: "Paper brochures (Matte)", category: "Brown", note: "Check the ink/coating." },
      { name: "Paper business cards (Matte)", category: "Brown", note: "No plastic laminates." },
      { name: "Paper bookmarks (Matte)", category: "Brown", note: "Plain cardstock." },
      { name: "Paper coasters (Cardboard)", category: "Brown", note: "Clean only." },
      { name: "Paper popcorn bags", category: "Brown", note: "No grease preferred." },
      { name: "Paper peanut bags", category: "Brown", note: "Circus/Stadium brown." },
      { name: "Paper flour dusting", category: "Brown", note: "From baking prep." },
      { name: "Paper tea tags", category: "Brown", note: "Small and fast." },
      { name: "Paper wine labels", category: "Brown", note: "Soaked off bottles." },
      { name: "Paper cigar bands", category: "Brown", note: "Tiny brown scrap." },
      { name: "Paper gum wrappers (Inner)", category: "Brown", note: "Paper part only." },
      { name: "Paper cigarette packs (Inner)", category: "Brown", note: "Plain paper lining." },
      { name: "Paper band-aid boxes", category: "Brown", note: "Empty cardboard." },
      { name: "Paper toothpaste boxes", category: "Brown", note: "Thin cardboard." },
      { name: "Paper medicine boxes", category: "Brown", note: "Pharmaceutical brown." },
      { name: "Paper cereal inserts (Paper)", category: "Brown", note: "If not plastic." },
      { name: "Paper shoe box tissue", category: "Brown", note: "Very thin and fast." },
      { name: "Paper gift wrap (Matte)", category: "Brown", note: "No metallic/glitter." },
      { name: "Paper shredded documents", category: "Brown", note: "Standard security brown." },
      { name: "Paper receipts (Non-thermal)", category: "Brown", note: "Thermal paper has BPA; avoid it." },
      { name: "Paper ledger sheets", category: "Brown", note: "Classic office supply." },
      { name: "Paper architectural plans", category: "Brown", note: "Blueprints vary; check ink." },
      { name: "Paper newspaper (Shredded)", category: "Brown", note: "Adds great surface area." },
      { name: "Paper flyers (Matte)", category: "Brown", note: "Neighborhood brown." },
      { name: "Paper receipts (Thermal - AVOID)", category: "Brown", note: "Warning: Thermal paper contains BPA." },
      { name: "Paper envelopes (Security pattern)", category: "Brown", note: "Patterned brown." },
      { name: "Paper bills (Old)", category: "Brown", note: "Personal brown." },
      { name: "Paper tax forms (Old)", category: "Brown", note: "Federal brown." },
      { name: "Paper junk mail (Shredded)", category: "Brown", note: "Bulk carbon." },
      { name: "Paper colouring books", category: "Brown", note: "Childhood brown." },
      { name: "Paper crossword books", category: "Brown", note: "Puzzle brown." },
      { name: "Paper sudoku pages", category: "Brown", note: "Math brown." },
      { name: "Paper origami scraps", category: "Brown", note: "Folded brown." },
      { name: "Paper paper planes", category: "Brown", note: "Flightless brown." },
      { name: "Paper snowflakes", category: "Brown", note: "Winter brown." },
      { name: "Paper chains", category: "Brown", note: "Party brown." },
      { name: "Paper crowns", category: "Brown", note: "Royal brown." },
      { name: "Paper mats (Restaurant)", category: "Brown", note: "Dining brown." },
      { name: "Paper placemats (Kids)", category: "Brown", note: "Art brown." },
      { name: "Paper bookmarks (Handmade)", category: "Brown", note: "Creative brown." },
      { name: "Paper tags (Clothing)", category: "Brown", note: "Retail brown." },
      { name: "Paper price tags", category: "Brown", note: "Shopping brown." },
      { name: "Paper tea boxes", category: "Brown", note: "Infused brown." },
      { name: "Paper tissue boxes", category: "Brown", note: "Cold season brown." },
      { name: "Paper shoe boxes", category: "Brown", note: "Footwear brown." },
      { name: "Paper gift boxes", category: "Brown", note: "Holiday brown." },
      { name: "Paper jewelry boxes", category: "Brown", note: "Small brown." },
      { name: "Paper shipping labels (Plain)", category: "Brown", note: "Logistics brown." },
      { name: "Paper packing tape (Paper)", category: "Brown", note: "Adhesive brown." },
      { name: "Paper masking tape (Paper)", category: "Brown", note: "Painter's brown." },
      { name: "Paper washi tape (Paper)", category: "Brown", note: "Decorative brown." },
      { name: "Paper doilies", category: "Brown", note: "Lacy brown." },
      { name: "Paper lanterns (Paper)", category: "Brown", note: "Ambient brown." },
      { name: "Paper cranes (Paper)", category: "Brown", note: "Peaceful brown." },
      { name: "Paper fans (Paper)", category: "Brown", note: "Cool brown." },
      { name: "Paper umbrellas (Drink)", category: "Brown", note: "Cocktail brown." },
      { name: "Paper cupcake stands", category: "Brown", note: "Sweet brown." },
      { name: "Paper doorknob hangers", category: "Brown", note: "Hotel brown." },
      { name: "Paper coasters (Bar)", category: "Brown", note: "Pub brown." },
      { name: "Paper beer mats", category: "Brown", note: "Beverage brown." },
      { name: "Paper wine bags", category: "Brown", note: "Bottled brown." },
      { name: "Paper flour sacks", category: "Brown", note: "Baking brown." },
      { name: "Paper sugar sacks", category: "Brown", note: "Grained brown." },
      { name: "Paper rice bags (Paper)", category: "Brown", note: "Carb brown." },
      { name: "Paper charcoal bags (Outer)", category: "Brown", note: "Grill brown." },
      { name: "Paper pet food bags (Paper)", category: "Brown", note: "Animal brown." },
      { name: "Paper bird seed bags (Paper)", category: "Brown", note: "Aviary brown." },
      { name: "Paper seed packets", category: "Brown", note: "Gardening brown." },
      { name: "Paper garden labels (Paper)", category: "Brown", note: "Organic brown." },
      { name: "Paper soil bags (Paper)", category: "Brown", note: "Dirty brown." },
      { name: "Paper mulch bags (Paper)", category: "Brown", note: "Covered brown." },
      { name: "Paper lawn bags (Paper)", category: "Brown", note: "Yard brown." },
      { name: "Bamboo toothbrushes (No bristles)", category: "Brown", note: "Natural bamboo body." },
      { name: "Brown paper towels (Clean)", category: "Brown", note: "Public restroom type." },
      { name: "Cardboard egg boxes (Torn)", category: "Brown", note: "Grey mulched cardboard." },
      { name: "Cherry pits (Dried)", category: "Brown", note: "Slow to rot." },
      { name: "Coconut husks (Coir)", category: "Brown", note: "Great for aeration." },
      { name: "Cork (Natural stopper)", category: "Brown", note: "Classic wood brown." },
      { name: "Cotton thread (100% natural)", category: "Brown", note: "Small amounts only." },
      { name: "Dried corn husks", category: "Brown", note: "Leathery carbon." },
      { name: "Eucalyptus leaves (Dried)", category: "Brown", note: "Small amounts; waxy." },
      { name: "Nectarine pits", category: "Brown", note: "Hard wood pits." },
      { name: "Hemp rope bits", category: "Brown", note: "Natural hemp only." },
      { name: "Jute twine", category: "Brown", note: "Classic garden brown." },
      { name: "Loofah (Natural sponge)", category: "Brown", note: "Comes from a gourd!" },
      { name: "Macadamia shells", category: "Brown", note: "Hardest nut shell; crush it." },
      { name: "Paper streamers (Degradable)", category: "Brown", note: "Check matte finish." },
      { name: "Raffia", category: "Brown", note: "Palm leaf brown." },
      { name: "Shredded maps (Matte)", category: "Brown", note: "Paper maps." },
      { name: "Straw hats (Natural fibre)", category: "Brown", note: "Tear into pieces." },
      { name: "Wine corks (Wood)", category: "Brown", note: "Real cork only." },
      { name: "Wood ash (Hardwood)", category: "Brown", note: "Use sparingly; raises pH." },
      { name: "Cedar wood chips", category: "Brown", note: "Resistant to rot; use small amounts." },
      
      // === NO (AVOID / NON-COMPOSTABLE) ===
      { name: "Beef scraps", category: "Avoid", note: "Meat scrap that attracts pests." },
      { name: "Pork fat", category: "Avoid", note: "Meat fat with rancid odours and slow breakdown." },
      { name: "Chicken bones", category: "Avoid", note: "Meat bones that attract animals and won't break down at home." },
      { name: "Fish heads", category: "Avoid", note: "Meat/Fish with strong smell; attracts cats/rodents." },
      { name: "Lamb trimmings", category: "Avoid", note: "Meat that is greasy and problematic." },
      { name: "Steak bones", category: "Avoid", note: "Large meat bones won't decompose in a backyard bin." },
      { name: "Pork ribs", category: "Avoid", note: "Meat bones that will persist for years and attract scavengers." },
      { name: "Turkey carcasses", category: "Avoid", note: "Large collection of meat bones and fat, attracts vermin." },
      { name: "Fish skin / fish bones", category: "Avoid", note: "Meat/fish waste that goes putrid quickly." },
      { name: "Venison scraps", category: "Avoid", note: "Raw or cooked wild meat scraps." },
      { name: "Sausage casings", category: "Avoid", note: "Processed meat products." },
      { name: "Ham bones", category: "Avoid", note: "Meat bones that attract pests." },
      { name: "Deli meat", category: "Avoid", note: "Processed meat and cold cuts." },
      { name: "Raw chicken", category: "Avoid", note: "Raw meat poses severe salmonella hazard in compost." },
      { name: "Cooked meat leftovers", category: "Avoid", note: "Cooked meat still rots and draws scavengers." },
      { name: "Meat gravy", category: "Avoid", note: "Meat fat and juices smother aerobic bacteria." },
      { name: "Bacon grease", category: "Avoid", note: "Meat/fat that coats materials, halting decomposition." },
      { name: "T-bone fragments", category: "Avoid", note: "Heavy meat bones." },
      { name: "Ribeye bones", category: "Avoid", note: "Greasy meat bones." },
      { name: "Milk", category: "Avoid", note: "Attracts flies and can sour the pile." },
      { name: "Cheese", category: "Avoid", note: "mould issues and pests." },
      { name: "Yogurt", category: "Avoid", note: "Dairy pathogens in home bins." },
      { name: "Butter / Margarine", category: "Avoid", note: "Pure fat; smothers microbes." },
      { name: "Whole eggs", category: "Avoid", note: "Rotten egg smell is inevitable." },
      { name: "Lard", category: "Avoid", note: "Animal fat attracts vermin." },
      { name: "Vegetable oil", category: "Avoid", note: "Coats organic matter, blocking air." },
      { name: "Olive oil", category: "Avoid", note: "Similar to other oils." },
      { name: "Used cooking grease", category: "Avoid", note: "Clogs the composting process." },
      { name: "Dog waste", category: "Avoid", note: "Pathogens (Roundworms, etc.)" },
      { name: "Cat waste", category: "Avoid", note: "Toxoplasmosis risk." },
      { name: "Pig manure", category: "Avoid", note: "Can harbor human-sharable diseases." },
      { name: "Diapers (Disposable)", category: "Avoid", note: "Plastic, gel, and human waste." },
      { name: "Human waste", category: "Avoid", note: "Safety/Health hazard." },
      { name: "Cat litter (Clay)", category: "Avoid", note: "Does not decompose." },
      { name: "Coal ash", category: "Avoid", note: "Contains heavy metals." },
      { name: "Charcoal briquettes", category: "Avoid", note: "Contain chemical binders." },
      { name: "Pressure-treated wood", category: "Avoid", note: "Arsenic and other poisons." },
      { name: "Plywood scraps", category: "Avoid", note: "Contain toxic glues." },
      { name: "Particle board", category: "Avoid", note: "Formaldehyde and glues." },
      { name: "Glossy magazines", category: "Avoid", note: "Plastic coatings and toxic inks." },
      { name: "Plastic-coated paper", category: "Avoid", note: "Coffee cups, freezer wrap." },
      { name: "Polyester fabric", category: "Avoid", note: "Iterally plastic threads." },
      { name: "Nylon stockings", category: "Avoid", note: "Synthetic polymer." },
      { name: "Spandex items", category: "Avoid", note: "Stretch plastic." },
      { name: "Rubber bands", category: "Avoid", note: "Do not break down naturally." },
      { name: "Latex gloves", category: "Avoid", note: "Unless 100% natural and certified." },
      { name: "Aluminium foil", category: "Avoid", note: "Metal waste." },
      { name: "Tin cans", category: "Avoid", note: "Recycle these instead." },
      { name: "Steel wire", category: "Avoid", note: "Rust is okay, but wire persists." },
      { name: "Copper pipe scraps", category: "Avoid", note: "High concentrations are toxic to microbes." },
      { name: "Glass bottles", category: "Avoid", note: "Does not decompose." },
      { name: "Ceramic shards", category: "Avoid", note: "Inert and sharp." },
      { name: "Rocks & Stones", category: "Avoid", note: "Physical clutter." },
      { name: "Sand (Large amounts)", category: "Avoid", note: "Turns compost into cement-like blocks." },
      { name: "Pesticide-treated grass", category: "Avoid", note: "Kills beneficial soil life." },
      { name: "Herbicide-treated garden waste", category: "Avoid", note: "Persistent chemicals like Aminopyralid." },
      { name: "Fungicides", category: "Avoid", note: "Kills the very fungi you need." },
      { name: "Blighted Tomato plants", category: "Avoid", note: "Diseases survive in home bins." },
      { name: "Poison Ivy", category: "Avoid", note: "Urushiol oil persists and can cause reactions from handling compost." },
      { name: "Poison Oak", category: "Avoid", note: "Similar risk to Poison Ivy." },
      { name: "Poison Sumac", category: "Avoid", note: "High skin irritant." },
      { name: "Black Walnut husks", category: "Avoid", note: "Inhibits plant growth (Juglone)." },
      { name: "Cigarette butts", category: "Avoid", note: "Plastic filters and nicotine (a pesticide)." },
      { name: "Dryer sheets (Synthetic)", category: "Avoid", note: "Coated with chemical softeners and plastic." },
      { name: "Vacuum lint (Synthetic carpet)", category: "Avoid", note: "full of plastic fibres." },
      { name: "Stickers on fruit", category: "Avoid", note: "Remove these! They are plastic." },
      { name: "Teabags (Plastic mesh)", category: "Avoid", note: "Many modern teabags are plastic." },
      { name: "Staples in paper", category: "Avoid", note: "Small but annoying." },
      { name: "Plastic wrap", category: "Avoid", note: "Non-compostable." },
      { name: "Bubble wrap", category: "Avoid", note: "Plastic waste." },
      { name: "Styrofoam", category: "Avoid", note: "Never decomposes." },
      { name: "Glossy labels", category: "Avoid", note: "Peel them off cardboard first." },
      { name: "Biodegradable plastic bags", category: "Avoid", note: "Often require industrial composting heat." },
      { name: "Invasive weed roots", category: "Avoid", note: "Bindweed, Ivy, Couch grass." },
      { name: "Diseased rose clippings", category: "Avoid", note: "Black spot and other fungi persist." },
      { name: "Old shoes", category: "Avoid", note: "Glue, rubber, and treated leather." },
      { name: "Toothbrushes (Plastic)", category: "Avoid", note: "Non-organic." },
      { name: "Razor blades", category: "Avoid", note: "Metal hazard." },
      { name: "Electronics", category: "Avoid", note: "E-waste; contains heavy metals." },
      { name: "Batteries", category: "Avoid", note: "Toxic leak risk." },
      { name: "PVC pipe", category: "Avoid", note: "Toxic when broken down." },
      { name: "Vinyl scraps", category: "Avoid", note: "Plastic." },
      { name: "Silly string", category: "Avoid", note: "Chemical plastic." },
      { name: "Glitter", category: "Avoid", note: "Microplastics." },
      { name: "Confetti (Metallic)", category: "Avoid", note: "Plastic/Metal." },
      { name: "Wrapping paper (Foil)", category: "Avoid", note: "Metal coating." },
      { name: "Christmas tree tinsel", category: "Avoid", note: "Plastic/Metal." },
      { name: "Old toy parts", category: "Avoid", note: "Plastic." },
      { name: "Dental floss", category: "Avoid", note: "Usually nylon/wax combo." },
      { name: "Q-tips (Plastic stem)", category: "Avoid", note: "Paper stem is okay; plastic is not." },
      { name: "Cotton balls (Synthetic)", category: "Avoid", note: "Often 'cotton' balls are polyester." },
      { name: "Dryer lint (CVS brand laundry)", category: "Avoid", note: "Caution with chemical residues." },
      { name: "Crayons (Wax)", category: "Avoid", note: "Paraffin wax is petroleum-based." },
      { name: "Paints & Solvents", category: "Avoid", note: "Toxic chemicals." },
      { name: "Light bulbs", category: "Avoid", note: "Glass and toxins." },
      { name: "Mirror shards", category: "Avoid", note: "Glass hazard." },
      { name: "Dead animals (Large)", category: "Avoid", note: "Health hazard and major pest magnet." },
      { name: "mouldy bread with seeds", category: "Avoid", note: "Seeds might sprout; mould is okay but seeds are risky." },
      { name: "Magazines", category: "Avoid", note: "Heavy metals in some coloured inks." },
      { name: "Envelopes with plastic windows", category: "Avoid", note: "Cut the window out first." },
      { name: "Gum", category: "Avoid", note: "Usually synthetic rubber/plastic base." },
      { name: "Cough drops", category: "Avoid", note: "Sugar and chemicals." },
      { name: "Medicine (Expired)", category: "Avoid", note: "Pollutes groundwater." },
      { name: "Nail polish / Remover", category: "Avoid", note: "Highly toxic chemicals." },
      { name: "Pet flea collars", category: "Avoid", note: "Designed to be pesticide-heavy." },
      { name: "Drywall scraps", category: "Avoid", note: "Sometimes okay in tiny amounts, but often has additives." },
      { name: "Insulation (Fiberglass)", category: "Avoid", note: "Extremely dangerous to handle." },
      { name: "Asbestos", category: "Avoid", note: "Fatal health hazard." },
      { name: "Motor oil", category: "Avoid", note: "Toxic lubricant." },
      { name: "Antifreeze", category: "Avoid", note: "Toxic sweet-smelling liquid." },
      { name: "Brake fluid", category: "Avoid", note: "Harsh chemicals." },
      { name: "Rust converter", category: "Avoid", note: "Strong acid/complexes." },
      { name: "Caulk / Sealant", category: "Avoid", note: "Synthetic polymers." },
      { name: "Grout", category: "Avoid", note: "Mineral but not for compost." },
      { name: "Plaster of Paris", category: "Avoid", note: "Hardens and blocks life." },
      { name: "Steel wool", category: "Avoid", note: "Fine metal shreds." },
      { name: "Teflon coated items", category: "Avoid", note: "PFAS 'forever chemicals'." },
      { name: "Scouring pads", category: "Avoid", note: "Usually plastic abrasive." },
      { name: "Floral foam", category: "Avoid", note: "Microplastic hazard." },
      { name: "Plant labels (Plastic)", category: "Avoid", note: "Must be removed." },
      { name: "Garden hose bits", category: "Avoid", note: "Rubber/Plastic." },
      { name: "PVC glue", category: "Avoid", note: "Toxic solvent." },
      { name: "Spray paint", category: "Avoid", note: "Aerosolized toxins." },
      { name: "Varnish", category: "Avoid", note: "Chemical coating." },
      { name: "Polyurethane", category: "Avoid", note: "Liquid plastic." },
      { name: "Epoxy", category: "Avoid", note: "Resin/Hardener combo." },
      { name: "Super glue", category: "Avoid", note: "Cyanoacrylate." },
      { name: "Duct tape", category: "Avoid", note: "Plastic and synthetic glue." },
      { name: "Masking tape (Synthetic)", category: "Avoid", note: "Check for paper vs plastic." },
      { name: "Packing peanuts (Styrofoam)", category: "Avoid", note: "Only use starch-based ones." },
      { name: "Silica gel packets", category: "Avoid", note: "Inert but persistent." },
      { name: "Mothballs", category: "Avoid", note: "Pesticide fumes." },
      { name: "Bleach", category: "Avoid", note: "Sterilizes the compost." },
      { name: "Ammonia", category: "Avoid", note: "Harsh chemical." },
      { name: "Drain cleaner", category: "Avoid", note: "Caustic chemicals." },
      { name: "Oven cleaner", category: "Avoid", note: "Extremely alkaline." },
      { name: "Toilet cleaner", category: "Avoid", note: "Harsh disinfectants." },
      { name: "Glass cleaner", category: "Avoid", note: "Ammonia based." },
      { name: "Floor wax", category: "Avoid", note: "Synthetic coatings." },
      { name: "Car wax", category: "Avoid", note: "Petroleum products." },
      { name: "Shoe polish", category: "Avoid", note: "Dyes and chemicals." },
      { name: "Furniture polish", category: "Avoid", note: "Oils and silicones." },
      { name: "Leather conditioner", category: "Avoid", note: "Animal fats/chemicals." },
      { name: "Bug spray", category: "Avoid", note: "Pesticides." },
      { name: "Wasp nests", category: "Avoid", note: "Unless purely paper and empty." },
      { name: "Termite wood", category: "Avoid", note: "Health hazard to home." },
      { name: "Carpenter ant wood", category: "Avoid", note: "Don't bring them near your house." },
      { name: "Tick infested waste", category: "Avoid", note: "Safety hazard." },
      { name: "Fleas", category: "Avoid", note: "Pests." },
      { name: "Cockroaches", category: "Avoid", note: "Disease vectors." },
      { name: "Bed bugs", category: "Avoid", note: "Burn these instead." },
      { name: "Rat traps (Used)", category: "Avoid", note: "Biological hazard." },
      { name: "Mouse traps (Used)", category: "Avoid", note: "Contaminated." },
      { name: "Lead paint chips", category: "Avoid", note: "Extremely neurotoxic." },
      { name: "Vape cartridges", category: "Avoid", note: "E-waste/Toxins." },
      { name: "Vape juice", category: "Avoid", note: "Nicotine is toxic." },
      { name: "Cigars", category: "Avoid", note: "Nicotine/Toxins." },
      { name: "Chewing tobacco", category: "Avoid", note: "Chemicals." },
      { name: "Snuff", category: "Avoid", note: "Toxins." },
      { name: "Lighter fluid", category: "Avoid", note: "Petroleum." },
      { name: "Matches (Unused)", category: "Avoid", note: "Chemical phosphorus." },
      { name: "Aerosol cans", category: "Avoid", note: "Pressure hazard." },
      { name: "Tires", category: "Avoid", note: "Rubber/Metal/Chemicals." },
      { name: "Gasoline", category: "Avoid", note: "Toxic fuel." },
      { name: "Diesel fuel", category: "Avoid", note: "Petroleum." },
      { name: "Kerosene", category: "Avoid", note: "Fuel toxin." },
      { name: "Lamp oil", category: "Avoid", note: "Chemicals." },
      { name: "Paraffin wax", category: "Avoid", note: "Petroleum based." },
      { name: "Beeswax (Synthetic)", category: "Avoid", note: "Check purity." },
      { name: "Candle wicks", category: "Avoid", note: "Often have metal cores." },
      { name: "Glitter glue", category: "Avoid", note: "Microplastic/Adhesive." },
      { name: "White glue (Large amounts)", category: "Avoid", note: "Synthetic polymer." },
      { name: "Hot glue", category: "Avoid", note: "Plastic." },
      { name: "Caulk strips", category: "Avoid", note: "Rubber." },
      { name: "Putty", category: "Avoid", note: "Chemical filler." },
      { name: "Spackle", category: "Avoid", note: "Mineral/Polymer." },
      { name: "Cement dust", category: "Avoid", note: "Alkaline." },
      { name: "Grout sealer", category: "Avoid", note: "Chemical coating." },
      { name: "Linoleum scraps", category: "Avoid", note: "Usually PVC." },
      { name: "Vinyl flooring", category: "Avoid", note: "Plastic." },
      { name: "Carpet padding", category: "Avoid", note: "Synthetic foam." },
      { name: "Fiberglass insulation", category: "Avoid", note: "Glass fibers." },
      { name: "Rockwool (Dirty)", category: "Avoid", note: "Mineral waste." },
      { name: "Foam board", category: "Avoid", note: "Plastic." },
      { name: "Poster board (Glossy)", category: "Avoid", note: "Chemical coating." },
      { name: "Laminated signs", category: "Avoid", note: "Plastic." },
      { name: "ID cards", category: "Avoid", note: "Plastic." },
      { name: "Credit cards", category: "Avoid", note: "Micro-chipped plastic." },
      { name: "Keys", category: "Avoid", note: "Metal." },
      { name: "Magnets", category: "Avoid", note: "Metal/Mineral." },
      { name: "Paper clips (Plastic coated)", category: "Avoid", note: "Plastic waste." },
      { name: "Binder clips", category: "Avoid", note: "Metal." },
      { name: "Push pins", category: "Avoid", note: "Plastic/Metal." },
      { name: "Rubber bands (Synthetic)", category: "Avoid", note: "Non-compostable." },
      { name: "Balloons", category: "Avoid", note: "Latex/Plastic hazard." },
      { name: "Disposable cups (Plastic)", category: "Avoid", note: "Recycle only." },
      { name: "Disposable cutlery (Plastic)", category: "Avoid", note: "Pollutes compost." },
      { name: "Disposable plates (Plastic)", category: "Avoid", note: "Non-organic." },
      { name: "Straws (Plastic)", category: "Avoid", note: "Plastic hazard." },
      { name: "Stirrers (Plastic)", category: "Avoid", note: "Non-compostable." },
      { name: "Takeout containers (Styrofoam)", category: "Avoid", note: "Toxic plastic." },
      { name: "Takeout containers (Plastic)", category: "Avoid", note: "Recycle if possible." },
      { name: "Cling film", category: "Avoid", note: "Plastic wrap." },
      { name: "Zip ties", category: "Avoid", note: "Plastic straps." },
      { name: "Garden ties (Plastic)", category: "Avoid", note: "Wire/Plastic combo." },
      { name: "Plant pots (Plastic)", category: "Avoid", note: "Reusable or recyclable." },
      { name: "Seed trays (Plastic)", category: "Avoid", note: "Non-biodegradable." },
      { name: "Netting (Plastic)", category: "Avoid", note: "Bird netting hazard." },
      { name: "Fencing (Plastic)", category: "Avoid", note: "Synthetic barrier." },
      { name: "Tarps (Plastic)", category: "Avoid", note: "Polyester/Coating." },
      { name: "Rope (Nylon)", category: "Avoid", note: "synthetic fibre." },
      { name: "Rope (Polyester)", category: "Avoid", note: "Plastic cord." },
      { name: "Fishing line", category: "Avoid", note: "Monofilament plastic." },
      { name: "Fishing nets", category: "Avoid", note: "Ocean plastic." },
      { name: "Swimming pool liners", category: "Avoid", note: "Vinyl toxins." },
      { name: "Inflatable toys", category: "Avoid", note: "PVC plastic." },
      { name: "Beach balls", category: "Avoid", note: "Summer plastic." },
      { name: "Sunblock bottles", category: "Avoid", note: "Plastic container." },
      { name: "Insect repellent bottles", category: "Avoid", note: "Chemical residue." },
      { name: "Fertiliser bags (Plastic)", category: "Avoid", note: "Chemical plastic." },
      { name: "Pesticide bottles", category: "Avoid", note: "Toxic hazard." },
      { name: "Herbicide bottles", category: "Avoid", note: "Poison hazard." },
      { name: "Gas cans", category: "Avoid", note: "Fuel hazard." },
      { name: "Oil bottles", category: "Avoid", note: "Hydrocarbon hazard." },
      { name: "Coolant bottles", category: "Avoid", note: "Ethylene glycol hazard." },
      { name: "Brake cleaner cans", category: "Avoid", note: "VOC hazard." },
      { name: "Degreaser bottles", category: "Avoid", note: "Solvent hazard." },
      { name: "Solder lead", category: "Avoid", note: "Heavy metal." },
      { name: "Solder wire", category: "Avoid", note: "Metal waste." },
      { name: "Welding rods", category: "Avoid", note: "Industrial waste." },
      { name: "Flux jars", category: "Avoid", note: "Acidic chemicals." },
      { name: "Graphite spray", category: "Avoid", note: "Lubricant toxin." },
      { name: "Lithium grease", category: "Avoid", note: "Metal lubricant." },
      { name: "Silicone sealant", category: "Avoid", note: "Synthetic polymer." },
      { name: "Urethane foam", category: "Avoid", note: "Toxic plastic." },
      { name: "Expanding foam", category: "Avoid", note: "Chemical hazard." },
      { name: "Caulk tubes", category: "Avoid", note: "Disposable plastic." },
      { name: "Glue sticks (Plastic)", category: "Avoid", note: "Crafting hazard." },
      { name: "Tape dispensers", category: "Avoid", note: "Plastic desktop waste." },
      { name: "Staplers (Plastic parts)", category: "Avoid", note: "Office waste." },
      { name: "Hole punchers", category: "Avoid", note: "Metal/Plastic waste." },
      { name: "Paper fasteners (Metal)", category: "Avoid", note: "Brass/Gold-tone metal." },
      { name: "Thumb tacks", category: "Avoid", note: "Metal hazard." },
      { name: "Push pins (Plastic)", category: "Avoid", note: "Office hazard." },
      { name: "Animal fat trimmings", category: "Avoid", note: "Rancid stenches and pests." },
      { name: "Antiseptic wipes", category: "Avoid", note: "Kill beneficial bacteria." },
      { name: "Baby wipes", category: "Avoid", note: "contain plastic fibres." },
      { name: "BBQ briquettes (Chemical)", category: "Avoid", note: "Toxic additives." },
      { name: "Cat litter (Crystal)", category: "Avoid", note: "Silica doesn't rot." },
      { name: "Dryer sheets (Used)", category: "Avoid", note: "Chemical and plastic residue." },
      { name: "Pesticide containers (Empty)", category: "Avoid", note: "Toxic residue risk." },
      { name: "Fabric softener sheets", category: "Avoid", note: "Non-biodegradable chemicals." },
      { name: "Fertiliser with weed killer", category: "Avoid", note: "Kills your garden plants later." },
      { name: "Glossy flyers", category: "Avoid", note: "Plastic coating." },
      { name: "Cat litter (Scented)", category: "Avoid", note: "Perfumes and chemicals." },
      { name: "Milk cartons (Waxy/Plastic)", category: "Avoid", note: "Hard to break down at home." },
      { name: "Plastic straws", category: "Avoid", note: "Forever pollutant." },
      { name: "Polyurethane foam", category: "Avoid", note: "Chemical plastic." },
      { name: "Rubber ducks", category: "Avoid", note: "Solid plastic." },
      { name: "Scented candles (Paraffin)", category: "Avoid", note: "Petroleum waxy carbon." },
      { name: "Synthetic sponges", category: "Avoid", note: "Microplastic hazard." },
      { name: "Waxy cardboard (Liquid cartons)", category: "Avoid", note: "Usually plastic lined." },
      { name: "Weed seeds (Mature)", category: "Avoid", note: "Will grow in your garden next year." },
      { name: "Dog hair (Flea treated)", category: "Avoid", note: "Pesticide risk." },
      { name: "Dryer lint (Synthetic blend)", category: "Avoid", note: "Microplastic risk." },
    ];

    // Enhance ITEMS with category chips and search tags for better discovery
    const tagDefinitions = [
      { id: 'vegetarian', label: 'Vegetable', color: '#166534', bg: '#dcfce7', keywords: ['lettuce', 'spinach', 'kale', 'cabbage', 'broccoli', 'cauliflower', 'brussels', 'asparagus', 'celery', 'carrot', 'parsnip', 'radish', 'turnip', 'beet', 'potato', 'onion', 'garlic', 'leek', 'squash', 'zucchini', 'cucumber', 'pumpkin', 'corn', 'pea', 'bean', 'pepper', 'tomato', 'eggplant', 'chard', 'collard', 'artichoke', 'fennel', 'shallot', 'scallion', 'endive', 'watercress', 'arugula', 'mustard greens', 'microgreens', 'vegetable', 'veg', 'veggie', 'okra', 'bok choy', 'kohlrabi', 'soybean', 'edamame', 'lentil', 'vetch', 'gourd', 'purslane', 'pigweed', 'nettle', 'alfalfa', 'comfrey', 'escarole', 'frisee', 'radicchio', 'cress', 'tofu', 'soy', 'hops'], excludes: ['taco'] },
      { id: 'fruit', label: 'Fruit', color: '#831843', bg: '#fce7f3', keywords: ['apple', 'banana', 'orange', 'lemon', 'lime', 'fruit', 'peel', 'apple core', 'pear core', 'melon', 'berry', 'citrus', 'peach', 'plum', 'apricot', 'cherry', 'strawberry', 'raspberry', 'blueberry', 'blackberry', 'cranberry', 'grape', 'kiwi', 'mango', 'papaya', 'watermelon', 'cantaloupe', 'fig', 'date', 'pomegranate', 'persimmon', 'lychee', 'dragonfruit', 'passionfruit', 'avocado', 'honeydew'], excludes: ['lemon balm', 'cabbage'] },
      { id: 'herb_spice', label: 'Herbs & Spices', color: '#14532d', bg: '#dcfce7', keywords: ['herb', 'basil', 'cilantro', 'parsley', 'dill', 'mint', 'sage', 'rosemary', 'thyme', 'oregano', 'marjoram', 'tarragon', 'spice', 'lemon balm'] },
      { id: 'grain_carb', label: 'Grains & Pasta', color: '#854d0e', bg: '#fef3c7', keywords: ['pasta', 'rice', 'bread', 'oat', 'oatmeal', 'cornmeal', 'couscous', 'bulgur', 'millet', 'farro', 'barley', 'tortilla', 'bagel', 'pancake', 'pizza', 'pretzel', 'pita', 'matzo', 'cracker', 'wheatgrass', 'wheat bran', 'grain', 'flour', 'dough', 'cereal', 'popcorn', 'rye'] },
      { id: 'nut_seed', label: 'Nuts, Seeds & Pits', color: '#78350f', bg: '#ffedd5', keywords: ['nut', 'seed', 'pit', 'shell', 'acorn', 'walnut', 'peanut', 'pistachio', 'pecan', 'almond', 'hazelnut', 'macadamia', 'coconut', 'cocoa'], excludes: ['taco'] },
      { id: 'coffee_tea', label: 'Coffee & Tea', color: '#451a03', bg: '#ffedd5', keywords: ['coffee', 'tea'] },
      { id: 'fungi', label: 'Fungi / Mushroom', color: '#374151', bg: '#f3f4f6', keywords: ['mushroom', 'yeast', 'agar'] },
      { id: 'marine', label: 'Seaweed / Algae', color: '#065f46', bg: '#d1fae5', keywords: ['seaweed', 'kelp', 'algae', 'nori'] },
      { id: 'fats_oils', label: 'Fats & Oils', color: '#854d0e', bg: '#fef08a', keywords: ['oil', 'grease', 'fat', 'lard'], excludes: ['no oil', 'raw', 'no sauce, oils'] },
      { id: 'meat', label: 'Meat/Fish', color: '#7f1d1d', bg: '#fee2e2', keywords: ['meat', 'beef', 'pork', 'chicken', 'fish', 'lamb', 'steak', 'pork ribs', 'beef ribs', 'spare ribs', 'turkey', 'sausage', 'ham', 'deli', 'bacon', 'venison', 'poultry', 'seafood', 'shrimp', 'crab'], excludes: ['kale', 'feather', 'lamb\'s quarter'] },
      { id: 'bone', label: 'Bones', color: '#78350f', bg: '#fef3c7', keywords: ['bone', 'bones', 'carcass'] },
      { id: 'dairy', label: 'Dairy', color: '#1e3a8a', bg: '#dbeafe', keywords: ['milk', 'cheese', 'yogurt', 'butter', 'dairy', 'whey'], excludes: ['soy'] },
      { id: 'egg', label: 'Eggs', color: '#854d0e', bg: '#fef08a', keywords: ['\\beggs?\\b', 'eggshell'] },
      { id: 'paper', label: 'Paper/Cardboard', color: '#374151', bg: '#f3f4f6', keywords: ['paper', 'cardboard', 'box', 'envelope', 'magazine', 'receipt', 'napkin', 'tissue', 'tp', 'carton'] },
      { id: 'wood', label: 'Wood & Bark', color: '#451a03', bg: '#fef08a', keywords: ['wood', 'sawdust', 'chip', 'twig', 'branch', 'briquette', 'cork', 'bamboo', 'particle board'] },
      { id: 'soil', label: 'Soil & Compost', color: '#3f2c06', bg: '#d6c6b3', keywords: ['soil', 'peat moss', 'coir', 'bark', 'mulch', 'ash', 'coal', 'charcoal', 'dirt'] },
      { id: 'natural_fibre', label: 'Natural Fibres', color: '#0f766e', bg: '#ccfbf1', keywords: ['cotton', 'wool', 'linen', 'silk', 'burlap', 'jute', 'hemp', 'thread', 'textile', 'loofah', 'fabric'], excludes: ['synthetic', 'plastic', 'nylon', 'poly'] },
      { id: 'animal_product', label: 'Animal Products', color: '#78350f', bg: '#fef3c7', keywords: ['hair', 'fur', 'feather', 'nail', 'gelatin', 'leather'] },
      { id: 'plastic', label: 'Plastic', color: '#831843', bg: '#fdf2f8', keywords: ['plastic', 'synthetic', 'poly', 'nylon', 'spandex', 'rubber', 'latex', 'styrofoam', 'pvc', 'vinyl'], excludes: ['check for', 'no plastic', 'natural fiber', 'natural only'] },
      { id: 'metal', label: 'Metal', color: '#334155', bg: '#e2e8f0', keywords: ['metal', 'aluminium', 'foil', 'tin', 'wire', 'copper', 'steel', 'iron', 'brass'], excludes: ['remove'] },
      { id: 'glass', label: 'Glass', color: '#0c4a6e', bg: '#e0f2fe', keywords: ['glass', 'ceramic', 'mirror', 'bulb'] },
      { id: 'chemical', label: 'Chemical/Toxic', color: '#7f1d1d', bg: '#fee2e2', keywords: ['chemical', 'pesticide', 'herbicide', 'fungicide', 'toxic', 'paint', 'solvent', 'bleach', 'ammonia', 'cleaner', 'wax', 'waxy', 'polish', 'poison', 'motor oil', 'antifreeze', 'brake fluid', 'aerosol', 'kerosene', 'fuel', 'diesel', 'lighter fluid', 'dryer lint', 'wipe', 'medicine', 'drug', 'cigar', 'snuff', 'tobacco', 'vape', 'nicotine', 'antiseptic', 'disinfectant', 'paraffin'] },
      { id: 'garden_waste', label: 'Garden Waste', color: '#14532d', bg: '#ecfccb', keywords: ['grass', 'weed', 'leaf', 'leaves', 'pine', 'straw', 'hay', 'plant', 'flower', 'bouquet', 'clipping', 'garden', 'clover', 'lemon balm', 'nettle'], excludes: ['plant protein', 'plastic', 'synthetic'] },
      { id: 'animal_waste', label: 'Animal/Human Waste', color: '#451a03', bg: '#fef3c7', keywords: ['poop', 'pet waste', 'human waste', 'animal waste', 'litter', 'feces', 'manure', 'urine'] },
      { id: 'building_material', label: 'Building Materials', color: '#4b5563', bg: '#e5e7eb', keywords: ['drywall', 'insulation', 'asbestos', 'grout', 'plaster', 'spackle', 'cement', 'epoxy', 'super glue', 'caulk', 'putty', 'floral foam', 'rust converter'], excludes: ['remove'] },
      { id: 'pest', label: 'Pests / Bugs', color: '#581c87', bg: '#f3e8ff', keywords: ['bug', 'insect', 'flea', 'roach', 'cockroach', 'termite', 'rat', 'mouse', 'tick', 'wasp'], excludes: ['untreated'] },
      { id: 'misc', label: 'Miscellaneous', color: '#1f2937', bg: '#e5e7eb', keywords: ['beer', 'wine', 'alcohol', 'jello', 'vacuum bag', 'rock', 'stone', 'sand', 'dust', 'glitter', 'silica', 'graphite', 'candle', 'matches', 'taco shell', 'soy', 'hops'] }
    ];

    ITEMS.forEach(item => {
      let searchTags = "";
      let categoryChips = [];
      const name = (item.name || "").toLowerCase();
      const note = (item.note || "").toLowerCase();
      const combined = name + " " + note;
      
      tagDefinitions.forEach(tagDef => {
        let matched = tagDef.keywords.some(kw => {
          const regex = new RegExp(kw.includes('\\b') ? kw : '\\b' + kw + 'e?s?\\b', 'i');
          return regex.test(name) || regex.test(note);
        });

        if (matched && tagDef.excludes) {
          if (tagDef.excludes.some(ex => combined.includes(ex.toLowerCase()))) {
            matched = false;
          }
        }

        if (matched) {
          searchTags += " " + tagDef.keywords.join(' ');
          categoryChips.push(tagDef);
        }
      });

      // Avoid duplicate chips and handle special fallbacks
      if (categoryChips.length === 0) {
          if (name.includes("cork")) categoryChips.push(tagDefinitions.find(t => t.id === 'wood'));
          else if (name.includes("animal")) categoryChips.push(tagDefinitions.find(t => t.id === 'meat')); 
          else if (name.includes("gas") || name.includes("oil") || name.includes("coolant")) categoryChips.push(tagDefinitions.find(t => t.id === 'chemical'));
          else if (name.includes("liquid")) categoryChips.push(tagDefinitions.find(t => t.id === 'vegetarian'));
          else categoryChips.push(tagDefinitions.find(t => t.id === 'misc'));
      }

      item.searchTags = searchTags;
      
      // Deduplicate
      const uniqueChips = [];
      const chipIds = new Set();
      categoryChips.forEach(c => {
         if (c && !chipIds.has(c.id)) {
            uniqueChips.push(c);
            chipIds.add(c.id);
         }
      });
      
      // Cross-category exclusion for plastic vs natural fibers/garden waste
      if (chipIds.has('plastic')) {
        item.categoryChips = uniqueChips.filter(c => c.id !== 'garden_waste' && c.id !== 'natural_fibre');
      } else {
        item.categoryChips = uniqueChips;
      }
    });

    // Initialize Fuse.js for fuzzy search
    const fuse = new Fuse(ITEMS, {
      keys: [
        { name: 'name', weight: 2 },
        { name: 'note', weight: 1 },
        { name: 'searchTags', weight: 1.5 }
      ],
      threshold: 0.35,
      location: 0,
      distance: 100,
      minMatchCharLength: 2,
      ignoreLocation: true
    });

    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const itemContainer = document.getElementById('itemContainer');

    // State
    let currentSearch = '';
    let currentFilter = 'All';
    let currentStatus = 'all';

    // Helper to escape HTML and prevent XSS
    function escapeHTML(str) {
      if (str === null || str === undefined) return '';
      const p = document.createElement('p');
      p.textContent = str;
      return p.innerHTML;
    }

    function getCategoryReason(item) {
        const name = (item.name || '').toLowerCase();
        if (item.category === 'Green') {
            if (name.includes('manure')) return '<strong>Why Green?</strong> Manure is extremely rich in nitrogen and acts as an activator to heat up the compost pile.';
            if (name.includes('coffee') || name.includes('tea')) return '<strong>Why Green?</strong> Despite their brown colour, coffee grounds and tea leaves are rich in nitrogen and protein.';
            if (name.includes('fruit') || name.includes('peel') || name.includes('core')) return '<strong>Why Green?</strong> Fruit scraps are wet and high in nitrogen, providing quick energy for microbes.';
            if (name.includes('vegetable') || name.includes('scrap')) return '<strong>Why Green?</strong> Vegetable scraps add essential moisture and nitrogen to the compost ecosystem.';
            if (name.includes('grass') || name.includes('weed') || name.includes('clover')) return '<strong>Why Green?</strong> Freshly cut grass and green plants are packed with moisture and nitrogen.';
            return '<strong>Why Green?</strong> It is high in nitrogen and provides the moisture and nutrients microbes need to thrive.';
        }
        if (item.category === 'Brown') {
            if (name.includes('paper') || name.includes('cardboard') || name.includes('box')) return '<strong>Why Brown?</strong> Paper and cardboard are almost entirely carbon, providing structural support and energy.';
            if (name.includes('wood') || name.includes('sawdust') || name.includes('chip') || name.includes('twig')) return '<strong>Why Brown?</strong> Wood materials are dense sources of carbon that break down slowly and provide aeration.';
            if (name.includes('leaf') || name.includes('leaves') || name.includes('pine')) return '<strong>Why Brown?</strong> Dry leaves are a classic carbon source that adds bulk and helps balance wet "Greens".';
            if (name.includes('shell') || name.includes('pit') || name.includes('nut')) return '<strong>Why Brown?</strong> Hard shells are high in carbon and take a very long time to decompose, adding structure.';
            if (name.includes('cotton') || name.includes('wool') || name.includes('fabric')) return '<strong>Why Brown?</strong> Natural plant and animal fibres act as slow-decomposing carbon sources.';
            if (name.includes('straw') || name.includes('hay')) return '<strong>Why Brown?</strong> Dried plant stalks like straw are high in carbon and create excellent air pockets in the pile.';
            return '<strong>Why Brown?</strong> It is high in carbon and provides structural bulk and energy for compost microbes.';
        }
        if (item.category === 'Avoid') {
            if (name.includes('plastic') || name.includes('synthetic') || name.includes('poly')) return '<strong>Why Avoid?</strong> Synthetic materials will never decompose and will contaminate the finished compost.';
            if (name.includes('meat') || name.includes('fat') || name.includes('dairy') || name.includes('bone') || name.includes('cheese')) return '<strong>Why Avoid?</strong> Animal products rot and putrefy, spreading strong odours that attract rodents and pests.';
            if (name.includes('poop') || name.includes('waste') || name.includes('litter') || name.includes('feces')) return '<strong>Why Avoid?</strong> Carnivore pet and human waste carry dangerous pathogens that can survive home composting.';
            if (name.includes('disease') || name.includes('blight') || name.includes('weed seed')) return '<strong>Why Avoid?</strong> Home composts rarely get hot enough to destroy diseases or persistent seeds, which can spread to your garden.';
            if (name.includes('chemical') || name.includes('treated') || name.includes('glossy') || name.includes('paint')) return '<strong>Why Avoid?</strong> Toxic chemicals can kill the beneficial microbes driving the composting process.';
            if (name.includes('glass') || name.includes('metal') || name.includes('foil')) return '<strong>Why Avoid?</strong> Inorganic materials will not break down and pose a physical hazard in your garden soil.';
            return '<strong>Why Avoid?</strong> It can harm the composting ecosystem, attract pests, or never break down.';
        }
        return '';
    }

    // Helper to generate dynamic composting tips based on item
    function getCompostTip(item) {
        const name = (item.name || '').toLowerCase();
        const note = (item.note || '').toLowerCase();
        
        if (item.category === 'Avoid') {
             if (name.includes('plastic') || name.includes('poly') || name.includes('synthetic') || note.includes('plastic')) {
                 return '<strong>Warning:</strong> Plastics and synthetic materials will never break down in a home compost and contaminate soil.';
             }
             if (name.includes('meat') || name.includes('bone') || name.includes('fat') || name.includes('dairy') || name.includes('cheese') || name.includes('milk') || name.includes('butter') || name.includes('oil') || note.includes('pest')) {
                 return '<strong>Warning:</strong> Animal products and fats putrefy quickly, produce foul odours, and are strong attractants for rats and other pests.';
             }
             if (name.includes('poop') || name.includes('waste') || name.includes('litter') || name.includes('diaper') || name.includes('feces')) {
                 return '<strong>Warning:</strong> Pet and human waste can carry harmful pathogens and parasites that survive standard compost temperatures.';
             }
             if (name.includes('chemical') || name.includes('treated') || name.includes('glossy') || name.includes('toxic') || name.includes('cleaner') || name.includes('solvent') || note.includes('chemical')) {
                 return '<strong>Warning:</strong> Chemical residues can kill the beneficial bacteria and microbes essential for the composting process.';
             }
             if (name.includes('weed') || name.includes('disease') || name.includes('blight')) {
                 return '<strong>Warning:</strong> Standard home composting rarely gets hot enough to kill weed seeds or plant pathogens, risking spreading them to your garden.';
             }
             return '<strong>Warning:</strong> This item is detrimental to the composting process. Keep it out of your bin to maintain a healthy pile.';
        }
        
        if (item.category === 'Green') {
             if (name.includes('coffee') || name.includes('tea')) {
                 return '<strong>Composting Tip:</strong> Coffee grounds and tea are excellent nitrogen sources. Filters and natural bags can be composted along with them.';
             }
             if (name.includes('manure')) {
                 return '<strong>Composting Tip:</strong> Herbivore manure is fantastic for heating up a pile quickly. Layer it with plenty of dry browns.';
             }
             if (name.includes('citrus') || name.includes('lemon') || name.includes('orange') || name.includes('grapefruit')) {
                 return '<strong>Composting Tip:</strong> Citrus peels take longer to break down and can be acidic. Chop them up and use in moderation to avoid upsetting worms.';
             }
             if (name.includes('grass') || name.includes('clover') || name.includes('weed')) {
                 return '<strong>Composting Tip:</strong> Fresh grass clippings mat together and smell bad if clumped. Spread them thinly or mix aggressively with dry leaves or cardboard.';
             }
             if (name.includes('fruit') || name.includes('peel') || name.includes('core') || name.includes('melon') || name.includes('apple') || name.includes('banana')) {
                 return '<strong>Composting Tip:</strong> Sweet fruit scraps attract fruit flies. Bury them deep in the pile or cover them with a layer of browns immediately.';
             }
             if (name.includes('vegetable') || name.includes('scrap') || name.includes('green') || name.includes('lettuce')) {
                 return '<strong>Composting Tip:</strong> Kitchen veggie scraps are high in moisture. Balance their wetness with dry browns to prevent a soggy, anaerobic pile.';
             }
             return '<strong>Composting Tip:</strong> Green materials provide the nitrogen and moisture microbes need to multiply. Always balance with roughly 2-3 parts brown materials.';
        }
        
        if (item.category === 'Brown') {
             if (name.includes('cardboard') || name.includes('paper') || name.includes('newspaper') || name.includes('box')) {
                 return '<strong>Composting Tip:</strong> Always shred or tear paper and cardboard into small pieces. Flat sheets can form a papier-mâché mat that blocks airflow and water.';
             }
             if (name.includes('leaf') || name.includes('leaves') || name.includes('pine')) {
                 return '<strong>Composting Tip:</strong> Dry leaves are the perfect carbon source. Stockpile them in fall to use year-round. Crushing them first speeds up decomposition.';
             }
             if (name.includes('wood') || name.includes('sawdust') || name.includes('chip') || name.includes('bark') || name.includes('twig') || name.includes('branch')) {
                 return '<strong>Composting Tip:</strong> Wood products break down very slowly. Use small chips or fine sawdust, and mix well to avoid nitrogen tie-up.';
             }
             if (name.includes('shell') || name.includes('pit') || name.includes('nut') || name.includes('seed')) {
                 return '<strong>Composting Tip:</strong> Hard shells and pits decompose extremely slowly. Crush them with a hammer first, or expect to sift them out of finished compost.';
             }
             if (name.includes('fabric') || name.includes('cotton') || name.includes('wool') || name.includes('hair') || name.includes('fur')) {
                 return '<strong>Composting Tip:</strong> Natural fibres will break down, but slowly. Cut fabrics into small strips and bury hair/fur deep so it doesn\'t blow away.';
             }
             if (name.includes('straw') || name.includes('hay')) {
                 return '<strong>Composting Tip:</strong> Straw provides excellent structure and aeration to a pile. Ensure it hasn\'t been treated with persistent herbicides.';
             }
             return '<strong>Composting Tip:</strong> Brown materials add essential carbon and structural bulk, allowing oxygen to flow through the pile for aerobic decomposition.';
        }
        
        return '';
    }

    // Render Function
    function renderItems() {
      // 1. Filter and Search the data
      const query = currentSearch.trim();
      let filtered = [];

      if (!query) {
        filtered = ITEMS.filter(item => {
          // Category match
          const catMatch = currentFilter === 'All' || item.category === currentFilter;
          if (!catMatch) return false;
          
          // Status match
          if (currentStatus === 'compostable') return item.category === 'Green' || item.category === 'Brown';
          if (currentStatus === 'non-compostable') return item.category === 'Avoid';
          
          return true;
        });
      } else {
        const results = fuse.search(query);
        filtered = results
          .map(result => result.item)
          .filter(item => {
            // Category match
            const catMatch = currentFilter === 'All' || item.category === currentFilter;
            if (!catMatch) return false;
            
            // Status match
            if (currentStatus === 'compostable') return item.category === 'Green' || item.category === 'Brown';
            if (currentStatus === 'non-compostable') return item.category === 'Avoid';
            
            return true;
          });
      }

      // Update screen reader status
      const searchStatus = document.getElementById('search-status');
      if (searchStatus) {
        searchStatus.textContent = `${filtered.length} items found.`;
      }

      // 3. Build HTML
      itemContainer.innerHTML = '';

      if (filtered.length === 0) {
        itemContainer.innerHTML = `
          <div class="no-results">
            <p>No items found matching "${escapeHTML(query)}". Try a different search term.</p>
          </div>
        `;
        return;
      }

      function renderItemCard(item) {
        // Find actual index in global ITEMS array
        const itemIdx = ITEMS.indexOf(item);
        return `
          <article class="item-card" data-category="${item.category}" onclick="toggleCard(this)" tabindex="0" role="button" aria-expanded="false" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleCard(this);}">
            <div class="item-header">
              <h3 class="item-title">${escapeHTML(item.name)}</h3>
              <div class="item-header-bottom">
                ${item.categoryChips && item.categoryChips.length > 0 ? `
                  <div class="item-chips">
                    ${item.categoryChips.map(chip => `<span class="category-chip" style="background-color: ${chip.bg}; color: ${chip.color}; border-color: ${chip.color}33;">${escapeHTML(chip.label)}</span>`).join('')}
                  </div>
                ` : '<div></div>'}
                <div class="item-badge-wrap">
                  <span class="item-badge" aria-label="Category: ${item.category}">${item.category}</span>
                  <svg class="expand-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>
            <div class="item-details">
              <div class="item-details-inner">
                <p class="item-note"><strong>Note:</strong> ${escapeHTML(item.note)}</p>
                <p class="item-reason">${getCategoryReason(item)}</p>
                ${getCompostTip(item) ? `<div class="item-tip">${getCompostTip(item)}</div>` : ''}
                <a href="https://www.ecosia.org/search?q=composting+${encodeURIComponent((item.name || '').toLowerCase())}" target="_blank" rel="noopener noreferrer" class="learn-more-link" onclick="event.stopPropagation();" aria-label="Learn more about composting ${escapeHTML(item.name)}">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </article>
        `;
      }

      if (query.length > 0) {
        // If there's a search term, render a flat list to prioritize relevance
        const resultsDiv = document.createElement('div');
        resultsDiv.innerHTML = `
          <div class="grid-container">
            ${filtered.map(renderItemCard).join('')}
          </div>
        `;
        itemContainer.appendChild(resultsDiv);
        return;
      }

      // 2. Group by Category (for non-search view)
      const categories = ['Green', 'Brown', 'Avoid'];
      const grouped = categories.reduce((acc, cat) => {
        acc[cat] = filtered.filter(item => item.category === cat);
        return acc;
      }, {});

      const CATEGORY_NAMES = {
        'Green': 'Greens (Nitrogen)',
        'Brown': 'Browns (Carbon)',
        'Avoid': 'Avoid (Do not compost)'
      };

      const CATEGORY_ICONS = {
        'Green': '🌿',
        'Brown': '🍂',
        'Avoid': '🚫'
      };

      const hasAnyOpen = categories.some(cat => currentFilter === cat);
      if (itemContainer) {
        if (hasAnyOpen) {
          itemContainer.classList.add('has-open');
        } else {
          itemContainer.classList.remove('has-open');
        }
      }

      categories.forEach(cat => {
        const catItems = grouped[cat];
        if (catItems.length === 0) return;

        // Auto-open only if specifically filtered to this category
        const isOpen = currentFilter === cat;

        const groupDiv = document.createElement('div');
        groupDiv.className = `accordion-group ${isOpen ? 'open' : ''}`;
        groupDiv.id = `group-${cat}`;
        
        groupDiv.innerHTML = `
          <h2 class="accordion-heading">
            <button class="accordion-header" onclick="toggleAccordion('${cat}')" aria-expanded="${isOpen}">
              <span class="accordion-header-title">
                <span>${CATEGORY_ICONS[cat]}</span>
                ${CATEGORY_NAMES[cat]}
                <span class="category-count">${catItems.length}</span>
              </span>
              <span class="accordion-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </button>
          </h2>
          <div class="accordion-content">
            <div class="accordion-inner">
              <div class="grid-container">
                ${catItems.map(renderItemCard).join('')}
              </div>
            </div>
          </div>
        `;
        itemContainer.appendChild(groupDiv);
      });
    }

    function toggleAccordion(category) {
      const group = document.getElementById(`group-${category}`);
      if (!group) return;
      
      const isOpening = !group.classList.contains('open');
      const query = currentSearch.trim();

      // If opening and not searching, close others (exclusive accordion behavior)
      if (isOpening && query.length === 0) {
        document.querySelectorAll('.accordion-group').forEach(other => {
          if (other !== group && other.classList.contains('open')) {
            other.classList.remove('open');
            const otherBtn = other.querySelector('.accordion-header');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });
      }

      group.classList.toggle('open');
      
      // Update cheat-sheet padding to allow scrolling last section to top only when something is open
      const cheatSheet = document.getElementById('itemContainer');
      const hasAnyOpen = document.querySelector('.accordion-group.open') !== null;
      if (cheatSheet) {
        if (hasAnyOpen) {
          cheatSheet.classList.add('has-open');
        } else {
          cheatSheet.classList.remove('has-open');
        }
      }

      const btn = group.querySelector('.accordion-header');
      const isOpen = group.classList.contains('open');
      if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

      const isReduceMotion = document.body.classList.contains('reduce-motion');
      const baseBehavior = isReduceMotion ? 'auto' : 'smooth';

      // Crucial: scroll to the group header so it stays pinned near the top
      // especially when sections above it are collapsing or when closing while sticky.
      // Sticky headers combined with scrolling provides the smoothest transition.
      const performScroll = (behavior = baseBehavior) => {
        group.scrollIntoView({ behavior: behavior, block: 'start' });
      };

      // Immediate call to start the movement
      performScroll(baseBehavior);

      if (!isReduceMotion) {
        // Multiple follow-ups to catch layout stabilization as sections collapse/expand
        setTimeout(() => performScroll('smooth'), 100);
        setTimeout(() => performScroll('smooth'), 250);
        // Final precision anchor with auto behavior
        setTimeout(() => performScroll('auto'), 400);
      } else {
        // Instant anchor for reduced motion
        setTimeout(() => performScroll('auto'), 50);
      }
    }

    window.toggleCard = function(cardElement) {
      const isExpanded = cardElement.classList.contains('expanded');
      
      // Close other expanded cards
      document.querySelectorAll('.item-card.expanded').forEach(card => {
        if (card !== cardElement) {
          card.classList.remove('expanded');
          card.setAttribute('aria-expanded', 'false');
        }
      });

      cardElement.classList.toggle('expanded');
      cardElement.setAttribute('aria-expanded', !isExpanded);
    };

    // --- Calculator Logic ---
    const greenInput = document.getElementById('greenInput');
    const brownInput = document.getElementById('brownInput');
    const greenVal = document.getElementById('greenVal');
    const brownVal = document.getElementById('brownVal');
    const statusBadge = document.getElementById('statusBadge');
    const statusDesc = document.getElementById('statusDesc');
    const ratioText = document.getElementById('ratioText');
    const indicatorFill = document.getElementById('indicatorFill');
    const moodIndicator = document.getElementById('moodIndicator');
    const recommendations = document.getElementById('recommendations');

    let currentRecIndex = 0;
    let currentStatusKey = null;

    const RECOMMENDATION_DATA = {
      danger: [
        {
          advice: "Your pile is Nitrogen heavy. It might start to smell and become soggy.",
          items: ["Dry leaves", "Shredded cardboard", "Wood chips", "Straw"]
        },
        {
          advice: "Excess moisture can lead to anaerobic conditions. Mix in some dry shredded newspaper.",
          items: ["Shredded paper", "Dry stalks", "Sawdust"]
        },
        {
          advice: "If it smells like ammonia, you have too many Greens. Bulk up the Carbon (Browns) immediately.",
          items: ["Egg cartons", "Dried mulch", "Cardboard"]
        }
      ],
      warning: [
        {
          advice: "Your pile is Carbon heavy. Decomposition will be extremely slow.",
          items: ["Fruit scraps", "Grass clippings", "Coffee grounds", "Vegetable peels"]
        },
        {
          advice: "A dry pile won't heat up. Add moisture and fresh nitrogen-rich materials to jumpstart the microbes.",
          items: ["Liquid seaweed", "Pantry scrapings", "Kitchen waste"]
        },
        {
          advice: "Nitrogen is the fuel for composting. If your pile is cold and brown, feed it more green food waste.",
          items: ["Old fruit", "Corn cobs (crushed)", "Rotting veggies"]
        }
      ],
      perfect: [
        {
          advice: "The balance is excellent! The microbes in your bin have exactly what they need.",
          items: []
        },
        {
          advice: "Ensure you keep it damp like a wrung-out sponge for optimal decomposition speed.",
          items: []
        },
        {
          advice: "Remember to turn the pile occasionally to add oxygen for aerobic breakdown.",
          items: []
        },
        {
          advice: "Adding a handful of finished compost or healthy garden soil can 'innoculate' your pile with beneficial microbes.",
          items: []
        }
      ]
    };

    function adjustValue(id, delta) {
      const input = document.getElementById(id);
      const newVal = parseInt(input.value) + delta;
      if (newVal >= parseInt(input.min) && newVal <= parseInt(input.max)) {
        input.value = newVal;
        updateCalculator();
      }
    }

    function updateCalculator() {
      let g = parseInt(greenInput.value);
      let b = parseInt(brownInput.value);
      
      greenVal.textContent = g;
      brownVal.textContent = b;

      const total = g + b;
      if (total === 0) {
        statusBadge.textContent = "Empty Bin";
        statusBadge.className = "status-badge";
        statusDesc.textContent = "Adjust the sliders to analyse your compost mix.";
        indicatorFill.style.width = "0%";
        indicatorFill.className = "indicator-fill";
        moodIndicator.textContent = "🕳️";
        moodIndicator.style.borderColor = "var(--color-border)";
        ratioText.textContent = "0% / 0%";
        recommendations.classList.remove('visible');
        currentStatusKey = null;
        return;
      }

      const greenPercent = Math.round((g / total) * 100);
      const brownPercent = 100 - greenPercent;
      
      indicatorFill.style.width = greenPercent + "%";
      ratioText.textContent = `${greenPercent}% / ${brownPercent}%`;

      let newStatusKey = "perfect";

      // Logic: Ideal range is roughly 30-50% Greens
      if (greenPercent > 55) {
        statusBadge.textContent = "Too Slimy";
        statusBadge.className = "status-badge status-danger";
        statusDesc.textContent = "Your pile is Nitrogen heavy. It might start to smell and become soggy.";
        indicatorFill.className = "indicator-fill status-danger";
        moodIndicator.textContent = "🤢";
        moodIndicator.style.borderColor = "var(--color-avoid-text)";
        newStatusKey = "danger";
      } else if (greenPercent < 20) {
        statusBadge.textContent = "Too Dry";
        statusBadge.className = "status-badge status-warning";
        statusDesc.textContent = "Your pile is Carbon heavy. Decomposition will be extremely slow.";
        indicatorFill.className = "indicator-fill status-warning";
        moodIndicator.textContent = "🏜️";
        moodIndicator.style.borderColor = "var(--color-brown-text)";
        newStatusKey = "warning";
      } else {
        statusBadge.textContent = "Pure Gold";
        statusBadge.className = "status-badge status-perfect";
        statusDesc.textContent = "The balance is excellent! The microbes in your bin have exactly what they need.";
        indicatorFill.className = "indicator-fill status-perfect";
        moodIndicator.textContent = "🌿";
        moodIndicator.style.borderColor = "var(--color-green-text)";
        newStatusKey = "perfect";
      }

      if (newStatusKey !== currentStatusKey) {
        currentStatusKey = newStatusKey;
        currentRecIndex = 0;
        renderRecommendation();
      }
    }

    window.cycleRecommendation = function() {
      if (!currentStatusKey) return;
      const recs = RECOMMENDATION_DATA[currentStatusKey];
      currentRecIndex = (currentRecIndex + 1) % recs.length;
      renderRecommendation();
    };

    function renderRecommendation() {
      if (!currentStatusKey) return;
      
      const recs = RECOMMENDATION_DATA[currentStatusKey];
      const rec = recs[currentRecIndex];
      
      recommendations.classList.add('visible');
      recommendations.innerHTML = `
        <h4>Expert Recommendation</h4>
        <p>${rec.advice}</p>
        ${rec.items.length > 0 ? `
          <div style="margin-top: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.4rem;">
            ${rec.items.map(item => `<span class="category-chip" style="background: rgba(255,255,255,0.05); color: var(--color-text); border: 1px solid var(--color-border);">${item}</span>`).join('')}
          </div>
        ` : ''}
        <div class="rec-footer">
          <span class="rec-counter">${currentRecIndex + 1} of ${recs.length}</span>
          <button class="cycle-btn" onclick="cycleRecommendation()">
            Next Tip 
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      `;
    }

    greenInput.addEventListener('input', updateCalculator);
    brownInput.addEventListener('input', updateCalculator);
    // Initialize calculator
    updateCalculator();

    // --- Settings Persistence & Logic ---
    const settingsBtn = document.getElementById('settingsBtn');
    const closeSettings = document.getElementById('closeSettings');
    const settingsOverlay = document.getElementById('settingsOverlay');
    const themeToggle = document.getElementById('themeToggle');
    const dyslexiaToggle = document.getElementById('dyslexiaToggle');
    const motionToggle = document.getElementById('motionToggle');
    const clearSearchBtn = document.getElementById('clearSearch');
    const statusRadios = document.querySelectorAll('input[name="status"]');

    function loadSettings() {
      const savedTheme = localStorage.getItem('gm-theme') || 'dark';
      const savedDyslexia = localStorage.getItem('gm-dyslexia') === 'true';
      const savedMotion = localStorage.getItem('gm-motion') === 'true';

      document.documentElement.setAttribute('data-theme', savedTheme);
      themeToggle.checked = savedTheme === 'dark';

      if (savedDyslexia) {
        document.body.classList.add('dyslexia-font');
        dyslexiaToggle.checked = true;
      }

      if (savedMotion) {
        document.body.classList.add('reduce-motion');
        document.documentElement.classList.add('reduce-motion');
        motionToggle.checked = true;
      }
    }

    let lastActiveElement = null;

    function openSettingsPanel() {
      lastActiveElement = document.activeElement;
      settingsOverlay.classList.add('open');
      // Delay focus slightly to let any CSS transition begin
      setTimeout(() => {
        closeSettings.focus();
      }, 50);
    }

    function closeSettingsPanel() {
      settingsOverlay.classList.remove('open');
      if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
        lastActiveElement.focus();
      }
    }

    settingsBtn.addEventListener('click', openSettingsPanel);

    closeSettings.addEventListener('click', closeSettingsPanel);

    settingsOverlay.addEventListener('click', (e) => {
      if (e.target === settingsOverlay) {
        closeSettingsPanel();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && settingsOverlay.classList.contains('open')) {
        closeSettingsPanel();
      }
    });

    // Trap focus inside modal
    settingsOverlay.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      
      const focusables = settingsOverlay.querySelectorAll('button, input');
      if (focusables.length === 0) return;
      
      const firstFocusable = focusables[0];
      const lastFocusable = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable || document.activeElement === settingsOverlay) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    });

    themeToggle.addEventListener('change', () => {
      const isDark = themeToggle.checked;
      const theme = isDark ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('gm-theme', theme);
    });

    dyslexiaToggle.addEventListener('change', () => {
      const isEnabled = dyslexiaToggle.checked;
      if (isEnabled) {
        document.body.classList.add('dyslexia-font');
      } else {
        document.body.classList.remove('dyslexia-font');
      }
      localStorage.setItem('gm-dyslexia', isEnabled);
    });

    motionToggle.addEventListener('change', () => {
      const isEnabled = motionToggle.checked;
      if (isEnabled) {
        document.body.classList.add('reduce-motion');
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.body.classList.remove('reduce-motion');
        document.documentElement.classList.remove('reduce-motion');
      }
      localStorage.setItem('gm-motion', isEnabled);
    });

    // Initialize Settings
    loadSettings();

    // Event Listeners
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (currentSearch.length > 0) {
        clearSearchBtn.classList.add('visible');
      } else {
        clearSearchBtn.classList.remove('visible');
      }
      renderItems();
    });

    clearSearchBtn.addEventListener('click', () => {
      // 1. Reset state
      currentSearch = '';
      currentFilter = 'All';
      currentStatus = 'all';
      searchInput.value = '';
      clearSearchBtn.classList.remove('visible');

      // 3. Update status radios
      statusRadios.forEach(radio => {
        radio.checked = radio.value === 'all';
      });

      // 4. Re-render
      renderItems();
      searchInput.focus();
    });

    statusRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        currentStatus = e.target.value;
        renderItems();
      });
    });

    // Initial render
    renderItems();
  
