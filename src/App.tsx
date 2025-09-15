
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CotalizerLanding from "./main/pageMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CotalizerLanding />} />
      </Routes>
    </Router>

  )
}

export default App