import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

//base image url
const img_url ="https://glimmer.alwaysdata.net/static/images/"

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get("https://glimmer.alwaysdata.net/api/get_products");
      setProducts(response.data);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='row'>
      <div className="h3 text-primary">available products</div>

      {loading && <Loader />}
      {error && <h4 className='text-danger'>{error}</h4>}

      {/* map the products */}
      {products.map((product) => (
        <div key={product.id} className="div col-md-3 justify-content-center product_img">
          <div className="div card shadow product_img mt-3">
            <img 
            src={img_url+product.product_photo}
             alt="product name" />
            <div className="card-body mt-3 ">
              <div className="text-primary">{product.product_name}</div>
              <div className="text-dark">{product.product_description.slice(0,100)}...</div>
              <div className="text-warning">kes {product.product_cost}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Getproducts;