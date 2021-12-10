import React from "react";
import Image from "next/image";
import Banner from "../../public/banner.jpeg";
import styles from "../../styles/homepage.module.scss";

const home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image src={Banner} height={341} width={1024} alt="banner-img" />
      </div>
      <div className={styles.overlay}>
        <h1>AURORY</h1>
        <h2>Guide et Astuces</h2>
      </div>
    </div>
  );
};

export default home;
