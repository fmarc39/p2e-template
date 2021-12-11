import React from "react";
import styles from "../../styles/footer.module.scss";
import Image from "next/image";
import Logo from "../../public/icons/logo.png";

const footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <Image src={Logo} height={60} width={60} alt="logo" />
      </div>
      <div>
        <li>AURORY, c'est quoi ? </li>
        <li>Le token (AURY)</li>
        <li>Les actus</li>
        <li>Bien débuter</li>
        <li className={styles.eltLogo}>Jouer</li>
      </div>
      <div>
        <p>Mentions légales</p>
        <p>© François MARC - 2021</p>
      </div>
    </footer>
  );
};

export default footer;
