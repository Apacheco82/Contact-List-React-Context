import {addContact, modifyContact, deleteContact} from "../service/index.js";



const getState = ({getStore, getActions, setStore}) => {
  return {
    store: {
      contactList: [],
    },
    actions: {
      addContactList: (info) => {
        setStore({contactList: info});
      },
      addSingleContact: (contact) => {
        addContact(contact);
      },
	  modifySingleContact : (contact, id) =>{
		modifyContact(contact, id)
	  },
	  deleteSingleContact : (id) =>{
		deleteContact(id)
	  }
	  
    },
  };
};

export default getState;
