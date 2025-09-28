import React from "react";

const Footer = () => {
  const year = new Date().getFullYear(); // gets current year
  return (
    <footer style={{ textAlign: "center", padding: "1rem", background: "#eee", marginTop: "2rem", fontSize: "0.9rem", color: "#555" }}>
      &copy; {year} Code Craft. All rights reserved.
    </footer>
  );
};

export default Footer;
