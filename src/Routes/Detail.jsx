import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../Components/Button";
import axios from "axios";

const Detail = () => {
  const navigate = useNavigate();
  const [dentist, setDentist] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(params);

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-neutral-500 p-1">
      <h1 className="text-2xl font-bold text-blue-900 dark:text-gray-900 mb-16">
        Detail Dentist
      </h1>
      {loading ? (
        <p className="text-center text-lg">Cargando...</p>
      ) : (
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold dark:text-white">
            {dentist.name}
          </h2>
          <h4 className="text-lg dark:text-gray-300">{dentist.email}</h4>
          <h4 className="text-lg dark:text-gray-300">{dentist.phone}</h4>
          <h4 className="text-lg dark:text-gray-300">{dentist.website}</h4>
        </div>
      )}
      <div className="text-center mt-6">
        <Button
          onClick={() => navigate(-1)}
          className="text-3xl text-blue-900 dark:text-gray-900"
        >
          ←
        </Button>
      </div>
    </div>
  );
};

export default Detail;
