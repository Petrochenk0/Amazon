import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, NavBar, SearchResult, Checkout, ProductPage } from './components';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
