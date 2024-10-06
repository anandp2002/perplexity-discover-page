import FilterOptions from './components/FilterOptions';
import Heading from './components/Heading';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        <Heading />
        <FilterOptions />
      </div>
    </div>
  );
}

export default App;
