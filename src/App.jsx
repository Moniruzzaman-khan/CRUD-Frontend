import {BrowserRouter, Route, Routes} from "react-router-dom";
import Read from "./pages/Read.jsx";
import Create from "./pages/Create.jsx";
import Update from "./pages/Update.jsx";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Read />}></Route>
                <Route path='/create' element={<Create />}></Route>
                <Route path='/update/:id' element={<Update/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
