import FilterOptions from './components/FilterOptions';
import Heading from './components/Heading';
import Sidebar from './components/Sidebar';
import DetailsPage from './pages/DetailsPage';
import DiscoverPage from './pages/DiscoverPage';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}

      <div className="flex-1 overflow-auto bg-[#191b1a]">
        <div className="w-full h-2 bg-[#202221] hidden md:block"></div>
        <Routes>
          <Route path="/" element={<Navigate to="/discover" />} />
          <Route
            path="/discover"
            element={
              <>
                {' '}
                <Heading />
                <FilterOptions />
                <DiscoverPage />
              </>
            }
          />
          <Route path="discover/:index" element={<DetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
