const fs = require('fs');
const path = require('path');
const https = require('https');

const galleryImages = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb',
    alt: 'Coffee Shop Interior',
    caption: 'Our cozy interior',
    category: 'interior',
    likes: 0,
    isLiked: false,
    location: 'Main Hall'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1517705008128-361805f42e86',
    alt: 'Barista Making Coffee',
    caption: 'Expert baristas at work',
    category: 'people',
    likes: 0,
    isLiked: false,
    location: 'Bar Area'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    alt: 'Freshly Brewed Coffee',
    caption: 'Our signature blend',
    category: 'coffee',
    likes: 0,
    isLiked: false,
    location: 'Coffee Station'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    alt: 'Delicious Pastries',
    caption: 'Freshly baked goods',
    category: 'food',
    likes: 0,
    isLiked: false,
    location: 'Bakery Display'
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

const setupGallery = async () => {
  const galleryDir = path.join(process.cwd(), 'public', 'assets', 'images', 'gallery');
  
  // Create gallery directory if it doesn't exist
  if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true });
  }

  // Download each image
  for (const image of galleryImages) {
    const filename = path.join(galleryDir, `${image.id}.jpg`);
    try {
      await downloadImage(image.src, filename);
      console.log(`Downloaded: ${filename}`);
    } catch (error) {
      console.error(`Error downloading ${image.src}:`, error);
    }
  }

  // Create a manifest file
  const manifest = galleryImages.map(img => ({
    ...img,
    src: `/assets/images/gallery/${img.id}.jpg`
  }));

  fs.writeFileSync(
    path.join(galleryDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log('Gallery setup complete!');
};

setupGallery().catch(console.error); 