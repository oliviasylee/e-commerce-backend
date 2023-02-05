const { Category } = require('../models');

// json 파일을 따로 만들어서 seeding 해야하나?
// 여기서 아니면 여기서 다 만들어서 나가는 듯?
// 아 클래스 파일에서는 seed.js에 전부 다 때려박았고 거기에서 bookseeddata.json을 변수 bookSeedData로 넣어서 관리했는데
// 여기서는 각 항목별로 파일을 나눠서 관리하네 
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;