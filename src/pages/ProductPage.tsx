import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { callData } from '../utils/CallApi';

import { IProduct } from '../types';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);

  const getProduct = () => {
    callData(`data/products.json`).then((productResults) => {
      if (id !== undefined) {
        setProduct(productResults[id]);
      }
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading Product ...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazonColors-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto">
          <div className="grid grid-cols-10 gap-2">
            {/* Left */}
            <div className="col-span-3 rounded m-auto bg-white p-10">
              <img src={`${product.image}`} />
            </div>
            {/* Middle */}
            <div className="col-span-4 bg-white">
              <div className=""></div>
              <div className=""></div>
            </div>
            {/* Right */}
            <div className="col-span-3 bg-white"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
