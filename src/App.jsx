import TelaLogin from "./pages/TelaLogin"
import AdministradorTela from "./pages/AdministradorTela"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" 
          element={<TelaLogin />} />

          <Route
            path="/administrador"
            element={<AdministradorTela />}
          />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
