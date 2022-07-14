import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import Nav from "./components/layout/Nav";
import Admin from "./components/admin/AdminPage";
import ProductsDetail from "./components/products/ProductsDetails";
import "./App.css";
import ContactForm from "./components/contact/ContactPage"

function App() {
	return (
		<AuthProvider>
		<Router>
			<Nav />

			<div className="container">
				<Routes>
          			<Route path="/" exact element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/contact" element={<ContactForm />} />
          			<Route path="/detail/:id" element={<ProductsDetail />} />
				</Routes>
			</div>
		</Router>
		</AuthProvider>
	);
}

export default App;