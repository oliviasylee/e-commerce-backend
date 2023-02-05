// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// one-to-many
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  // When we delete a category, make suere to also delete the associated product.
  // 카테고리가 사라지면 그에 속한 제품들이 전부 공중에 뜨니까? 데이터가 연관되어 있으니 카테고리가 삭제되면 관련된 제품도 삭제되어야 함. 하지만 반대는 안됨. 제품이 삭제되어도 카테고리는 그대로 남아있어야 함 아!
  onDelete: 'CASCADE',
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});


// many-to-many
// Products belongToMany Tags (through ProductTag)
// Tag - product's feature such as color, what genre of the music? 
// ProductTag is junction table that will keep track of the associations will be called ProductTag, which will contain the foreign keys product_id and tag_id
Product.belongsToMany(Tag, {
  through: ProductTag,
});


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};