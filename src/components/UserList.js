import { useEffect, useState } from "react";
function UserList(props) {
  //Array en el que guardamos los nombres que obtendremos de la API
  const [peopleArray, setPeopleArray] = useState([]);
  //Variable que almacena el número de veces que requerimos un nuevo nombre
  //Lo usaremos para controlar cuando se tiene que actualizar useEffect
  const [numUpdates, setNumUpdates] = useState(1);
  //Si el numero de usuarios solicitado es mayor al número de peticiones realizadas, sumaremos 1
  numUpdates < props.amount && setNumUpdates(numUpdates + 1);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(`https://randomuser.me/api?results=1`);
        const data = await response.json();
        return data.results[0].name.first;
      } catch (error) {
        console.error(error);
      }
    }

    async function setUser() {
      let newUser;
      //Repetiremos la petición hasta que la API nos devuelva un usuario
      do {
        newUser = await getUser();
      } while (newUser === undefined);
      //Añadimos el nuevo usuario al array de usuarios
      setPeopleArray([...peopleArray, newUser]);
    }
    setUser();
  }, [numUpdates]);

  const resultArray = peopleArray.filter((item, index) => index < props.amount);

  return resultArray.join(", ");
}

export default UserList;
