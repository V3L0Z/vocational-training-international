import React from "react";
import { Header, Footer } from ".";

export default function Layout({ children }) {
  const styles = {
    container: {
      display: "grid",
      gridTemplateRows: "5em 1fr 18em",
      height: "100vh",
    },
  };

  return (
    <div style={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
