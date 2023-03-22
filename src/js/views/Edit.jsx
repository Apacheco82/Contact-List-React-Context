import React, {useState, useEffect, useContext} from "react";
import {Context} from "../store/appContext";
import {Link, useParams} from "react-router-dom";
import {useNavigate} from "react-router";

export const Edit = () => {
  const {store, actions} = useContext(Context); //contexto global
  const params = useParams(); //los params de la url (ver layout.js) en este caso solo es el id del contacto
  //console.log(params) por comprobar lo que traemos
  //console.log(store.contactList)
  const navigate = useNavigate(); //para poder volver al home (por ejemplo cuando se termine el handledata)

  const editContact = store.contactList.filter((item) => item.id === params.id); //se filtra el array para recoger el id que hemos traido en la url
  const finalContact = editContact[0]; //como lo que queremos es un objeto, accedemos por la posicion 0

  // console.log("contacto filter",finalContact)

  const [contact, setContact] = useState(finalContact); //se setea el obj que hemos obtenido al contact que pinta los datos en el formulario
  const [alert, setAlert] = useState(false); //se declara en false para poder renderizar condicionalmente

  const handleChange = (e) => {
    const value = e.target.value; //se obtiene el valor del input
    const name = e.target.name; //se obtiene el nombre del campo del input
    setContact({...contact, [name]: value}); //se añade el valor al campo de nombre de input haciendo una copia del objeto
  };

  const handleData = (e) => {
    e.preventDefault();
    //  console.log(contact);
    actions.modifySingleContact(
      contact,
      params.id
    ); /*se llama a la action de flux que modifica el registro haciendo put en index.js, 
    se le pasa contacto e id para acomodarnos a la url que necesitamos para el put*/

    setAlert(true); //al terminar esta accion le decimos que se muestre el alert
    setTimeout(() => {
      //el tiempo que se va a mostrar en pantalla el alert
      setAlert(false); 
      navigate("/"); //para volver al home;
    }, 1500);
  };

  return (
    <div className="container container-fluid">
      {alert ? (
        <div className="alert alert-success" role="alert">
          Contact updated!
        </div>
      ) : (<> <form onChange={handleChange} onSubmit={handleData}>
        <h3>Update Contact</h3>
        <input
          type="text"
          name="full_name"
          defaultValue={contact.full_name}
          required
        ></input>
        <input
          type="email"
          name="email"
          defaultValue={contact.email}
          required
        ></input>
        <input
          type="text"
          name="address"
          defaultValue={contact.address}
          required
        ></input>
        <input
          type="text"
          name="phone"
          defaultValue={contact.phone}
          required
        ></input>
        <input
          type="submit"
          className="btn btn-success"
          value="Update Contact"
        ></input>
      </form>
      <Link to="/">
        <button className="btn btn-success" role="button" id="home">
          Back to Home
        </button>
      </Link></>)
      }
     
    </div>
  );
};
