import { useEffect } from 'react';
import useDiscoverDataStore from '../store/useDiscoverDataStore';
import SingleCard from '../components/SingleCard';
import ShimmerCard from '../components/ShimmerCard';

const DiscoverPage = () => {
  const { data, setData } = useDiscoverDataStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const res = await fetch(
          'api/rest/discover/feed?limit=20&offset=0&version=2.13&source=default'
        );
        const jsonData = await res.json();
        setData(jsonData.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setData]);

  if (!data || data.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-3 md:px-0 bg-[#191b1a] my-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {new Array(20).fill().map((_, index) => (
            <div
              key={index}
              className={index % 4 === 0 ? 'md:col-span-3' : 'md:col-span-1'}
            >
              <ShimmerCard />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-3 md:px-0 bg-[#191b1a] my-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={index % 4 === 0 ? 'md:col-span-3' : 'md:col-span-1'}
          >
            <SingleCard data={item} i={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;
