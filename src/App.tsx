
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CotalizerLanding from "./main/pageMain"
import PageEspera from "./espera/pageEspera"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CotalizerLanding />} />
        <Route path='/espera' element={<PageEspera />} />
      </Routes>
    </Router>

  )
}

export default App