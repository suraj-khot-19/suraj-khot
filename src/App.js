import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Router>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
