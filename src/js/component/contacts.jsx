import React, {useContext} from "react";
import {Context} from "../store/appContext";

export const Contacts = (props) => {
  const {store, actions} = useContext(Context); //contexto global

  const handleDelete = () => {
    actions.deleteSingleContact(props.id);
  };
  const handleModify = ()=>{
    actions.modifySingleContact()
  }

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
          <i className="fa-solid fa-pen" onClick={handleModify}></i>
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
