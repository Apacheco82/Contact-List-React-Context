import React, {useState, useContext} from "react";
import {Context} from "../store/appContext";
import { Link } from "react-router-dom";

const initialState = {
  //se crea aquí el objeto vacío porque solo lo vamos a usar en form
  full_name: "",
  email: "",
  address: "",
  phone: "",
  agenda_slug: "apacheco",
};

export const Formulario = () => {

  const {store, actions} = useContext(Context); //contexto global
  const [contact, setContact] = useState(initialState);

  const handleChange = (e) => {
    const value = e.target.value; //se obtiene el valor del input
    const name = e.target.name; //se obtiene el nombre del campo del input
    setContact({...contact, [name]: value}); //se añade el valor al campo de nombre de input haciendo una copia del objeto
  };

  const handleData = (e) => {
    e.preventDefault();
    console.log(contact);
    actions.addSingleContact(contact)
    setContact(initialState);
  };

  return (
    <>
      <form onChange={handleChange} onSubmit={handleData}>
        <h3>Añade un contact</h3>
        <input type="text" name="full_name" value={contact.full_name} placeholder="nombre"  ></input>
        <input type="text" name="email" value={contact.email} placeholder="email" ></input>
        <input type="text" name="address" value={contact.address} placeholder="direccion"></input>
        <input type="text" name="phone" value={contact.phone} placeholder="telefono"></input>
        <input type="submit" className="btn btn-success" value="Add New Contact"></input>
      </form>
    </>
  );
};

