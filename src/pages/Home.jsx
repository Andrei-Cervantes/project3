import React from 'react';
import MainNavbar from "../components/MainNavbar";
import Landing from '../components/Landing';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <MainNavbar />
            <Landing />
            <AboutUs />
            <Products />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}