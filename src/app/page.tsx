import Image from "next/image";
import { Chat } from "@/components/ui/Chat/Chat";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.main_menu}>
        {/* <nav className={styles.activities}>
          <a href="#" className={styles.activity}>
          </a>
        </nav> */}
      </section>
      <section className={styles.themes_section}>
        <h1 className={styles.main_title}>
          Hi&nbsp;John, what do&nbsp;you want to&nbsp;know?
        </h1>
        <div className={styles.themes_section_list}>
          <p className={styles.theme}>What’s the largest ocean on Earth?</p>
          <p className={styles.theme}>Tell me a joke!</p>
          <p className={styles.theme}>What’s the largest ocean on Earth?</p>
          <p className={styles.theme}>What are you doing today?</p>
          <p className={styles.theme}>What are you doing today?</p>
          <p className={styles.theme}>What’s the largest ocean on Earth?</p>
        </div>
        <Chat className={styles.chat} />
      </section>
      <section className={styles.achievements}></section>
      <div className={styles.image_container}>
        <div className={styles.image_container_inner}>
          <Image
            className={styles.image}
            src="/images/bear.png"
            alt="Bear"
            width={329}
            height={448}
          />
        </div>
      </div>
    </main>
  );
}
