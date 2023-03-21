import React, {useContext} from "react";
import {Context} from "../store/appContext";
import { Link } from "react-router-dom";

export const Contacts = (props) => {
  const {store, actions} = useContext(Context); //contexto global

  const handleDelete = () => { //funcion  intermedia para llamar a la funcion de flux 
    //aqui faltaría meter un modal antes de borrar
    actions.deleteSingleContact(props.id); //la funcion de flux para borrar pasandole el id
  };

  /*comentario sobre link: creamos la ruta a la que tenemos que enlazar igual que está definida en layout.js
  en este caso estamos pasando como parametro el id del contacto  */ 
  
  return (
    <div className="contacts">
      <div className="contact-info">
        <div>
          <h4>{props.full_name}</h4>
        </div>
        <div className="icons-container">
          <i className="fa-solid fa-xmark" onClick={handleDelete}>
            {" "}
          </i>
          <Link to={`/editcontact/${props.id}`}>
            {" "}
            <i className="fa-solid fa-pen"></i>
          </Link>
        </div>
      </div>
      <div>
        <i className="fa-solid fa-envelope"></i> {props.email}{" "}
      </div>
      <div>
        {" "}
        <i className="fa-solid fa-location-dot"></i> {props.address}
      </div>
      <div>
        <i className="fa-solid fa-phone"></i> {props.phone}
      </div>
    </div>
  );
};
