import React, {useState} from "react";
import "./Menu.css";

export default function Formulario({cita, setCita}){

  const [nombre, setNombre] = useState("");
  const [mascota, setMascota] = useState("");
  const [sintoma, setSintoma] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  function cambiarNombre(e) {
    setNombre(e.target.value);
  }

  function cambiarMascota(e) {
    setMascota(e.target.value);
  }

  function cambiarSintoma(e) {
    setSintoma(e.target.value);
  }

  function cambiarFecha(e) {
    setFecha(e.target.value);
  }

  function cambiarHora(e) {
    setHora(e.target.value);
  }

  function agendarCita(event){
    event.preventDefault()
    let citaLista={nombre,mascota,sintoma,fecha,hora} 
    setCita([...cita,citaLista]) // aqui se agrega al array
    console.log(citaLista)
    setMascota("") // esto se hace para limpiar el formulario luego de agregar el input
    setNombre("")
    setSintoma("")
    setFecha("")
    setHora("")
  }

  return (
    <div className="mainForm">
      <div className="formulario">
        <h2>Datos para la cita</h2>
        <form className="w-100" onSubmit={agendarCita}>
          <p className="textoFormulario">Nombre de la mascota</p>
          <input
            onChange={cambiarMascota}
            className="inputForm"
            type="text"
            class="form-control"
            placeholder="Nombre mascota"
            autoFocus
            required
            value={mascota}
          />
          <p className="textoFormulario">Nombre del duenno</p>
          <input
            onChange={cambiarNombre}
            className="inputForm"
            type="text"
            class="form-control"
            placeholder="Nombre duenno"
            required
            value={nombre}
          />
          <p className="textoFormulario">Elija la fecha de la cita</p>
          <input
            type="date"
            className="form-control"
            placeholder="Default Input"
            onChange={cambiarFecha}
            // required
          />
          <p className="textoFormulario">Y la hora solicitada</p>
          <input
            type="time"
            className="form-control"
            placeholder="Default Input"
            onChange={cambiarHora}
                 />
          <p className="textoFormulario">Adicione comentarios o sintomas</p>
          <textarea
            onChange={cambiarSintoma}
            className="w-100"
            placeholder="Comentarios adicionales / sintomas"
            value={sintoma}
            // required
          ></textarea>
          <input type="submit" value="Registrar cita" class="btn btn-light formBoton" id="cita"/>
        </form>
      </div>
    </div>
  );
}
