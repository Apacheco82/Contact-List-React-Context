export const getContacts = async () => {
  const URL = "https://assets.breatheco.de/apis/fake/contact/agenda/apacheco";

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const addContact = async (contact) => {
  const URL_Post = "https://assets.breatheco.de/apis/fake/contact/";

  try {
    await fetch(URL_Post, {
      //se envian los datos con post, opciones dadas por la API
      method: "POST",
      body: JSON.stringify(contact),
      headers: {"Content-Type": "application/json"},
      redirect: "follow",
    });

    console.log("POST hecho con exito"); //mensaje en consola para saber que se ha realizado con éxito
  } catch (error) {
    console.log("Error:", error); //mensaje de error si el contacto no se carga
  }
};

export const modifyContact = async (contact, id) => {
  const URL_Put = "https://assets.breatheco.de/apis/fake/contact/";

  try {
    await fetch(`${URL_Put}/${id}`.trim(), {
      //se envian los datos con post, opciones dadas por la API
      method: "PUT",
      body: JSON.stringify(contact),
      headers: {"Content-Type": "application/json"},
      redirect: "follow",
    });

    console.log("PUT hecho con exito"); //mensaje en consola para saber que se ha realizado con éxito
  } catch (error) {
    console.log("Error:", error); //mensaje de error si el contacto no se carga
  }
};

export const deleteContact = async (id) => {
  const URL_Del = "https://assets.breatheco.de/apis/fake/contact/";

  try {
    await fetch(`${URL_Del}/${id}`.trim(), {
      //se envian los datos con post, opciones dadas por la API
      method: "DELETE",
      redirect: "follow",
    });

    console.log("Delete hecho con exito"); //mensaje en consola para saber que se ha realizado con éxito
  } catch (error) {
    console.log("Error:", error); //mensaje de error si el contacto no se carga
  }
};
