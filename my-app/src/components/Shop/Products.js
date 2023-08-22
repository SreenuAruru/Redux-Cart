import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const productList = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    description: "thise is first book",
  },
  {
    id: 2,
    title: "Product 2",
    price: 15,
    description: "thise is second book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList.map((eachItem) => (
          <ProductItem
            key={eachItem.id}
            id={eachItem.id}
            title={eachItem.title}
            price={eachItem.price}
            description={eachItem.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
