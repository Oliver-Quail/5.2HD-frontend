import { BrowserRouter, Route, Routes } from "react-router"
import VIEWS from "./misc/VIEWS"
import Home from "./views/Home/Home"
import Art from "./views/Art/Art"
import Artist from "./views/Artist/Artist"
import Gallery from "./views/Gallery/Gallery"
import Login from "./views/Login/Login"
import NavBar from "./components/user/NavBar"
import { createContext, useContext } from "react"
import Footer from "./components/user/Footer"
import SignUp from "./views/SignUp/SignUp"

export function App() {

  const AuthorizationContext = createContext({authorization: "", setAuthorization: () => {}});

  const {authorization, setAuthorization} = useContext(AuthorizationContext);

  return (
    <main className="w-full">
      <AuthorizationContext.Provider value={{authorization, setAuthorization}}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={VIEWS.INDEX} element={<Home />} />
            <Route path={VIEWS.ART} element={<Art />} />
            <Route path={VIEWS.ARTIST} element={<Artist />} />
            <Route path={VIEWS.GALLERY} element={<Gallery />} />
            <Route path={VIEWS.LOGIN} element={<Login />} />
            <Route path={VIEWS.SIGNUP} element={<SignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthorizationContext.Provider>
    </main>
  )
}

export default App
