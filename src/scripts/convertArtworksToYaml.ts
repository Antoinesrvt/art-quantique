import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

interface Artwork {
  collectionId: string;
  image: string;
  size: string;
  color: string;
  date: string;
  year: string;
  title?: string;
  description?: string;
}

async function convertArtworksToYaml() {
  try {
    const jsonContent = await fs.readFile(
      path.join(process.cwd(), 'src/content/artworks/artworks.json'),
      'utf-8'
    );
    const artworks: Artwork[] = JSON.parse(jsonContent);

    const outputDir = path.join(process.cwd(), 'src/content/artworks');
    await fs.mkdir(outputDir, { recursive: true });

    for (const [index, artwork] of artworks.entries()) {
      // Create filename in format: collectionId_size_color_year
      const filename = `${artwork.collectionId}_${artwork.size}_${artwork.color}_${artwork.year}`.toLowerCase();
      
      // Add index if same filename exists
      const finalFilename = `${filename}-${(index + 1).toString().padStart(2, '0')}.yaml`;

      // Prepare artwork data with title and description if missing
      const artworkData = {
        ...artwork,
        title: artwork.title || `${artwork.collectionId} - ${artwork.color} ${artwork.size}`,
        description: artwork.description || `Œuvre ${artwork.color} de taille ${artwork.size}cm`
      };

      const yamlContent = yaml.dump(artworkData, {
        indent: 2,
        lineWidth: -1,
        quotingType: '"'
      });

      await fs.writeFile(
        path.join(outputDir, finalFilename),
        yamlContent,
        'utf-8'
      );

      console.log(`Created ${finalFilename}`);
    }

    console.log('Conversion completed successfully!');
  } catch (error) {
    console.error('Error converting artworks:', error);
  }
}

convertArtworksToYaml(); 