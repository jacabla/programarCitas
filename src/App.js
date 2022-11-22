import "./App.css";
import Menu from "./Menu";
import Formulario from "./Formulario";
import { useState } from "react";
import Citas from "./Citas";

function App() {
  const [cita, setCita] = useState([]);

  return (
    <div>
      <Menu></Menu>
      <div className="programacionCita">
        <div className="formulario">
        <Formulario cita={cita} setCita={setCita}></Formulario>
        </div>
        <div className="cita">
        {cita.map((citaLista) => (
          <Citas citaLista={citaLista} />
        ))}
        </div>
      </div>
      <section>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </section>
      <p className="footerP">
        Desarrollado por <strong>Jason Castro Blanco</strong> 2022
      </p>
    </div>
  );
}

export default App;
