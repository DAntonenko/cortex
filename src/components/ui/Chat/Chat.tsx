import styles from "./Chat.module.scss";

type Props = {
  className?: string;
};

export function Chat({
  className,
}: Props) {
  return (
    <form className={`${styles.chat} ${className}`}>
      <label className={styles.file_upload}>
        <input name="file" type="file" />
        <div className={styles.file_upload_button}>
          <img src="/icons/paperclip.svg" alt="File Upload" />
        </div>
      </label>
      <input name="text" type="text" placeholder="What’s on your mind?" className={styles.input_text} />
      <div className={styles.microphone_button}>
        <img src="/icons/microphone.svg" alt="Microphone" />
      </div>
      <img src="/icons/audio.svg" alt="Audio" />
    </form>
  );
}
