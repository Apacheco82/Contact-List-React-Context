import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./views/home.jsx";
import {Formulario} from "./views/formulario.jsx";
import {Edit} from "./views/Edit.jsx";
import injectContext from "./store/appContext";
import {Navbar} from "./component/navbar";
import {Footer} from "./component/footer";


const Layout = () => {
  /*una ruta se compone de una dirección y unos params, por ejemplo en editcontact le estamos pasando un id, 
  lo recogemos en el link del boton de modificar en el componente contacts.jsx
  -un param se declara poniendo : y detrás el nombre del param - */

  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newcontact" element={<Formulario />} />
          <Route path="/editcontact/:id" element={<Edit />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
