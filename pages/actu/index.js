import React from "react";
import styles from "../../styles/actus.module.scss";
import Image from "next/image";
import staking from "../../public/staking.jpeg";

const actus = () => {
  return (
    <div className={styles.container}>
      <h1>Actus</h1>
      <div className={styles.actuBox}>
        <article>
          <div className={styles.articleImg}>
            <Image
              src={staking}
              height={1300}
              width={2200}
              alt="article-illustration"
            />
          </div>
          <div className={styles.articleBody}>
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </article>

        <article>
          <div className={styles.articleImg}>
            <Image
              src={staking}
              height={1300}
              width={2200}
              alt="article-illustration"
            />
          </div>
          <div className={styles.articleBody}>
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </article>

        <article>
          <div className={styles.articleImg}>
            <Image
              src={staking}
              height={1300}
              width={2200}
              alt="article-illustration"
            />
          </div>
          <div className={styles.articleBody}>
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </article>
        <article>
          <div className={styles.articleImg}>
            <Image
              src={staking}
              height={1300}
              width={2200}
              alt="article-illustration"
            />
          </div>
          <div className={styles.articleBody}>
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </article>
        <article>
          <div className={styles.articleImg}>
            <Image
              src={staking}
              height={1300}
              width={2200}
              alt="article-illustration"
            />
          </div>
          <div className={styles.articleBody}>
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </article>
        <article>
          <div className={styles.articleImg}>
            <Image
              src={staking}
              height={1300}
              width={2200}
              alt="article-illustration"
            />
          </div>
          <div className={styles.articleBody}>
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default actus;
