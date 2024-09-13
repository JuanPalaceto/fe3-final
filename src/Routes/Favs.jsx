import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {state.favs.length > 0 ? (
          state.favs.map(dentist => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p>You have no favorites yet.</p>
        )}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
