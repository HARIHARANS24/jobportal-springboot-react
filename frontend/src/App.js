import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Dashboard, Create } from "./pages"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer" >
          <Route path="/employer/dashboard" element={<Dashboard />}/>
          <Route path="/employer/create" element={<Create />}/>
          </Route>
          <Route path="/employee/feed" element={<Feed />}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
