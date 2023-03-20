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
      redirect: 'follow'
    });

    console.log("POST hecho con exito"); //mensaje en consola para saber que se ha realizado con éxito
  } catch (error) {
    console.log("Error:", error); //mensaje de error si el contacto no se carga
  }
};
