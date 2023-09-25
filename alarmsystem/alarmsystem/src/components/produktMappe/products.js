import { useFetchProductsQuery } from "../../store/apis/alarmApi";
import ProductCard from "./productCard";

function Products() {
  const { data, error, isLoading } = useFetchProductsQuery();
  let item;
  if (isLoading) {
    item = <div>Loading...</div>;
  } else if (error) {
    item = <div>Error loading product data.</div>;
  } else {
    item = data.map((product) =>{
      return (
        <ProductCard key={product.deviceId} product={product}></ProductCard>
      )
    });
  }
  return(
    <div>
      <table  className="table table-striped table-bordered">
        <thead className="bg-light">
          <tr>
              <th>ProductNumber</th>
              <th>Name</th>
              <th>Category</th>
              <th>Brand</th>
              <th>SalesPrice</th>
              <th>CostPrice</th>
              <th>IsMedicalDevice</th>
              <th>InStock</th>
          </tr>
        </thead>
        <tbody>
        {item}
        </tbody>
      </table>
      
    </div>
  )


}


export default Products;

              