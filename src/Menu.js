import React from "react";
import "./Menu.css";

export default function Menu() {
  let menu = ["Acerca de", "Registro de pacientes", "Contacto", "Ubicacion"];

  const linkDecorativo = () => {
    alert("Link de Navbar decorativo")
  }
  return (
    <div className="mainMenu">
      <div>
        <ul className="itemMenu">
          {menu.map((elemento) => (
            <li onClick={linkDecorativo}>{elemento}</li>
          ))}
        </ul>
      </div>
    </div> // se usa el .map para crear el menu desde un array
  );
}
