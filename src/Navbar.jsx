import React from 'react';
import './Navbar.css';
import logo_dark from './assets/logo-black.png'; // Adjust the path as needed
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src={logo_dark} alt="Logo" />
      </Link>
      <ul>
      <CustomLink to="/symptom-tracking" className="suse-unique-class nav-link">Symptom Tracking</CustomLink>
      <CustomLink to="/analyze" className="suse-unique-class nav-link">Analyze</CustomLink>
      <CustomLink to="/learn" className="suse-unique-class nav-link">Learn</CustomLink>
      <CustomLink to="/about-us" className="suse-unique-class nav-link">About Us</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, className, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    </li>
  );
}