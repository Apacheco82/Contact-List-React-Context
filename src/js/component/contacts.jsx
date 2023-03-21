import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom";

export const Contacts = (props) => {
  const {store, actions} = useContext(Context); //contexto global

  const handleDelete = () => {
    //funcion  intermedia para llamar a la funcion de flux
    //aqui faltaría meter un modal antes de borrar
    actions.deleteSingleContact(props.id); //la funcion de flux para borrar pasandole el id
  };

  /*comentario sobre link: creamos la ruta a la que tenemos que enlazar igual que está definida en layout.js
  en este caso estamos pasando como parametro el id del contacto  */

  // onClick={handleDelete}

  return (
    <div className="contacts">
      <div className="contact-info">
        <div>
          <h4>{props.full_name}</h4>
        </div>
        <div className="icons-container">
          <i
            className="fa-solid fa-xmark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Are you sure?
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" class="btn btn-primary" onClick={handleDelete}>
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
  );
};
