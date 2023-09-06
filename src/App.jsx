import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Receipt from "./pages/Receipt";
import Subscribe from "./pages/Subscribe";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Membership from "./pages/Membership";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Receipt" element={<Receipt />} />
          <Route path="/Subscribe" element={<Subscribe />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/Membership" element={<Membership />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
