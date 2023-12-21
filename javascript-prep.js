const sneakerCollection = [
  {
    brand: 'Nike',
    model: 'Air Max',
    details: {
      releaseYear: 2022,
      technologies: ['Air Cushioning', 'Flyknit'],
    },
    sizes: {
      available: [8, 9, 10, 11],
      inStock: {
        8: 5,
        9: 10,
        10: 8,
        11: 3,
      },
    },
    colors: [
      { name: 'Black', hexCode: '#000000' },
      { name: 'White', hexCode: '#FFFFFF' },
      { name: 'Red', hexCode: '#FF0000' },
    ],
  },
  {
    brand: 'Adidas',
    model: 'Ultra Boost',
    details: {
      releaseYear: 2021,
      technologies: ['Boost Midsole', 'Primeknit'],
    },
    sizes: {
      available: [7, 8, 9, 10],
      inStock: {
        7: 2,
        8: 8,
        9: 6,
        10: 4,
      },
    },
    colors: [
      { name: 'Blue', hexCode: '#0000FF' },
      { name: 'Gray', hexCode: '#808080' },
      { name: 'Green', hexCode: '#00FF00' },
    ],
  },
  {
    brand: 'Puma',
    model: 'Clyde',
    details: {
      releaseYear: 2020,
      technologies: ['SoftFoam insole', 'Suede upper'],
    },
    sizes: {
      available: [8, 9, 10],
      inStock: {
        8: 4,
        9: 7,
        10: 5,
      },
    },
    colors: [
      { name: 'Black', hexCode: '#000000' },
      { name: 'White', hexCode: '#FFFFFF' },
      { name: 'Red', hexCode: '#FF0000' },
    ],
  },
  // Add more sneaker objects as needed
  {
    brand: 'New Balance',
    model: '990',
    details: {
      releaseYear: 2023,
      technologies: ['ENCAP midsole', 'Pigskin suede'],
    },
    sizes: {
      available: [8, 9, 10, 11],
      inStock: {
        8: 3,
        9: 6,
        10: 9,
        11: 2,
      },
    },
    colors: [
      { name: 'Gray', hexCode: '#808080' },
      { name: 'Navy', hexCode: '#000080' },
      { name: 'Green', hexCode: '#008000' },
    ],
  },
  // Add more sneaker objects as needed
];

// Function Definition
function viewSneakerBrandsInCollection(collectionOfSneakers) { // Parameter is a placeholder for what will actually be passed in
  for (let i = 0; i < collectionOfSneakers.length; i++) {
    console.log(collectionOfSneakers[i].brand);
    // for every item in the array
    // we will use the key term of brand and print the brand name/value
  }
}

// Let's create a function the takes two arguments an array and release year... we only want to return shoes with the specified release year
function findShoeByReleaseYear(collectionOfSneakers, releaseYear) {
  
}

viewSneakerBrandsInCollection(sneakerCollection);
