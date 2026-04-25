import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

// models/scripts/addCategories.js
import dbConnect from '../utils/mongo.js';
import Category from '../models/Category.js';

const categories = [
  { id: 'pumping', name: 'Pumping' },
  { id: 'Inspections', name: 'Inspections' },
  { id: 'Repairs', name: 'Repairs' },
  { id: 'Greasetrapcleaning', name: 'Grease trap cleaning' },
  { id: 'HydrojettingandRootRemoval', name: 'Hydrojetting and Root Removal' }
]


async function addCategories() {
  try {
    await dbConnect();

    for (const category of categories) {
      const exists = await Category.findOne({ name: category.name });
      if (!exists) {
        await Category.create(category);
        console.log(`Added category: ${category.name}`);
      } else {
        console.log(`Category already exists: ${category.name}`);
      }
    }

    console.log('Done!');
    process.exit(0);
  } catch (err) {
    console.error('Error adding categories:', err);
    process.exit(1);
  }
}

addCategories();
