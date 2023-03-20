import React, {useEffect, useContext} from "react";
import "../../styles/home.css";
import { getContacts } from "../service/index.js";
import {Context} from "../store/appContext";

export const Home = () => {
  const {store, actions} = useContext(Context); //contexto global

  const getAgendaContacts = async () =>{ //
	const data = await getContacts()
	 actions.addContactList(data)
	 console.log("la data",store.contactList)
  }

  useEffect( () => getAgendaContacts (),[])



  return <div className="text-center mt-5">
    
  </div>;
};
