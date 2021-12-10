import React from "react";
import styles from "../../styles/nbavbar.module.scss";
import Image from "next/image";
import Logo from "../../public/icons/logo.png";

const header = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.navbar}>
          <div className={styles.logo}>
            <Image src={Logo} height={60} width={60} alt="logo" />
          </div>
          <li>Acceuil</li>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>Sports</li>
          <li>Kids</li>
          <li>Library</li>
        </ul>
      </nav>
    </div>
  );
};

export default header;
