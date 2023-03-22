import React, {useEffect, useState, useContext} from "react";
import "../../styles/home.css";
import {getContacts} from "../service/index.js";
import {Context} from "../store/appContext";
import { Link } from "react-router-dom";
import { Contacts } from "../component/contacts.jsx"

export const Home = () => {
  const { store, actions } = useContext(Context); //contexto global
  const [load, setLoad] = useState(false)

  useEffect(() => { //al iniciar la web
    const getAgendaContacts = async () => { //se crea una funcion para traer los contactos de la agenda
      const data = await getContacts(); //se llama a la funcion de index.js para traer los datos y se almacenan en una const
      actions.addContactList(data); //se llama a la funcion de flux para setear esos datos al estado global
      setLoad(true)
     // console.log("la data", store.contactList);
    };
  
    getAgendaContacts(); //se llama a la funcion que hemos creado arriba
  }, [store.contactList]); //se mete entre [] el store.contactList para que la web se recargue cuando cambie algún dato de los contactos globales


  return (
    <>
    {load ? ( // si los contactos ya han sido cargados
      <div className="home">
        {store.contactList.map((item, key) => (
          <Contacts
            key={key}
            id={item.id}
            full_name={item.full_name}
            email={item.email}
            address={item.address}
            phone={item.phone}
          />
        ))}
        <Link to="/newcontact">
          <button className="btn btn-success" role="button" id="btnHome">
            Create a new contact
          </button>
        </Link>
      </div>
    ) : (
      // si los contactos aún no se han cargado, se renderiza el spinner
      <div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
    )}
  </>
  );
};
