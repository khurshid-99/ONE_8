import ProductCard from "../productCard/ProductCard";

const ProductPage = () => {
  return (
    <div className="grid auto-rows-min grid-cols-2 lg:grid-cols-3 gap-8p lg:gap-21p border-t border-gray-muted pt-24p lg:px-0 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductPage;
