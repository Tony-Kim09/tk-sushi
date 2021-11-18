import React from "react";
import NavBar from "components/nav/NavBar";
import Footer from "components/footer/Footer";
import HomePage from "pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuPage from "pages/MenuPage";
import ContactUsPage from "pages/ContactUsPage";
import AboutUsPage from "pages/AboutUsPage";
import OrderNowPage from "pages/OrderNowPage";
import CheckOutPage from "pages/CheckOutPage";
import OrderReceivedPage from "pages/OrderReceivedPage";


const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/menu">
          <MenuPage />
        </Route>
        <Route path="/contact-us">
          <ContactUsPage />
        </Route>
        <Route path="/about-us">
          <AboutUsPage />
        </Route>
        <Route path="/order-now">
          <OrderNowPage />
        </Route>
        <Route path="/check-out">
          <CheckOutPage />
        </Route>
        <Route path="/order-received">
          <OrderReceivedPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;