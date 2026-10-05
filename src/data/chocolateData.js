/**
 * Maison Éclat Cacao - Product Catalog & Terroir Data
 * Pure JavaScript
 */

export const PRODUCTS = [
  {
    id: "bar-chuao-75",
    name: "Chuao Grand Cru 75%",
    category: "bars",
    subCategory: "Single-Origin Dark",
    origin: "Chuao Valley, Venezuela",
    cacaoPercentage: 75,
    concheTime: "72 Hours",
    harvestYear: "2025/2026",
    price: 16.50,
    weight: "75g / 2.6 oz",
    shortDesc: "Legendary Venezuelan heirloom Criollo with notes of sun-dried blueberries, dark honey, and peated oak.",
    description: "Nestled between mist-shrouded cloud forests and the Caribbean sea, Chuao is only reachable by fisherman's boat. The beans undergo 7 days of fermentation in plantain leaves and slow granite conching, yielding an incomparably silky melt and complex wild berry notes.",
    flavorNotes: ["Wild Blueberries", "Dark Blossom Honey", "Peated Oak", "Bergamot"],
    flavorRadar: { fruity: 88, floral: 70, roasted: 75, earthy: 60, acidity: 65 },
    ingredients: "Organic Venezuelan Cacao Beans (75%), Organic Cane Sugar (25%), Organic Pure Cocoa Butter. Strictly no lecithin, no additives.",
    certifications: ["Direct Trade", "Heirloom Cacao Preserved", "Single Plantation", "Vegan"],
    awards: "World Cacao Trophy Gold Medal 2025",
    inStock: true,
    rating: 4.96,
    reviewsCount: 142
  },
  {
    id: "bar-sambirano-72",
    name: "Sambirano Reserve 72%",
    category: "bars",
    subCategory: "Single-Origin Dark",
    origin: "Sambirano Valley, Madagascar",
    cacaoPercentage: 72,
    concheTime: "68 Hours",
    harvestYear: "2026 First Flush",
    price: 15.00,
    weight: "75g / 2.6 oz",
    shortDesc: "Vibrant volcanic terroir delivering burst notes of raspberry, passionfruit zest, and pink peppercorn.",
    description: "Harvested along the shaded alluvial banks of the Sambirano River. This batch exhibits the iconic bright citrus acidity and crimson fruit aromatics that have made northern Malagasy cacao the jewel of modern haute patisserie.",
    flavorNotes: ["Ripe Raspberry", "Passionfruit Zest", "Pink Peppercorn", "Tamarind"],
    flavorRadar: { fruity: 96, floral: 78, roasted: 55, earthy: 45, acidity: 85 },
    ingredients: "Organic Madagascar Cacao Beans (72%), Organic Cane Sugar (28%), Organic Cocoa Butter. Certified Organic & Direct Sourced.",
    certifications: ["Organic Bio", "Rainforest Agroforestry", "Vegan"],
    awards: "European Craft Chocolate Award Winner",
    inStock: true,
    rating: 4.92,
    reviewsCount: 98
  },
  {
    id: "bar-hacienda-80",
    name: "Los Ríos Nacional 80%",
    category: "bars",
    subCategory: "Single-Origin Dark",
    origin: "Los Ríos Province, Ecuador",
    cacaoPercentage: 80,
    concheTime: "80 Hours",
    harvestYear: "2025 Vintage",
    price: 16.00,
    weight: "75g / 2.6 oz",
    shortDesc: "Ancient Arriba Nacional with heady nocturnal jasmine blossom, fresh walnut, and velvety dark caramel.",
    description: "Pure heirloom Nacional cacao from centenary trees. Its remarkable gentleness allows an 80% cacao density without astringency, releasing an intoxicating perfumed floral bouquet and rich forest floor depths.",
    flavorNotes: ["Jasmine Blossom", "Green Walnut", "Dark Molasses", "Black Truffle"],
    flavorRadar: { fruity: 62, floral: 94, roasted: 80, earthy: 82, acidity: 40 },
    ingredients: "Centenary Arriba Nacional Cacao (80%), Raw Cane Sugar (20%). Zero emulsifiers, unbleached cocoa butter.",
    certifications: ["Direct Trade", "Old-Growth Canopy Protected", "Vegan"],
    awards: "Salon du Chocolat Paris Excellence 2025",
    inStock: true,
    rating: 4.98,
    reviewsCount: 164
  },
  {
    id: "bar-sierra-85",
    name: "Sierra Nevada Deep Cru 85%",
    category: "bars",
    subCategory: "High-Percentage Dark",
    origin: "Sierra Nevada de Santa Marta, Colombia",
    cacaoPercentage: 85,
    concheTime: "84 Hours",
    harvestYear: "2026 Micro-Lot",
    price: 17.00,
    weight: "75g / 2.6 oz",
    shortDesc: "High-altitude mountain cacao yielding bold panela, toasted cardamom, and cedar cigar box complexities.",
    description: "Grown by indigenous Arhuaco guardians at the world's highest coastal mountain range. Dried on raised cedar trays beneath the equatorial sun, yielding profound woodsy balance, deep resonant cocoa mass, and zero harsh bitterness.",
    flavorNotes: ["Panela Sugar", "Green Cardamom", "Spanish Cedar", "Espresso Crema"],
    flavorRadar: { fruity: 50, floral: 60, roasted: 92, earthy: 88, acidity: 35 },
    ingredients: "Arhuaco Heirloom Cacao (85%), Organic Panela Sugar (15%). 100% Direct Fair Compensation.",
    certifications: ["Indigenous Cooperative", "Zero Soy", "Vegan"],
    awards: "International Chocolate Gold 2026",
    inStock: true,
    rating: 4.95,
    reviewsCount: 87
  },
  {
    id: "box-haute-bonbons-9",
    name: "Le Coffret Découverte (9 Pcs)",
    category: "bonbons",
    subCategory: "Hand-Painted Bonbons",
    origin: "Handcrafted in Lyon Atelier",
    cacaoPercentage: 70,
    concheTime: "Artisanal Ganache",
    harvestYear: "Fresh Weekly Batch",
    price: 34.00,
    weight: "135g / 9 Hand-Cast Pieces",
    shortDesc: "Jewel-glazed artisan ganaches and pralines infused with rare single-origin coulis and alpine botanicals.",
    description: "Each bonbon is hand-shelled with a 1mm crisp snap of 70% Grand Cru dark chocolate and brushed with natural fruit lacquers and mineral mica. Flavors include Guerande Fleur de Sel Caramel, Tahitian Smoked Vanilla, Sicilian Bronte Pistachio, and Yuzu Green Mandarin.",
    flavorNotes: ["Sea Salt Caramel", "Smoked Vanilla", "Bronte Pistachio", "Yuzu Ganache"],
    flavorRadar: { fruity: 85, floral: 80, roasted: 85, earthy: 65, acidity: 70 },
    ingredients: "Grand Cru Dark & Milk Chocolate, Fresh Alpine Butter, Organic Cream, Tahitian Vanilla, Sicilian Pistachios, Guerande Fleur de Sel, Fruit Purees, Natural Cocoa Butter Colors.",
    certifications: ["Artisan Master Guild", "Fresh Cream Ganache", "Palm-Oil Free"],
    awards: "Meilleur Ouvrier de France Selection",
    inStock: true,
    rating: 4.99,
    reviewsCount: 210
  },
  {
    id: "box-haute-bonbons-18",
    name: "Le Grand Écrin Imperial (18 Pcs)",
    category: "bonbons",
    subCategory: "Gift Coffret",
    origin: "Lyon Atelier Masterpiece",
    cacaoPercentage: 72,
    concheTime: "Curated Ganaches",
    harvestYear: "Limited Weekly Edition",
    price: 64.00,
    weight: "270g / 18 Hand-Cast Pieces",
    shortDesc: "Our premier velvet presentation coffret housing the complete collection of 18 signature house recipes.",
    description: "Housed in our signature rigid midnight-linen box embossed with gold foil leaf. Includes single-origin liquid center pralines, infusion ganaches of Darjeeling first flush, elderflower pear, and peated Islay single malt.",
    flavorNotes: ["Darjeeling Tea", "Islay Malt Truffle", "Hazelnut Feuilletine", "Passionfruit Caramel"],
    flavorRadar: { fruity: 80, floral: 85, roasted: 90, earthy: 75, acidity: 65 },
    ingredients: "Grand Cru Cacao Mass, Cocoa Butter, Fresh French Butter, Heavy Cream, Selected Botanicals, Nuts, Natural Spices. Contains Dairy and Tree Nuts.",
    certifications: ["Luxury Gift Packaging", "Cold-Chain Insulated", "Palm-Oil Free"],
    awards: "Best Luxury Confectionery 2025",
    inStock: true,
    rating: 5.0,
    reviewsCount: 124
  },
  {
    id: "drinking-parisian-velvet",
    name: "Chocolat Chaud Parisien (Velvet Powder)",
    category: "drinking",
    subCategory: "Drinking Chocolate",
    origin: "Lyon, France",
    cacaoPercentage: 70,
    concheTime: "Granulated Flakes",
    harvestYear: "2026 Batch",
    price: 22.00,
    weight: "300g Tin / 10-12 Servings",
    shortDesc: "Pure shaved 70% dark chocolate flakes designed to melt seamlessly into hot milk or plant milk for dense velvet cup.",
    description: "Not cocoa powder, but micro-shaved whole Grand Cru chocolate disks with rich natural cocoa butter. Prepares in 4 minutes on the stovetop to recreate the thick, glossy drinking chocolate served in historical Parisian tearooms.",
    flavorNotes: ["Dark Chocolate Fondant", "Bourbon Vanilla", "Brown Butter", "Warm Cinnamon"],
    flavorRadar: { fruity: 60, floral: 55, roasted: 95, earthy: 70, acidity: 30 },
    ingredients: "Shaved Single-Origin Chocolate (70% Cacao, Cane Sugar, Cocoa Butter), Tahitian Vanilla Pod Seeds, A Pinch of Atlantic Grey Salt.",
    certifications: ["Vegan (when prepared with oat/almond)", "No Cornstarch", "No Soy"],
    awards: "Epicure d'Or Paris 2024",
    inStock: true,
    rating: 4.94,
    reviewsCount: 156
  },
  {
    id: "drinking-mayan-spiced",
    name: "Mayan Elixir Ancestral Spiced",
    category: "drinking",
    subCategory: "Drinking Chocolate",
    origin: "Soconusco Heritage Beans",
    cacaoPercentage: 78,
    concheTime: "Stone-Ground",
    harvestYear: "2026 Batch",
    price: 24.00,
    weight: "280g Hand-Stamped Tin",
    shortDesc: "Ancient Mesoamerican formulation stone-ground with chipotle, allspice berries, roasted achiote, and Ceylon cinnamon.",
    description: "Inspired by the ceremonial xocolatl consumed by pre-Columbian nobility. Stone-ground in traditional volcanic basalt molinos, creating a warming, invigorating tonic with gentle smoky spice and rich dark chocolate depth.",
    flavorNotes: ["Smoky Chipotle", "Ceylon Cinnamon", "Allspice Berries", "Dark Molasses"],
    flavorRadar: { fruity: 45, floral: 50, roasted: 98, earthy: 90, acidity: 40 },
    ingredients: "Stone-Ground Roasted Cacao Nibs (78%), Unrefined Muscovado, Ceylon Cinnamon, Whole Chipotle Flakes, Jamaican Allspice, Sea Salt.",
    certifications: ["Heritage Formula", "Organic Spices", "Vegan"],
    awards: "Specialty Food Guild Award",
    inStock: true,
    rating: 4.89,
    reviewsCount: 73
  },
  {
    id: "flight-grand-cru-bars",
    name: "Terroir Master Flight (4 Bars)",
    category: "flights",
    subCategory: "Tasting Flight",
    origin: "Ecuador, Venezuela, Madagascar, Colombia",
    cacaoPercentage: 76,
    concheTime: "Comparative Tasting",
    harvestYear: "2026 Harvest",
    price: 58.00,
    weight: "4 x 75g / 300g Total",
    shortDesc: "The ultimate comparative terroir voyage: four single-origin bars packaged with sommelier tasting wheel.",
    description: "An educational and sensory journey across four distinct microclimates. Includes Chuao 75%, Sambirano 72%, Los Ríos 80%, and Sierra Nevada 85%, complete with tasting notes booklet and pairing recommendations for wine and coffee.",
    flavorNotes: ["Red Fruit", "Jasmine Floral", "Cigar Tobacco", "Panela Spice"],
    flavorRadar: { fruity: 85, floral: 80, roasted: 85, earthy: 80, acidity: 70 },
    ingredients: "Four sealed 75g bars, each consisting exclusively of single-origin heirloom cacao and organic cane sugar.",
    certifications: ["Complete Tasting Guide", "Comparative Origin Kit", "Vegan"],
    awards: "Editor's Choice Connoisseur Gift",
    inStock: true,
    rating: 4.99,
    reviewsCount: 189
  }
];

export const BONBON_VARIETIES = [
  {
    id: "fleur-sel-caramel",
    name: "Guerande Fleur de Sel Caramel",
    type: "Liquid Amber Caramel",
    cacao: "70% Dark Shell",
    color: "#E5A93C",
    accent: "#B88746",
    notes: "Slow-cooked cream caramel infused with grey sea salt",
    pairing: "Single Origin Espresso",
    description: "Flowing buttery amber caramel enrobed in a crisp snapping shell of Venezuelan dark chocolate."
  },
  {
    id: "tahitian-smoked-vanilla",
    name: "Tahitian Smoked Vanilla Ganache",
    type: "Silky Ganache",
    cacao: "68% Dark Shell",
    color: "#D8C7A5",
    accent: "#6E4E2C",
    notes: "Cold-smoked Tahitian vanilla bean in heavy Alpine cream",
    pairing: "Aged Speyside Scotch",
    description: "Floral vanilla pod seeds steeped over 48 hours for an ethereal, warm aromatic lift."
  },
  {
    id: "bronte-pistachio-praline",
    name: "Sicilian Bronte Pistachio Praline",
    type: "Stone-Ground Crunch",
    cacao: "65% Dark Shell",
    color: "#8DA765",
    accent: "#557432",
    notes: "Roasted emerald pistachios with feuilletine lace crisp",
    pairing: "Dry Prosecco / Franciacorta",
    description: "Slow-roasted DOP pistachios from the slopes of Mount Etna, crushed into a delicate crunchy praline."
  },
  {
    id: "yuzu-mandarin-coulis",
    name: "Kochi Yuzu & Green Mandarin",
    type: "Dual-Layer Gelée & Ganache",
    cacao: "72% Dark Shell",
    color: "#F4C430",
    accent: "#D48B16",
    notes: "Tart Japanese citrus coulis over dark Madagascar ganache",
    pairing: "Gyokuro Green Tea",
    description: "An exhilarating citrus bite followed by the dark chocolate foundation of red fruit and cocoa."
  },
  {
    id: "black-forest-kirsch",
    name: "Wild Morello Cherry & Kirsch",
    type: "Compote Ganache",
    cacao: "74% Dark Shell",
    color: "#881B2B",
    accent: "#4D0A13",
    notes: "Tart sour cherry compote touched with Black Forest brandy",
    pairing: "Pinot Noir Reserve",
    description: "Juicy organic morello cherry reduction layered over rich 74% dark chocolate ganache."
  },
  {
    id: "piedmont-hazelnut-cremini",
    name: "Piedmont IGP Hazelnut Gianduja",
    type: "Melting Gianduja",
    cacao: "Dark Milk Shell",
    color: "#B48356",
    accent: "#724723",
    notes: "Round Langhe hazelnuts conched into velvet gianduja",
    pairing: "Cappuccino / Flat White",
    description: "Legendary trilobata hazelnuts slow roasted and stone conched until impossibly melt-in-mouth."
  },
  {
    id: "earl-grey-bergamot",
    name: "First-Flush Earl Grey & Bergamot",
    type: "Infused Ganache",
    cacao: "70% Dark Shell",
    color: "#6D537E",
    accent: "#3F2650",
    notes: "Calabrian bergamot oil with whole leaf organic black tea",
    pairing: "Late Harvest Riesling",
    description: "Delicate tannins of high-grown black tea rounded by cold-pressed Calabrian citrus peel."
  },
  {
    id: "islay-peated-truffle",
    name: "Islay Peated Single Malt 85%",
    type: "Smoky Truffle Ganache",
    cacao: "85% Intense Dark Shell",
    color: "#9C7A4E",
    accent: "#4A3319",
    notes: "Smoked sea peat, iodine, leather, and deep roasted cocoa",
    pairing: "Neat Peated Whisky",
    description: "For the adventurous purist. Unfiltered 12-year peat smoke cut with robust single-origin Colombian cacao."
  },
  {
    id: "passionfruit-maracuja",
    name: "Amazonian Passionfruit Maracujá",
    type: "Tropical Ganache",
    cacao: "70% Dark Shell",
    color: "#E86F2D",
    accent: "#AC3E09",
    notes: "Bright tropical acidity balanced with creamy cocoa butter",
    pairing: "Champagne Brut",
    description: "A sunburst of tart maracujá pulp hand-blended into a silky white and dark dual emulsion."
  }
];

export const TERROIR_ESTATES = [
  {
    id: "chuao",
    name: "Chuao Plantation",
    country: "Venezuela",
    region: "Aragua Coastal Valley",
    coordinates: "10°30' N, 67°31' W",
    varietal: "Criollo & Trinitario Antiguo",
    elevation: "20 - 150m Above Sea Level",
    harvestSeason: "November to March",
    climate: "Tropical Maritime Cloud Forest",
    dryingMethod: "Sun-dried in communal church square",
    profile: "Complex blue fruits, cane syrup, gentle tobacco, and long harmonious melt.",
    soil: "Rich river sediment washed from coastal cordillera mountains.",
    story: "Reachable only by wooden fishing boats from Puerto Colombia, Chuao has guarded its communal cacao drying grounds since 1660. The village cooperative preserves centuries-old seed lines unpolluted by modern hybrids."
  },
  {
    id: "sambirano",
    name: "Sambirano Valley",
    country: "Madagascar",
    region: "Diana Region, Ambanja",
    coordinates: "13°40' S, 48°27' E",
    varietal: "Trinitario & Red Criollo",
    elevation: "80 - 220m Above Sea Level",
    harvestSeason: "May to November",
    climate: "Humid microclimate sheltered by Tsaratanana massif",
    dryingMethod: "Raised wooden tables under tropical sun",
    profile: "Electric raspberry acidity, yellow plum, passionfruit, and delicate pink peppercorn.",
    soil: "Fertile alluvial loam enriched by annual seasonal river flooding.",
    story: "Nestled in northwestern Madagascar, the Sambirano microclimate benefits from unique trade winds and shade-canopy mango, vanilla, and pepper vines that infuse the terroir with astonishing fruitiness."
  },
  {
    id: "hacienda-victoria",
    name: "Hacienda Victoria Estate",
    country: "Ecuador",
    region: "Guayas & Los Ríos Basin",
    coordinates: "01°55' S, 79°48' W",
    varietal: "100% Ancient Arriba Nacional",
    elevation: "50 - 120m Above Sea Level",
    harvestSeason: "June to December",
    climate: "Equatorial Andean foothill breezes",
    dryingMethod: "Slow solar tunnel with constant aeration",
    profile: "Nocturnal jasmine, green walnut, wild honey, and deep velvety forest notes.",
    soil: "Volcanic ash-rich clay with exceptional natural mineral balance.",
    story: "Ecuador's Nacional variety was thought to be nearly extinct until botanists recovered heirloom clones. Hacienda Victoria cultivates these rare trees under strict ecological agroforestry without chemical inputs."
  },
  {
    id: "sierra-nevada",
    name: "Sierra Nevada Sacred Grove",
    country: "Colombia",
    region: "Santa Marta Foothills",
    coordinates: "10°52' N, 73°43' W",
    varietal: "Arhuaco Businchari Ancestral",
    elevation: "600 - 1,100m High Altitude",
    harvestSeason: "October to February",
    climate: "High-altitude tropical mountain forest",
    dryingMethod: "Cedar box fermentation & mountain sun",
    profile: "Panela brown sugar, cardamom, toasted cedar, and dark espresso crema.",
    soil: "Pristine mountain humus fed by glacial runoffs.",
    story: "Cultivated by the indigenous Arhuaco communities who regard cacao as a sacred peace plant connecting earthly roots with celestial canopy. Every harvest is conducted with ancestral blessing rituals."
  }
];

export const CRAFTSMANSHIP_STEPS = [
  {
    step: "01",
    title: "Agroforestry Harvesting",
    duration: "Peak Ripeness",
    tool: "Hand Machete & Bamboo Poles",
    summary: "Only shade-grown heirloom pods at exact chromatic ripeness are gathered by hand to prevent damaging branch blossom cushions."
  },
  {
    step: "02",
    title: "Banana Leaf Fermentation",
    duration: "5 to 7 Days",
    tool: "Cedar Cascades & Wild Flora",
    summary: "Beans and sweet white pulp are swaddled in fresh plantain leaves. Natural microbial fermentation reaches 50°C, transforming tannins into complex aroma precursors."
  },
  {
    step: "03",
    title: "Equatorial Solar Drying",
    duration: "7 to 10 Days",
    tool: "Raised Slatted Redwood Trays",
    summary: "Slow, even aeration under the tropical sun reduces moisture to a stable 7% while allowing volatile acetic acid to gently evaporate."
  },
  {
    step: "04",
    title: "Gentle Drum Roasting",
    duration: "25 to 40 Minutes (115°C - 130°C)",
    tool: "Vintage Cast-Iron Ball Roaster",
    summary: "Tailored origin roasting curves unlock each estate's signature floral, fruit, or nutty notes without scorching delicate cacao fats."
  },
  {
    step: "05",
    title: "Granite Stone Melange & Conche",
    duration: "60 to 84 Continuous Hours",
    tool: "Granite Wheel Melanger",
    summary: "Heavy rotating granite stones gently crush nibs below 15 microns. Hours of oxygenation round off sharp bitterness, producing silk texture."
  },
  {
    step: "06",
    title: "Marble Slab Hand Tempering",
    duration: "Craftsman Touch (31.5°C)",
    tool: "Italian Carrara Marble & Palette Knives",
    summary: "Liquid chocolate is agitated across chilled marble to organize stable Beta-V cocoa butter crystals, guaranteeing mirror gloss and a resonant snap."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Maison Éclat's Chuao 75% bar has the most astonishingly clean snap and velvety evolution of wild berry notes I have ever reviewed. It defines true high-conche craft.",
    author: "Elena Rostova",
    role: "International Chocolate Sommelier & Sensory Judge",
    location: "Geneva, Switzerland",
    verifiedPurchase: true,
    rating: 5
  },
  {
    quote: "The custom tasting box allows our private salon guests to experience single-malt infusions and yuzu ganaches that rival the greatest confectionery houses of Paris.",
    author: "Chef Laurent Mercier",
    role: "Michelin 2-Star Executive Pastry Chef",
    location: "Lyon, France",
    verifiedPurchase: true,
    rating: 5
  },
  {
    quote: "Their Parisian drinking chocolate is uncompromised luxury. Shaved whole chocolate with authentic cocoa butter instead of cheap powder. My morning ritual is forever changed.",
    author: "Clara Vance",
    role: "Fine Food & Wine Contributor, Epikur",
    location: "New York, USA",
    verifiedPurchase: true,
    rating: 5
  }
];

export const BRAND_VALUES = [
  {
    title: "100% Direct Trade",
    metric: "3.4x Fairtrade Minimum",
    description: "We pay directly to our 14 family partner estates, bypassing commodity exchanges to invest in farmer livelihoods."
  },
  {
    title: "Zero Artificial Additives",
    metric: "3 Pure Ingredients Max",
    description: "Cacao beans, unrefined cane sugar, and raw cocoa butter. Strictly no soy lecithin, palm oil, or synthetic vanillin."
  },
  {
    title: "Climate-Controlled Transit",
    metric: "100% Thermal Insulation",
    description: "Shipped in biodegradable wool-insulated packaging with non-toxic chill packs ensuring pristine snap upon arrival."
  }
];
