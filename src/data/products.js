// ============================================================================
// DEMO PRODUCT CATALOGUE
// ----------------------------------------------------------------------------
// This is placeholder/demo data for the template. Replace with the real
// client catalogue (can grow to 50–100 items using this same shape).
//
// images: use 'PLACEHOLDER' until real photos exist — ProductCard/CakeArt
//         will render an illustrated placeholder instead of a broken image.
//         Once you have real photos, replace with real paths, e.g.
//         images: ['/assets/images/cakes/chocolate-truffle.jpg']
// art:    controls the placeholder illustration's colour palette + icon.
//         Palettes: berry | choco | vanilla | red | gold | mint | blue |
//         pink | black | rainbow
// ============================================================================

const products = [
  {
    id: 'p01', name: 'Chocolate Truffle Cake', category: 'chocolate',
    description: 'Rich layers of chocolate sponge with silky chocolate truffle cream and a chocolate shard crown.',
    images: ['PLACEHOLDER'], art: { palette: 'choco', icon: '🍫' },
    startingPrice: 799, sizes: ['0.5 kg', '1 kg', '1.5 kg', '2 kg'],
    flavours: ['Dark Chocolate', 'Belgian Chocolate'], egglessAvailable: true,
    occasions: ['birthday', 'celebration'], featured: true, popular: true, available: true, sortOrder: 1
  },
  {
    id: 'p02', name: 'Classic Red Velvet Cake', category: 'birthday',
    description: 'Soft red velvet sponge layered with cream cheese frosting. A timeless birthday favourite.',
    images: ['PLACEHOLDER'], art: { palette: 'red', icon: '❤️' },
    startingPrice: 849, sizes: ['0.5 kg', '1 kg', '1.5 kg', '2 kg'],
    flavours: ['Red Velvet'], egglessAvailable: true,
    occasions: ['birthday', 'anniversary'], featured: true, popular: true, available: true, sortOrder: 2
  },
  {
    id: 'p03', name: 'Number 1 Birthday Cake', category: 'birthday',
    description: 'A fun number-shaped cake iced in bright buttercream — perfect for a first birthday.',
    images: ['PLACEHOLDER'], art: { palette: 'pink', icon: '1️⃣' },
    startingPrice: 999, sizes: ['1 kg', '1.5 kg', '2 kg'],
    flavours: ['Vanilla', 'Chocolate'], egglessAvailable: true,
    occasions: ['birthday', 'kids'], featured: false, popular: true, available: true, sortOrder: 3
  },
  {
    id: 'p04', name: 'Elegant Rose Anniversary Cake', category: 'anniversary',
    description: 'Hand-piped buttercream roses cascading over a soft vanilla sponge — designed for a milestone.',
    images: ['PLACEHOLDER'], art: { palette: 'pink', icon: '🌹' },
    startingPrice: 1299, sizes: ['1 kg', '1.5 kg', '2 kg', '3 kg'],
    flavours: ['Vanilla', 'Butterscotch'], egglessAvailable: true,
    occasions: ['anniversary', 'wedding'], featured: true, popular: false, available: true, sortOrder: 4
  },
  {
    id: 'p05', name: 'Golden Heart Anniversary Cake', category: 'anniversary',
    description: 'A two-tier heart cake finished with edible gold leaf and a personalised message plaque.',
    images: ['PLACEHOLDER'], art: { palette: 'gold', icon: '💛' },
    startingPrice: 1599, sizes: ['1.5 kg', '2 kg', '3 kg'],
    flavours: ['Chocolate', 'Coffee'], egglessAvailable: true,
    occasions: ['anniversary'], featured: false, popular: false, available: true, sortOrder: 5
  },
  {
    id: 'p06', name: 'Marble Drip Designer Cake', category: 'designer',
    description: 'Smooth marble-effect icing finished with a bold chocolate drip and gold shards.',
    images: ['PLACEHOLDER'], art: { palette: 'black', icon: '🖤' },
    startingPrice: 1499, sizes: ['1 kg', '1.5 kg', '2 kg'],
    flavours: ['Chocolate', 'Red Velvet'], egglessAvailable: true,
    occasions: ['birthday', 'celebration'], featured: true, popular: true, available: true, sortOrder: 6
  },
  {
    id: 'p07', name: 'Watercolour Floral Cake', category: 'designer',
    description: 'Hand-painted watercolour florals over a matte buttercream finish — a statement centrepiece.',
    images: ['PLACEHOLDER'], art: { palette: 'mint', icon: '🌸' },
    startingPrice: 1799, sizes: ['1.5 kg', '2 kg', '3 kg'],
    flavours: ['Vanilla', 'Blueberry'], egglessAvailable: true,
    occasions: ['wedding', 'celebration'], featured: false, popular: false, available: true, sortOrder: 7
  },
  {
    id: 'p08', name: 'Photo Print Birthday Cake', category: 'photo',
    description: 'Your favourite photo printed on edible icing sheet, set on a soft vanilla base.',
    images: ['PLACEHOLDER'], art: { palette: 'blue', icon: '🖼️' },
    startingPrice: 899, sizes: ['0.5 kg', '1 kg', '1.5 kg'],
    flavours: ['Vanilla', 'Chocolate', 'Pineapple'], egglessAvailable: true,
    occasions: ['birthday', 'celebration'], featured: true, popular: true, available: true, sortOrder: 8
  },
  {
    id: 'p09', name: 'Photo Cake for Kids', category: 'photo',
    description: 'A bright, playful photo cake sized right for a children\u2019s party table.', 
    images: ['PLACEHOLDER'], art: { palette: 'rainbow', icon: '🎈' },
    startingPrice: 949, sizes: ['0.5 kg', '1 kg', '1.5 kg'],
    flavours: ['Vanilla', 'Chocolate'], egglessAvailable: true,
    occasions: ['kids', 'birthday'], featured: false, popular: false, available: true, sortOrder: 9
  },
  {
    id: 'p10', name: 'Eggless Vanilla Bean Cake', category: 'eggless',
    description: '100% eggless vanilla sponge with real vanilla bean specks and light whipped cream.',
    images: ['PLACEHOLDER'], art: { palette: 'vanilla', icon: '🥚' },
    startingPrice: 749, sizes: ['0.5 kg', '1 kg', '1.5 kg', '2 kg'],
    flavours: ['Vanilla'], egglessAvailable: true,
    occasions: ['birthday', 'celebration'], featured: false, popular: true, available: true, sortOrder: 10
  },
  {
    id: 'p11', name: 'Eggless Chocolate Fudge Cake', category: 'eggless',
    description: 'Dense, fudgy eggless chocolate cake finished with a glossy ganache glaze.',
    images: ['PLACEHOLDER'], art: { palette: 'choco', icon: '🥚' },
    startingPrice: 799, sizes: ['0.5 kg', '1 kg', '1.5 kg', '2 kg'],
    flavours: ['Chocolate Fudge'], egglessAvailable: true,
    occasions: ['birthday', 'anniversary'], featured: false, popular: false, available: true, sortOrder: 11
  },
  {
    id: 'p12', name: 'Cartoon Theme Kids Cake', category: 'kids',
    description: 'A playful character-themed cake with fondant toppers — tell us the theme and we\u2019ll design it.',
    images: ['PLACEHOLDER'], art: { palette: 'rainbow', icon: '🧸' },
    startingPrice: 1199, sizes: ['1 kg', '1.5 kg', '2 kg'],
    flavours: ['Vanilla', 'Chocolate', 'Butterscotch'], egglessAvailable: true,
    occasions: ['kids', 'birthday'], featured: true, popular: true, available: true, sortOrder: 12
  },
  {
    id: 'p13', name: 'Unicorn Fantasy Cake', category: 'kids',
    description: 'Pastel buttercream, a fondant unicorn horn and edible glitter — a kids\u2019 party favourite.', 
    images: ['PLACEHOLDER'], art: { palette: 'pink', icon: '🦄' },
    startingPrice: 1299, sizes: ['1 kg', '1.5 kg', '2 kg'],
    flavours: ['Vanilla', 'Strawberry'], egglessAvailable: true,
    occasions: ['kids', 'birthday'], featured: false, popular: false, available: true, sortOrder: 13
  },
  {
    id: 'p14', name: 'Classic Three-Tier Wedding Cake', category: 'wedding',
    description: 'A timeless three-tier wedding cake finished in smooth white buttercream with sugar florals.',
    images: ['PLACEHOLDER'], art: { palette: 'vanilla', icon: '💍' },
    startingPrice: 4999, sizes: ['3 kg', '4 kg', '5 kg', 'Custom'],
    flavours: ['Vanilla', 'Chocolate', 'Red Velvet'], egglessAvailable: true,
    occasions: ['wedding'], featured: true, popular: false, available: true, sortOrder: 14
  },
  {
    id: 'p15', name: 'Minimalist Gold Wedding Cake', category: 'wedding',
    description: 'Clean modern tiers with a brushed-gold finish and fresh floral accents.',
    images: ['PLACEHOLDER'], art: { palette: 'gold', icon: '💍' },
    startingPrice: 5499, sizes: ['3 kg', '4 kg', 'Custom'],
    flavours: ['Vanilla', 'Coffee'], egglessAvailable: true,
    occasions: ['wedding'], featured: false, popular: false, available: true, sortOrder: 15
  },
  {
    id: 'p16', name: 'Fully Custom Theme Cake', category: 'custom',
    description: 'Describe your theme, colours and inspiration — our team designs a one-of-a-kind cake around it.',
    images: ['PLACEHOLDER'], art: { palette: 'berry', icon: '✍️' },
    startingPrice: 1499, sizes: ['1 kg', '1.5 kg', '2 kg', 'Custom'],
    flavours: ['Any flavour on request'], egglessAvailable: true,
    occasions: ['birthday', 'corporate', 'celebration'], featured: true, popular: false, available: true, sortOrder: 16
  },
  {
    id: 'p17', name: 'Corporate Logo Cake', category: 'custom',
    description: 'A branded cake with your company logo printed or hand-piped — great for office celebrations.',
    images: ['PLACEHOLDER'], art: { palette: 'blue', icon: '🏢' },
    startingPrice: 1599, sizes: ['1.5 kg', '2 kg', '3 kg'],
    flavours: ['Chocolate', 'Vanilla'], egglessAvailable: true,
    occasions: ['corporate'], featured: false, popular: false, available: true, sortOrder: 17
  },
  {
    id: 'p18', name: 'Assorted Cupcakes (Box of 6)', category: 'cupcakes',
    description: 'Six freshly baked cupcakes in a mix of chocolate, vanilla and red velvet.',
    images: ['PLACEHOLDER'], art: { palette: 'rainbow', icon: '🧁' },
    startingPrice: 399, sizes: ['Box of 6', 'Box of 12'],
    flavours: ['Chocolate', 'Vanilla', 'Red Velvet'], egglessAvailable: true,
    occasions: ['kids', 'celebration'], featured: false, popular: true, available: true, sortOrder: 18
  },
  {
    id: 'p19', name: 'Salted Caramel Cupcakes', category: 'cupcakes',
    description: 'Moist vanilla cupcakes filled with salted caramel and topped with a caramel swirl.',
    images: ['PLACEHOLDER'], art: { palette: 'gold', icon: '🧁' },
    startingPrice: 449, sizes: ['Box of 6', 'Box of 12'],
    flavours: ['Salted Caramel'], egglessAvailable: true,
    occasions: ['celebration'], featured: false, popular: false, available: true, sortOrder: 19
  },
  {
    id: 'p20', name: 'Fudge Walnut Brownies (Box of 6)', category: 'brownies',
    description: 'Dense, fudgy brownies loaded with roasted walnuts.',
    images: ['PLACEHOLDER'], art: { palette: 'choco', icon: '🍫' },
    startingPrice: 349, sizes: ['Box of 6', 'Box of 12'],
    flavours: ['Chocolate Walnut'], egglessAvailable: true,
    occasions: ['celebration'], featured: false, popular: true, available: true, sortOrder: 20
  },
  {
    id: 'p21', name: 'Classic Brownies (Box of 9)', category: 'brownies',
    description: 'Our signature fudgy brownies, cut into nine generous squares.',
    images: ['PLACEHOLDER'], art: { palette: 'choco', icon: '🍫' },
    startingPrice: 449, sizes: ['Box of 9'],
    flavours: ['Chocolate'], egglessAvailable: true,
    occasions: ['celebration'], featured: false, popular: false, available: true, sortOrder: 21
  },
  {
    id: 'p22', name: 'French Butter Croissant Pastry Box', category: 'pastries',
    description: 'A curated box of flaky butter pastries, baked fresh each morning.',
    images: ['PLACEHOLDER'], art: { palette: 'gold', icon: '🥐' },
    startingPrice: 549, sizes: ['Box of 4', 'Box of 8'],
    flavours: ['Butter', 'Chocolate'], egglessAvailable: false,
    occasions: ['corporate', 'celebration'], featured: false, popular: false, available: true, sortOrder: 22
  },
  {
    id: 'p23', name: 'Black Forest Pastry Box', category: 'pastries',
    description: 'Individual black forest pastries layered with cherries and whipped cream.',
    images: ['PLACEHOLDER'], art: { palette: 'black', icon: '🍒' },
    startingPrice: 499, sizes: ['Box of 4', 'Box of 8'],
    flavours: ['Black Forest'], egglessAvailable: true,
    occasions: ['celebration'], featured: false, popular: false, available: true, sortOrder: 23
  },
  {
    id: 'p24', name: 'Baby Shower Bliss Cake', category: 'designer',
    description: 'Soft pastel tones with a fondant baby topper — designed to match your baby shower theme.',
    images: ['PLACEHOLDER'], art: { palette: 'mint', icon: '👶' },
    startingPrice: 1299, sizes: ['1 kg', '1.5 kg', '2 kg'],
    flavours: ['Vanilla', 'Strawberry'], egglessAvailable: true,
    occasions: ['baby-shower'], featured: false, popular: false, available: true, sortOrder: 24
  }
]

export default products
