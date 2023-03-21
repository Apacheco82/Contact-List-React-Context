import {addContact, modifyContact, deleteContact} from "../service/index.js";

const getState = ({getStore, getActions, setStore}) => {
  return {
    store: {
      contactList: [], //el array que contiene los contactos
    },
    actions: {
      addContactList: (info) => { //funcion para añadir contactos desde la api al array de store
        setStore({contactList: info});//setea el valor partiendo de los datos traidos por el GET
      },
      addSingleContact: (contact) => { //funcion para añadir un solo contacto nuevo a agenda POST
        addContact(contact); //se llama a una funcion en index.js
      },
      modifySingleContact: (contact, id) => { //funcion para editar un contacto por id PUT
        modifyContact(contact, id);//se llama a una funcion en index.js
      },
      deleteSingleContact: (id) => { //funcion para borrar un contacto por id DELETE
        deleteContact(id);//se llama a una funcion en index.js
      },
    },
  };
};

export default getState;
