import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useContextGlobal();

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-gray-400 p-16">
      <h1 className="text-2xl font-bold mb-4 text-center dark:text-slate-900">
        Home
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {state.data.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
