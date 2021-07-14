import styles from "./info.module.css";
import Head from "next/head";

export default function info() {
  return (
    <>
      <Head>
        <title>INFO</title>
      </Head>
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        hi there i am heree
      </div>

      <div className={styles.avinash}></div>
      <div className={styles.mainbody}>
        <div className={styles.portifolio}>
          <div className={styles.one}>ONE </div>

          <div className={styles.two}> two</div>

          <div className={styles.three}>three</div>

          <div className={styles.four}>four</div>

          <div className={styles.five}>five</div>

          <div className={styles.six}>six</div>
        </div>
      </div>

      <div className={styles.Mainbody}>
        <div className={styles.Mainnav}>
          <div className={styles.navtitle}></div>
          <div className={styles.navmenu}></div>
        </div>

        <div className={styles.MainBanner}></div>
      </div>
    </>
  );
}
