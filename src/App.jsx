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
import Today from "./pages/Today";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import HabitTarget from "./pages/HabitTarget";
import HabitHistory from "./pages/HabitHistory";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Receipt" element={<Receipt />} />
          <Route path="/Subscribe" element={<Subscribe />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/Today" element={<Today />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/HabitTarget" element={<HabitTarget />} />
          <Route path="/HabitHistory" element={<HabitHistory />} />
          <Route path="/" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
