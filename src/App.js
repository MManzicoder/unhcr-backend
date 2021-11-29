import { Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Auth from "./pages/Auth.jsx";

function App() {
  return (
   <Router>
     <Routes>
          <Route path="/" element={<Auth />}/>
    </Routes>
   </Router>
  );
}

export default App;
