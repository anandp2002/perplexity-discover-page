import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCard = ({ data, i }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/discover/${i}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#202221] text-white w-full h-full flex flex-col justify-between rounded-lg shadow-lg overflow-hidden ease-in-out cursor-pointer duration-150 hover:-translate-y-[0.8px]"
    >
      {data.first_media_items && data.first_media_items.length > 0 && (
        <img
          className={`aspect-[4/3] md:aspect-[1036/350] object-cover w-full h-[335px] md:h-56 rounded-t-lg ${
            i % 4 != 0 && 'md:h-36'
          }`}
          src={data.first_media_items[0].image}
          alt={data.first_media_items[0].name}
        />
      )}
      <div className="flex-grow p-4">
        <h1 className="text-lg font-semibold mt-2 line-clamp-2">
          {data.title}
        </h1>
        <p className="line-clamp-2 text-sm mt-1">
          {JSON.parse(data.first_answer).answer}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <img
              src={data.author_image}
              alt="user"
              className="w-4 h-4 rounded-full mr-2"
            />
            <p className="font-semibold text-sm">{data.author_username}</p>
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

export default SingleCard;
