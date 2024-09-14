import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContextGlobal();

  return (
    <div className="min-h-screen p-6 bg-slate-100 dark:bg-gray-400 p-16">
      <h1 className="text-2xl font-bold mb-4 text-center dark:text-slate-900">
        Dentists Favs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {state.favs.length > 0 ? (
          state.favs.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p className="text-center col-span-full dark:text-neutral-300">
            You have no favorites yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Favs;
