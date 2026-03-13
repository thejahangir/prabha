export interface ProductVariant {
  id: string;
  name: string;
  colorCode?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
  ingredients?: string[];
  howToUse?: string;
  variants?: ProductVariant[];
  reviewsList?: Review[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Luminous Glow Serum',
    description: 'A lightweight, hydrating serum that leaves skin with a dewy, radiant finish. Infused with Vitamin C and Hyaluronic Acid.',
    price: 48,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.8,
    reviews: 124,
    isBestseller: true,
    ingredients: ['Vitamin C', 'Hyaluronic Acid', 'Niacinamide', 'Aloe Vera'],
    howToUse: 'Apply 2-3 drops to clean, damp skin morning and night. Follow with moisturizer.',
    variants: [
      { id: 'v1-30ml', name: '30ml / 1 oz' },
      { id: 'v1-50ml', name: '50ml / 1.7 oz' }
    ],
    reviewsList: [
      {
        id: 'r1',
        author: 'Sarah M.',
        rating: 5,
        date: 'October 12, 2025',
        content: 'This serum completely changed my skin! It feels so lightweight but gives the most beautiful, natural glow. I use it every morning and have noticed a huge difference in my skin texture.'
      },
      {
        id: 'r2',
        author: 'Jessica T.',
        rating: 4,
        date: 'September 28, 2025',
        content: 'Really nice serum. It absorbs quickly and doesn\'t leave a sticky residue. The only reason I gave it 4 stars is because I wish the bottle was a bit larger for the price.'
      }
    ]
  },
  {
    id: '2',
    name: 'Velvet Matte Lipstick',
    description: 'A highly pigmented, long-lasting matte lipstick that feels comfortable and non-drying on the lips.',
    price: 24,
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.6,
    reviews: 89,
    isNew: true,
    ingredients: ['Shea Butter', 'Vitamin E', 'Jojoba Oil'],
    howToUse: 'Apply directly to lips from the bullet or use a lip brush for precision.',
    variants: [
      { id: 'v2-ruby', name: 'Ruby Red', colorCode: '#9b111e' },
      { id: 'v2-rose', name: 'Dusty Rose', colorCode: '#d19c97' },
      { id: 'v2-coral', name: 'Coral Crush', colorCode: '#ff7f50' },
      { id: 'v2-nude', name: 'Nude Illusion', colorCode: '#d2b48c' }
    ]
  },
  {
    id: '3',
    name: 'Purifying Clay Mask',
    description: 'A deeply cleansing mask that draws out impurities and minimizes the appearance of pores without stripping the skin.',
    price: 36,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.9,
    reviews: 210,
    isBestseller: true,
    ingredients: ['Kaolin Clay', 'Bentonite Clay', 'Green Tea Extract', 'Salicylic Acid'],
    howToUse: 'Apply an even layer to clean, dry skin. Leave on for 10-15 minutes, then rinse thoroughly with warm water. Use 1-2 times a week.'
  },
  {
    id: '4',
    name: 'Hydrating Rose Mist',
    description: 'A refreshing facial mist that instantly hydrates and revitalizes the skin, leaving a subtle rose scent.',
    price: 28,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.5,
    reviews: 65,
    ingredients: ['Rose Water', 'Glycerin', 'Chamomile Extract'],
    howToUse: 'Spritz onto face and neck as needed throughout the day for a boost of hydration.'
  },
  {
    id: '5',
    name: 'Nourishing Body Butter',
    description: 'A rich, whipped body butter that melts into the skin, providing intense moisture and leaving it feeling soft and supple.',
    price: 42,
    category: 'Body Care',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.7,
    reviews: 156,
    isBestseller: true,
    ingredients: ['Shea Butter', 'Cocoa Butter', 'Coconut Oil', 'Sweet Almond Oil'],
    howToUse: 'Massage generously into skin after bathing or showering, focusing on dry areas.'
  },
  {
    id: '6',
    name: 'Perfecting Concealer',
    description: 'A creamy, buildable concealer that covers imperfections and brightens the under-eye area without creasing.',
    price: 26,
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.4,
    reviews: 92,
    isNew: true,
    ingredients: ['Hyaluronic Acid', 'Peptides', 'Caffeine'],
    howToUse: 'Apply a small amount to desired areas and blend with a brush, sponge, or fingertips.'
  },
  {
    id: '7',
    name: 'Gentle Foaming Cleanser',
    description: 'A mild, sulfate-free cleanser that effectively removes dirt, oil, and makeup without disrupting the skin barrier.',
    price: 32,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.8,
    reviews: 185,
    ingredients: ['Ceramides', 'Glycerin', 'Oat Extract'],
    howToUse: 'Massage a small amount onto damp skin in circular motions. Rinse thoroughly with lukewarm water.'
  },
  {
    id: '8',
    name: 'Volumizing Mascara',
    description: 'A clump-free mascara that lifts, lengthens, and adds dramatic volume to lashes for a wide-awake look.',
    price: 22,
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.5,
    reviews: 110,
    ingredients: ['Beeswax', 'Carnauba Wax', 'Panthenol'],
    howToUse: 'Wiggle the wand from the base of the lashes to the tips. Apply additional coats for more volume.'
  },
  {
    id: '9',
    name: 'Exfoliating Body Scrub',
    description: 'A gentle sugar scrub that buffs away dead skin cells, revealing smoother, more radiant skin.',
    price: 34,
    category: 'Body Care',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.6,
    reviews: 78,
    ingredients: ['Sucrose', 'Coconut Oil', 'Shea Butter', 'Coffee Extract'],
    howToUse: 'Massage onto damp skin in circular motions. Rinse thoroughly. Use 2-3 times a week.'
  },
  {
    id: '10',
    name: 'Daily SPF 30 Sunscreen',
    description: 'A lightweight, invisible mineral sunscreen that protects against UVA/UVB rays without leaving a white cast.',
    price: 38,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.9,
    reviews: 342,
    isBestseller: true,
    ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Squalane', 'Vitamin E'],
    howToUse: 'Apply generously and evenly as the last step in your skincare routine, 15 minutes before sun exposure.'
  },
  {
    id: '11',
    name: 'Signature Floral Perfume',
    description: 'A modern, elegant fragrance with notes of jasmine, rose, and warm sandalwood.',
    price: 85,
    category: 'Fragrance',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.7,
    reviews: 125,
    isNew: true,
    ingredients: ['Alcohol Denat', 'Fragrance (Parfum)', 'Water (Aqua)'],
    howToUse: 'Spritz onto pulse points (wrists, neck, behind ears) and let it dry down naturally.'
  },
  {
    id: '12',
    name: 'The Starter Set',
    description: 'Our three best-selling skincare essentials in travel-friendly sizes. Perfect for trying out the brand or taking on the go.',
    price: 65,
    category: 'Sets',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.8,
    reviews: 215,
    isBestseller: true,
    ingredients: ['Various - see individual products'],
    howToUse: 'Follow the instructions for each individual product in the set.'
  }
];

export const categories = [
  'All',
  'Skincare',
  'Makeup',
  'Body Care',
  'Fragrance',
  'Sets'
];
