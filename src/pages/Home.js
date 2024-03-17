import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  const styles = {
    container: {
      background: "#555",
    },
  };
  return (
    <Layout>
      <div style={styles.container}>This is my content</div>
    </Layout>
  );
}
