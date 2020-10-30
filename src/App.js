import React from "react";

import Header from "./components/header/Header";
import Slider from "./components/Slider";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

import styles from "./App.module.css";
import { mainSlides } from "./data";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Slider data={mainSlides} height />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
