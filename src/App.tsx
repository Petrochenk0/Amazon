import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './components';

function App() {
  return (
    <div className="bg-red-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
