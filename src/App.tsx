import { Button } from "@/components/ui/button"
import { BrowserRouter, Route, Routes } from "react-router"
import VIEWS from "./misc/VIEWS"
import Home from "./views/Home/Home"
import Art from "./views/Art/Art"
import Artist from "./views/Artist/Artist"
import Gallery from "./views/Gallery/Gallery"
import Login from "./views/Login/Login"

export function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path={VIEWS.INDEX} element={<Home />} />
          <Route path={VIEWS.ART} element={<Art />} />
          <Route path={VIEWS.ARTIST} element={<Artist />} />
          <Route path={VIEWS.GALLERY} element={<Gallery />} />
          <Route path={VIEWS.LOGIN} element={<Login />} />

        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
