import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ProductDetails from '../widgets/ProductDetails';

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
            <div className="col-span-4 bg-white p-4 rounded divide-y ">
              <div className="mb-3">
                <ProductDetails product={product} ratingsIs={true} />
              </div>
              <div className="text-base pt-2">{product.description}</div>
            </div>
            {/* Right */}
            <div className="col-span-3 p-4 rounded bg-white">
              <div className="text-2xl font-semibold">{product.price}</div>
              <div className="text-lg font-semibold">{product.oldPrice}</div>
              <div className="text-base font-semibold">FREE Returns</div>
              <div className="text-base font-semibold">FREE Delivery</div>
              <div className="text-lg font-semibold">In Stock</div>
              <div className="text-lg font-semibold">
                Quantity:
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
