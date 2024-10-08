import { useParams } from 'react-router-dom';
import useDiscoverDataStore from '../store/useDiscoverDataStore';
import { useEffect } from 'react';

const DetailsPage = () => {
  const { index } = useParams();
  const { data } = useDiscoverDataStore();

  const item = data[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white bg-[#191b1a] min-h-screen pt-20">
      <div className="px-5 pt-2 md:px-48">
        <img
          className="w-full h-72 object-cover rounded-lg"
          src={item.first_media_items[0].image}
          alt={item.title}
        />
        <h1 className="text-4xl font-bold py-2">{item.title}</h1>
        <p className="line-clamp-2 text-sm mt-1">
          {JSON.parse(item.first_answer).answer}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <img
              src={item.author_image}
              alt="user"
              className="w-4 h-4 rounded-full mr-2"
            />
            <p className="font-semibold text-sm">{item.author_username}</p>
          </div>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="bookmark"
            className="w-3 svg-inline--fa fa-bookmark fa-fw fa-1x cursor-pointer"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
