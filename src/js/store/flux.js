const getState = ({getStore, getActions, setStore}) => {
	return {
	  store: {
		contactList: [],
	  },
	  actions: {
		addContactList: (info) => {
		  setStore({contactList: info});
		},
	  },
	};
  };
  
  export default getState;
  
