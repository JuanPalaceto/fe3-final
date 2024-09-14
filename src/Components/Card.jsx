import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContextGlobal();

  const { name, username, id } = dentist;
  const isFav = state.favs.find((fav) => fav.id == dentist.id);

  const addFav = () => {
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dentist });
  };

  return (
    <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center h-full">
      <img
        className="w-full rounded-t-lg object-cover"
        src="/images/doctor.jpg"
        alt="Doctor"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
          {name}
        </h3>
        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
          {username}
        </p>
        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
          ID: {id}
        </p>
        <div className="flex-1"></div>
      </div>
      <div className="flex justify-center gap-4 px-4 pb-4 bg-white dark:bg-neutral-700">
        <Link to={`/detail/${id}`}>
          <Button
            className="bg-blue-800 px-6 py-2 text-xs font-medium uppercase text-white shadow 
          transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none dark:bg-blue-500 
          dark:hover:bg-blue-800 dark:text-white rounded-full"
          >
            Details
          </Button>
        </Link>
        <Button
          className="text-yellow-400 dark:text-teal-400 text-2xl"
          onClick={addFav}
        >
          {isFav ? "★" : "☆"}
        </Button>
      </div>
    </div>
  );
};

export default Card;
