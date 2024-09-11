import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ dentist }) => {
  const { dispatch } = useContextGlobal();

  const { name, username, id } = dentist;

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src='/images/doctor.jpg' width={200}></img>
      <h3>{name}</h3>
      <p>{username}</p>
      <p>ID: {id}</p>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/detail/${id}`}>
        <Button>Details</Button>
      </Link> {/*FALTA COMPLETAR EL TO*/}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Button onClick={addFav} className="favButton">Add fav</Button>
    </div>
  );
};

export default Card;