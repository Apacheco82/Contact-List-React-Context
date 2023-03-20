export const getContacts =async () => {
    
    const URL = "https://assets.breatheco.de/apis/fake/contact/agenda/apacheco";
   
       try{ 
           const response = await fetch(URL)
           const data = await response.json()
           return data
   
       } catch(error){ console.log("Error: ",error)}
   
   }
   