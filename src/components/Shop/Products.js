import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_DATA=[
  {id:'p1',title:"TEST1",price:6,description:'This is a first product - amazing!'},
  {id:'p2',title:"TEST2",price:7,description:'This is a second product - amazing!'}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMY_DATA.map(product=>{
        return(
             <ProductItem
                key={product.id}
                id={product.id}
                price={product.price}
                description={product.description}
                title={product.title}
             />
        )})}
      
      </ul>
    </section>
  );
};

export default Products;
