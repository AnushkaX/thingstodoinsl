// Map coordinates from mapdata.js converted to percentages
// Original coordinates are based on 1000x1000 viewBox
// Converting to percentage: (coordinate / 1000) * 100

// Mapping our district IDs to mapdata.js labels
const districtIdMapping: Record<string, string> = {
  'colombo': 'LK11',        // Kŏḷamba
  'galle': 'LK31',          // Gālla
  'matara': 'LK32',         // Mātara
  'hikkaduwa': 'LK13',      // Kaḷutara (approximate)
  'bentota': 'LK13',        // Kaḷutara (approximate)
  'kandy': 'LK21',          // Mahanuvara
  'nuwara-eliya': 'LK23',   // Nuvara Ĕliya
  'ella': 'LK81',           // Badulla (approximate)
  'sigiriya': 'LK22',       // Mātale (approximate)
  'anuradhapura': 'LK71',   // Anurādhapura
  'polonnaruwa': 'LK72',    // Pŏḷŏnnaruva
  'trincomalee': 'LK53',    // Trikuṇāmalaya
  'arugam-bay': 'LK51',     // Maḍakalapuva (approximate)
  'yala': 'LK33',           // Hambantŏṭa (approximate)
  'udawalawe': 'LK33',      // Hambantŏṭa (approximate)
  'wilpattu': 'LK62',       // Puttalama (approximate)
  'minneriya': 'LK72',      // Pŏḷŏnnaruva (approximate)
  'rathnapura': 'LK91',     // Ratnapura
};

// Coordinates from mapdata.js labels (converted to percentages)
const mapCoordinates: Record<string, { x: number; y: number }> = {
  'LK11': { x: (310.9 / 1000) * 100, y: (739.9 / 1000) * 100 },      // Kŏḷamba (Colombo)
  'LK12': { x: (323.9 / 1000) * 100, y: (682.9 / 1000) * 100 },      // Gampaha
  'LK13': { x: (350.4 / 1000) * 100, y: (809.6 / 1000) * 100 },      // Kaḷutara
  'LK21': { x: (522 / 1000) * 100, y: (626.4 / 1000) * 100 },        // Mahanuvara (Kandy)
  'LK22': { x: (482.5 / 1000) * 100, y: (567.8 / 1000) * 100 },      // Mātale (Sigiriya area)
  'LK23': { x: (475.5 / 1000) * 100, y: (733.3 / 1000) * 100 },      // Nuvara Ĕliya
  'LK31': { x: (377.8 / 1000) * 100, y: (893 / 1000) * 100 },        // Gālla (Galle)
  'LK32': { x: (447.7 / 1000) * 100, y: (923.8 / 1000) * 100 },      // Mātara
  'LK33': { x: (569.4 / 1000) * 100, y: (881.8 / 1000) * 100 },      // Hambantŏṭa (Yala/Udawalawe area)
  'LK51': { x: (653.9 / 1000) * 100, y: (513.2 / 1000) * 100 },      // Maḍakalapuva (Arugam Bay area)
  'LK52': { x: (716.9 / 1000) * 100, y: (648.4 / 1000) * 100 },      // Ampāra
  'LK53': { x: (564.1 / 1000) * 100, y: (323.8 / 1000) * 100 },      // Trikuṇāmalaya (Trincomalee)
  'LK61': { x: (381.9 / 1000) * 100, y: (555.9 / 1000) * 100 },      // Kuruṇægala
  'LK62': { x: (314.4 / 1000) * 100, y: (454.2 / 1000) * 100 },      // Puttalama (Wilpattu area)
  'LK71': { x: (440.1 / 1000) * 100, y: (397.7 / 1000) * 100 },      // Anurādhapura
  'LK72': { x: (565 / 1000) * 100, y: (471.2 / 1000) * 100 },        // Pŏḷŏnnaruva
  'LK81': { x: (569.2 / 1000) * 100, y: (704.6 / 1000) * 100 },      // Badulla (Ella area)
  'LK82': { x: (635.1 / 1000) * 100, y: (770.3 / 1000) * 100 },      // Mŏṇarāgala
  'LK91': { x: (441 / 1000) * 100, y: (802.1 / 1000) * 100 },        // Ratnapura
  'LK92': { x: (398.4 / 1000) * 100, y: (662.4 / 1000) * 100 },      // Kægalla
};

export function getDistrictPosition(districtId: string): { x: number; y: number } | null {
  const mapId = districtIdMapping[districtId];
  if (!mapId) return null;
  return mapCoordinates[mapId] || null;
}

export { districtIdMapping, mapCoordinates };
