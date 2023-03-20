import { addContact } from "../service/index.js";

const getState = ({getStore, getActions, setStore}) => {
	return {
	  store: {
		contactList: [],
	  },
	  actions: {
		addContactList: (info) => {
		  setStore({contactList: info});
		},
		addSingleContact: (contact) =>{
			console.log("en el flux",contact)
			addContact(contact)
			
		}
	  },
	};
  };
  
  export default getState;
  
