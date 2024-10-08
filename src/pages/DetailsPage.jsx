import { useParams } from 'react-router-dom';
import useDiscoverDataStore from '../store/useDiscoverDataStore';
import { useEffect, useState } from 'react';

const DetailsPage = () => {
  const { index } = useParams();
  const { data } = useDiscoverDataStore();
  const [toggle, setToggle] = useState(false);

  const toggleSwitch = () => {
    setToggle(!toggle);
  };

  const item = data[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white bg-[#191b1a] min-h-screen pt-20">
      <div className="px-5 pt-2 lg:px-36">
        <img
          className="w-full h-72 object-cover rounded-lg"
          src={item.first_media_items[0].image}
          alt={item.title}
        />
        <h1 className="text-4xl font-bold py-2">{item.title}</h1>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              src={item.author_image}
              alt="user"
              className="w-4 h-4 rounded-full mr-2"
            />
            <p className="font-semibold text-sm">{item.author_username}</p>
          </div>
        </div>
        <p className=" paragraph mt-3">
          <span className="first-letter">
            {JSON.parse(item.first_answer).answer.charAt(0)}
          </span>
          {JSON.parse(item.first_answer).answer.slice(1)}
        </p>

        {/* Chat */}
        <div className="flex justify-center mt-7 mx-auto  bg-[#191b1a] mb-6 sticky bottom-5">
          <input
            placeholder="Ask follow-up"
            className="h-16 pl-8 bg-[#202221] rounded-l-full w-8/12 lg:w-3/5 border-none focus:outline-none"
          />
          <div className="h-16 bg-[#202221] w-4/12 lg:w-1/5 rounded-r-full flex items-center">
            <div
              onClick={toggleSwitch}
              className={`h-7 bg-[#202221] w-1/3 md:w-1/4 rounded-full border border-[#8d8f8e] flex items-center ${
                toggle ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`h-4 m-1 w-4 bg-[#8d8f8e] rounded-full ${
                  toggle ? 'mr-2' : 'ml-2'
                }`}
              ></div>
            </div>
            <p className="ml-2 text-[#8d8f8e]">Pro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
