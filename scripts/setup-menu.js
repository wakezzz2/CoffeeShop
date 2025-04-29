const fs = require('fs');
const path = require('path');
const https = require('https');

const menuItems = [
  {
    id: '1',
    name: 'Espresso',
    price: 3.50,
    description: 'Rich and bold espresso shot',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86',
    isFavorite: false
  },
  {
    id: '2',
    name: 'Cappuccino',
    price: 4.50,
    description: 'Perfectly balanced espresso with steamed milk',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    isFavorite: false
  },
  {
    id: '3',
    name: 'Avocado Toast',
    price: 8.50,
    description: 'Sourdough bread with fresh avocado and toppings',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    isFavorite: false
  },
  {
    id: '4',
    name: 'Blueberry Muffin',
    price: 3.50,
    description: 'Freshly baked muffin with blueberries',
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb',
    isFavorite: false
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filename);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
};

const setupMenu = async () => {
  const menuDir = path.join(process.cwd(), 'public', 'assets', 'images', 'menu');
  
  // Create menu directory if it doesn't exist
  if (!fs.existsSync(menuDir)) {
    fs.mkdirSync(menuDir, { recursive: true });
  }

  // Download each image
  for (const item of menuItems) {
    const filename = path.join(menuDir, `${item.id}.jpg`);
    try {
      await downloadImage(item.image, filename);
      console.log(`Downloaded: ${filename}`);
    } catch (error) {
      console.error(`Error downloading ${item.image}:`, error);
    }
  }

  // Create a manifest file
  const manifest = menuItems.map(item => ({
    ...item,
    image: `/assets/images/menu/${item.id}.jpg`
  }));

  fs.writeFileSync(
    path.join(menuDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log('Menu setup complete!');
};

setupMenu().catch(console.error); 