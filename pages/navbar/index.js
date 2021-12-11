import React from "react";
import styles from "../../styles/nbavbar.module.scss";
import Image from "next/image";
import Logo from "../../public/icons/logo.png";
import VideoGamesLogo from "../../public/icons/game-control.png";

const header = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.navbar}>
          <div className={styles.logo}>
            <Image src={Logo} height={60} width={60} alt="logo" />
          </div>
          <li>AURORY, c'est quoi ? </li>
          <li>Le token (AURY)</li>
          <li>Les actus</li>
          <li>Bien débuter</li>
          <li className={styles.eltLogo}>
            Jouer
            <Image
              src={VideoGamesLogo}
              height={60}
              width={60}
              alt="video-game-logo"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default header;
