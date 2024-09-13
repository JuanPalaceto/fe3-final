import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../Components/Button";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const navigate = useNavigate();
  const [dentist, setDentist] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(params);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setDentist(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading ? (
        "cargando..."
      ) : (
        <>
          <h1>Detail Dentist </h1>
          <h2>{dentist.name}</h2>
          <h4>{dentist.email}</h4>
          <h4>{dentist.phone}</h4>
          <h4>{dentist.website}</h4>
        </>
      )}
      <Button onClick={() => navigate(-1)}>BACK</Button> {/* CAMBIAR BOTÓN*/}
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;