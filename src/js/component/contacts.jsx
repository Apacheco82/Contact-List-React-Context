import React, {useContext, useState} from "react";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom";

export const Contacts = (props) => {
  const {store, actions} = useContext(Context); //contexto global

  const handleId = () => {
    //con esta función nos aseguramos de almacenar el props.id en una store global de Flux, para no perderlo
    actions.saveId(props.id); //llamamos a una función de Flux que nos guarda y conserva el props.id del elemento que tengo seleccionado al hacer click en el <i>
  };

  const handleDelete = () => {
    //funcion  intermedia para llamar a la funcion de flux
    actions.deleteSingleContact(store.id); //la funcion de flux para borrar pasandole el id, en vez de pasarle el props.id le pasamos el id que tenemos almacenado en Flux, store.id
    actions.saveId(""); //seteamos de nuevo el store.id a VACÍO para que se quede preparado para la siguiente acción de borrado
  };

  /*comentario sobre link: creamos la ruta a la que tenemos que enlazar igual que está definida en layout.js
  en este caso estamos pasando como parametro el id del contacto  */

  return (
    <>
      <div className="contacts">
        <div className="avatar">
          {" "}
          <img
            src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/05/07/16203887297193.jpg"
            id="avatar"
          />
        </div>
        <div className="contact-info">
          <div>
            <h4>{props.full_name}</h4>
          </div>
          <div className="icons-container">
            <i
              className="fa-solid fa-xmark"
              onClick={handleId}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Are you sure?
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      This contact will be deleted permanently
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-success"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        id="deletebtn"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
    </>
  );
};
