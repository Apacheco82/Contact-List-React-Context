import {addContact, modifyContact, deleteContact} from "../service/index.js";

const getState = ({getStore, getActions, setStore}) => {
  return {
    store: {
      contactList: [], //el array que contiene los contactos
      id: "" //dato global para almacenar props.id y no perderlo al abrir el modal de borrado de contactos
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
      saveId: (id) => { //función que guarda el id del contacto que tengo seleccionado al intentar borrarlo
        setStore({id: id}) //seteamos el valor del store.id con el props.id del contacto que estoy intentando borrar

      }
    },
  };
};

export default getState;
