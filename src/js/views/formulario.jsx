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
  

  const handleChange = (e) => {
    const value = e.target.value; //se obtiene el valor del input
    const name = e.target.name; //se obtiene el nombre del campo del input
    setContact({...contact, [name]: value}); //se añade el valor al campo de nombre de input haciendo una copia del objeto
  };

  const handleData = (e) => {
    e.preventDefault(); //para que no recargue la web al darle al boton
    // console.log(contact);
    actions.addSingleContact(contact); //llamamos al flux pasando el contacto relleno y desde ahi irá a index.js a hacer Post
    console.log("tras meter el contacto",contact)
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
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          New contact added successfully!
        </div>
      ) : (
        <>
          {" "}
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
