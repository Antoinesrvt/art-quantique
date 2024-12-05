import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import glob from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '../../');

async function verifyImages() {
  try {
    // Get all YAML files
    const yamlFiles = glob.sync('src/content/artworks/*.yaml', { cwd: PROJECT_ROOT });
    const errors = [];

    for (const yamlFile of yamlFiles) {
      const content = await fs.readFile(path.join(PROJECT_ROOT, yamlFile), 'utf-8');
      const imagePath = content.match(/image:\s*["']?([^"'\n]+)["']?/)?.[1];

      if (imagePath) {
        const fullImagePath = path.join(PROJECT_ROOT, 'public', 'images', 'artworks', imagePath);
        try {
          await fs.access(fullImagePath);
        } catch {
          errors.push(`Missing image for ${yamlFile}: ${imagePath}`);
          errors.push(`Expected at: ${fullImagePath}`);
        }
      }
    }

    if (errors.length > 0) {
      console.error('Image validation errors:');
      errors.forEach(err => console.error(err));
      process.exit(1);
    } else {
      console.log('✅ All images verified successfully');
    }
  } catch (error) {
    console.error('Error verifying images:', error);
    process.exit(1);
  }
}

verifyImages(); 