import React, {useEffect, useContext} from "react";
import "../../styles/home.css";
import {getContacts} from "../service/index.js";
import {Context} from "../store/appContext";
import { Link } from "react-router-dom";
import { Contacts } from "../component/contacts.jsx"

export const Home = () => {
  const { store, actions } = useContext(Context); //contexto global

  useEffect(() => {
    const getAgendaContacts = async () => {
      const data = await getContacts();
      actions.addContactList(data);
     // console.log("la data", store.contactList);
    };
  
    getAgendaContacts();
  }, [store.contactList]);

  

  return (
    <>
      <div className="home">

{ store.contactList.map( (item, key) => {
				return (
               < Contacts key={key} id={item.id} full_name ={item.full_name} email={item.email}  address={item.address} phone={item.phone}  /> 
				)
			})}
     <Link to="/newcontact">
        <button className="btn btn-success" role="button" id="btnHome">
          Create a new contact
        </button>
      </Link>
      </div>

 
    </>
  );
};
