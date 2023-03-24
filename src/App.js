import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/loginpage';
import Success from './pages/successpage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/success" element={<Success></Success>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
