import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import ProductDetails from '../widgets/ProductDetails';

import SortDropdownProps from '../features/SortDropdownProps';

import { callData } from '../utils/CallApi';
import { GB_CURRENCY } from '../utils/constans';

import { IProduct } from '../types';

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = React.useState<IProduct[] | null>(null);
  const [sortType, setSortType] = React.useState<string>('popular');

  // function receives data from the server and further filters by categories
  const getSearchResult = () => {
    const searchTerm = searchParams.get('searchTerm');
    const categorySearch = searchParams.get('categorySearch');

    callData(`data/search.json`).then((searchResults) => {
      try {
        const categoryResult = categorySearch !== null && searchResults[categorySearch];

        if (searchTerm) {
          const result = categoryResult.filter((product: { id: number; title: string }) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()),
          );
          setProducts(result);
        } else {
          setProducts(categoryResult);
        }
      } catch (error) {
        console.error(error);
      }
    });
  };

  React.useEffect(() => {
    getSearchResult();
  }, [searchParams]);

  const sortProducts = (products: IProduct[]) => {
    switch (sortType) {
      case 'newest':
        return products.sort((a, b) => b.id - a.id); // По новизне (по ID)
      case 'cheapest':
        return products.sort((a, b) => a.price - b.price); // От дешёвых к дорогим
      case 'expensive':
        return products.sort((a, b) => b.price - a.price); // От дорогих к дешёвым
      case 'discounted':
        return products.sort((a, b) => {
          const discountA = a.oldPrice - a.price;
          const discountB = b.oldPrice - b.price;
          return discountB - discountA; // Сравниваем по скидкам
        });
      case 'highRated':
        return products.sort((a, b) => b.avgRating - a.avgRating); // По рейтингу
      default:
        return products; // По популярности (оставляем как есть)
    }
  };

  const sortedProducts = products ? sortProducts([...products]) : null;

  return (
    <div className="min-w-[1200px] max-w-[1300px] mx-auto">
      <div className="m-4">
        <SortDropdownProps SortChange={(value) => setSortType(value)} />
      </div>
      {sortedProducts &&
        sortedProducts.map((product) => {
          return (
            <Link key={product.title} to={`/product/${product.id}`}>
              <div className="text-black h-[250px] grid grid-cols-12 rounded-xl mt-3 mb-3">
                <div className="col-span-2 p-7 bg-gray-200">
                  <img src={product.image_small} className="m-auto" alt="product" />
                </div>
                <div className="col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100">
                  <div className="pl-10 pt-5 font-medium text-black p-2">
                    <ProductDetails product={product} ratingsIs={true} />
                    <div className="text-xl xl:text-2xl pt-1">
                      {GB_CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
