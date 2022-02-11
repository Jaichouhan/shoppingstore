import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";
import Login from "./Components/Login";
import Properties from "./Components/Properties";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Resigter from "./Components/Resigter";
import PropertiesDetails from "./Components/PropertiesDetails";
import DashboardCard from "./Components/DashboardCard";
import Table from "./Components/Table/Table";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Api from "./Components/Api";
import PaymentPage from "./Components/PaymentPage";
import Information from "./Components/Information";
import PaymentInformation from "./Components/PaymentInformation";
import Form from "./Components/Form/Form";
// import Menubar from "./Components/Table/Menubar";

import Document from "./Components/Document";
import Footer from "./Components/Footer";
// import Navbar1 from "./Components/Table/Navbar1";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="About" element={<About />} />
        <Route path="Login" element={<Login />} />
        <Route path="Properties" element={<Properties />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Resigter" element={<Resigter />} />
        <Route path="PropertiesDetails" element={<PropertiesDetails />} />
        <Route path="Api" element={<Api />} />
        <Route path="PaymentPage" element={<PaymentPage />} />
        <Route path="Information" element={<Information />} />
        <Route path="PaymentInformation" element={<PaymentInformation />} />
        <Route path="Form" element={<Form />} />
        <Route path="Document" element={<Document />} />
        <Route path="DashboardCard" element={<DashboardCard />} />
        <Route path="Table" element={<Table />} />
        {/* <Route path="Menubar" element={<Menubar />} /> */}
        {/* <Route path="Navbar1" element={<Navbar1 />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
