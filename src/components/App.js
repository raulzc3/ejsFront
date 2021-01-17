import { useState } from "react";

import "./App.css";
import UserList from "./UserList";

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <p>Número de usuarios: {counter}</p>
      <p>
        Usuarios: <UserList amount={counter} />
      </p>
      <button onClick={() => counter > 1 && setCounter(counter - 1)}>
        Anterior
      </button>
      <button onClick={() => counter < 10 && setCounter(counter + 1)}>
        Siguiente
      </button>
    </>
  );
}

export default App;
