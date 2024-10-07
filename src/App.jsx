import FilterOptions from './components/FilterOptions';
import Heading from './components/Heading';
import Sidebar from './components/Sidebar';
import DiscoverPage from './pages/DiscoverPage';

function App() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}

      <div className="flex-1 overflow-auto bg-[#191b1a]">
        <div className="h-2 bg-[#202221] hidden md:block"></div>

        <Heading />

        <hr style={{ border: '1px #171b1c' }}></hr>
        <FilterOptions />
        <DiscoverPage />
      </div>
    </div>
  );
}

export default App;
