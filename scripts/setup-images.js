const fs = require('fs');
const path = require('path');
const https = require('https');

const images = {
  hero: [
    {
      id: 'hero-bg',
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      filename: 'hero-bg.jpg'
    }
  ],
  menu: [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1517705008128-361805f42e86',
      filename: 'espresso.jpg'
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      filename: 'cappuccino.jpg'
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
      filename: 'avocado-toast.jpg'
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb',
      filename: 'blueberry-muffin.jpg'
    }
  ],
  gallery: [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1517705008128-361805f42e86',
      filename: 'coffee-1.jpg'
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      filename: 'coffee-2.jpg'
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
      filename: 'food-1.jpg'
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb',
      filename: 'food-2.jpg'
    }
  ]
};

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

const setupImages = async () => {
  const baseDir = path.join(process.cwd(), 'public', 'assets', 'images');
  
  // Create directories
  const directories = ['hero', 'menu', 'gallery'];
  directories.forEach(dir => {
    const dirPath = path.join(baseDir, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });

  // Download hero images
  for (const image of images.hero) {
    const filename = path.join(baseDir, 'hero', image.filename);
    try {
      await downloadImage(image.url, filename);
      console.log(`Downloaded: ${filename}`);
    } catch (error) {
      console.error(`Error downloading ${image.url}:`, error);
    }
  }

  // Download menu images
  for (const image of images.menu) {
    const filename = path.join(baseDir, 'menu', image.filename);
    try {
      await downloadImage(image.url, filename);
      console.log(`Downloaded: ${filename}`);
    } catch (error) {
      console.error(`Error downloading ${image.url}:`, error);
    }
  }

  // Download gallery images
  for (const image of images.gallery) {
    const filename = path.join(baseDir, 'gallery', image.filename);
    try {
      await downloadImage(image.url, filename);
      console.log(`Downloaded: ${filename}`);
    } catch (error) {
      console.error(`Error downloading ${image.url}:`, error);
    }
  }

  console.log('Image setup complete!');
};

setupImages().catch(console.error); 