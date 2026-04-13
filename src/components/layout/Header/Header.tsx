import styles from "./Header.module.scss";

export function Header() {

  return (
    <header className={styles.header}>
      <p className={styles.logo}>CORTEX</p>
      <nav className={styles.navigation}>
        <a className={`${styles.navigation_link} ${styles.navigation_link__active}`}href="#">Home</a>
        <a className={styles.navigation_link}href="#">Chat</a>
        <a className={styles.navigation_link}href="#">Avatar</a>
        <a className={styles.navigation_link}href="#">Rewards</a>
      </nav>
      <div className={styles.user_profile}>
        <div className={styles.note}>
          <div className={styles.note_num}>
            <p>7</p>
          </div>
          <p className={styles.note_text}>Day Streak!</p>
        </div>
        <a href="#"className={styles.avatar}>
          {false ? <img src="/images/avatar.png" alt="User Avatar" /> :
          <div className={styles.avatar_placeholder} />}
        </a>
        <button className={styles.messages}>
          <img src="/icons/bell.svg" alt="Messages" />
        </button>
      </div>
    </header>
  );
}
