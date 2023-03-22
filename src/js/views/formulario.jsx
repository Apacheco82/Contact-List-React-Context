import React, {useState, useContext} from "react";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom";

const initialState = {
  //se crea aquí el objeto vacío porque solo lo vamos a usar en form para decirle que se vaya siempre a la agenda "apacheco"
  full_name: "",
  email: "",
  address: "",
  phone: "",
  agenda_slug: "apacheco",
};

export const Formulario = () => {
  const {store, actions} = useContext(Context); //contexto global
  const [contact, setContact] = useState(initialState); //el obj contact que viene de useState, se inicializa desde initialState
  const [load, setLoad] = useState(false); //para mostrar un alert al cargar, como si fuera un spinner
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const value = e.target.value; //se obtiene el valor del input
    const name = e.target.name; //se obtiene el nombre del campo del input
    setContact({...contact, [name]: value}); //se añade el valor al campo de nombre de input haciendo una copia del objeto
  };

  const handleData = async (e) => {
    e.preventDefault(); //para que no recargue la web al darle al boton
    /*llamamos al flux pasando el contacto relleno y desde ahi irá a index.js a hacer Post
      esto devolverá un status 200 o un objeto con un mensaje de error*/
    const resultado = await actions.addSingleContact(contact);

    /*  if (resultado == 200) { //si el resultado es igual al estatus 200
      setStatus("Contact added successfully"); //seteamos a status un texto fijo indicando que el contacto se ha añadido
    } else { //si el resultado ha devuelto un JSON de errores
      setStatus(resultado.msg); //recogemos el MSG del JSON y lo seteamos a status
    } */

    //convertimos el if else de arriba a ternario
    setStatus(resultado == 200 ? "Contact added successfully" : resultado.msg);

    setLoad(true); //para mostrar el alert
    setContact(initialState); //para vaciar los inputs
    setTimeout(() => {
      //para mostrar el alert dos segundos antes de quitarlo
      setLoad(false);
      
    }, 2000);
  };

  return (
    <div className="container container-fluid">
      {load ? (
     <div className={`alert ${status === "Contact added successfully" ? " alert-success" : " alert-danger"}`} role="alert">
     {status}
    </div>
    
      ) : (
        <>
          <form onChange={handleChange} onSubmit={handleData}>
            <h3>Add A New Contact</h3>
            <input
              type="text"
              name="full_name"
              value={contact.full_name}
              placeholder="Name"
              required
            ></input>
            <input
              type="email"
              name="email"
              value={contact.email}
              placeholder="eMail"
              required
            ></input>
            <input
              type="text"
              name="address"
              value={contact.address}
              placeholder="Address"
              required
            ></input>
            <input
              type="text"
              name="phone"
              value={contact.phone}
              placeholder="Phone Number"
              required
            ></input>
            <input
              type="submit"
              className="btn btn-success"
              value="Add New Contact"
              required
            ></input>
          </form>
          <Link to="/">
            <button className="btn btn-success" role="button" id="home">
              Back to Home
            </button>
          </Link>
        </>
      )}
    </div>
  );
};
