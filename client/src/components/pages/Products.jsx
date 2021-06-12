import React from "react";

import { Link } from "react-router-dom";

import apiService from "./../../services/ApiService";
const Products = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    apiService.getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <h2>Protected Products</h2>
      <Link to="/products/add" className="btn btn-info">
        Add New Product
      </Link>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Picture</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <img src={p.picture} width="100px" />
              </td>
              <td>
                <button className="btn btn-warning mr-2" onClick={(e) => {}}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={(e) => {}}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
