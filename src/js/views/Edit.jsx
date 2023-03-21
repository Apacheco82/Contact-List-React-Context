import React, {useState, useContext} from "react";
import {Context} from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";


export const Edit = () => {

  const {store, actions} = useContext(Context); //contexto global
  const params = useParams();
  const history = useHistory();
  console.log(params)
  console.log(store.contactList)

  const editContact = store.contactList.filter((item) => item.id === params.id);
  const finalContact = editContact[0]

  console.log("contacto filter",finalContact)

  const [contact, setContact] = useState(finalContact);
  const [alert, setAlert] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value; //se obtiene el valor del input
    const name = e.target.name; //se obtiene el nombre del campo del input
    setContact({...contact, [name]: value}); //se añade el valor al campo de nombre de input haciendo una copia del objeto
  };

  const handleData = (e) => {
    e.preventDefault();
    console.log(contact);
   actions.modifySingleContact(contact, params.id)
  //  setContact(editContact)
    setAlert(true)
    history.push("/");
    ;
  };

  setTimeout(() => {
    setAlert(false);
  }, 10000);
;

return (
  <div className="container container-fluid">
    {alert ? (
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        Contact updated!
      </div>
    ) : null}
    <form onChange={handleChange} onSubmit={handleData}>
      <h3>Update Contact</h3>
      <input type="text" name="full_name" defaultValue={contact.full_name}></input>
      <input type="email" name="email" defaultValue={contact.email} ></input>
      <input type="text" name="address" defaultValue={contact.address} ></input>
      <input type="text" name="phone" defaultValue={contact.phone}></input>
      <input type="submit" className="btn btn-success" value="Update Contact"></input>
    </form>
    <Link to="/">
      <button className="btn btn-success" role="button" id="home">
        Back to Home
      </button>
    </Link>
  </div>
);
};

