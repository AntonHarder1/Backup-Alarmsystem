function ProductCard({product}){
    return (
        <tr >
        <td>{product.productNumber}</td>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.brand}</td>
        <td>{product.salesPrice}</td>
        <td>{product.costPrice}</td>
        <td>{product.isMedicalDevice ? 'Yes' : 'No'}</td>
        <td>{product.inStock}</td>
      </tr>
      );
}


      
export default ProductCard;