import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { callData } from '../utils/CallApi';
import { IProduct } from '../types';

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = React.useState<IProduct[] | null>(null);

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

  return (
    <div className="min-w-[1200px] max-w-[1300px]">
      {products &&
        products.map((product) => {
          return (
            <div key={product.title} className="text-black">
              {product.title}
            </div>
          );
        })}
    </div>
  );
}
