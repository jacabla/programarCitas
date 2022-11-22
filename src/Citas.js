import React from "react";
import "./Citas.css";

export default function Citas({ citaLista }) {
  return (
    <div className="citaDiv">
      <div className="citaMain">
        <h4>Cita agendada</h4>
        <p>Nombre de la mascota: {citaLista.mascota}</p>
        <p>Nombre del duenno: {citaLista.nombre}</p>
        <p>Fecha: {citaLista.fecha}</p>
        <p>Hora: {citaLista.hora}</p>
        <p>Sintomas: {citaLista.sintoma}</p>
        <button class="btn btn-light formBoton">Eliminar cita</button>
      </div>
    </div>
  );
}
