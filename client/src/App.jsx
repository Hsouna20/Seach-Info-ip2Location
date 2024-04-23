import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import FooterCom from "./component/footer"
import IPAddressSearch from "./pages/ipAddressSearch"

function App() {
 

  return (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<IPAddressSearch/>}/>
    </Routes>
    <FooterCom/>
  </BrowserRouter>
  )
}

export default App
