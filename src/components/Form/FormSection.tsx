import { TextField } from "@mui/material";
import styles from "./FormSection.module.css";

const FormSection = () => {
  return (
    <div className={styles["form__section"]}>
      <div className={styles.gif}></div>
      <div className={styles.form}>
        <h3>Ask me!</h3>
        <form action="">
          <div className={styles["form-inputs"]}>
            <TextField
              id="outlined-basic"
              label="Your e-mail.."
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Your name.."
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Your topic.."
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Message.."
              variant="outlined"
              multiline
            />
          </div>
          <div className={styles["form__send"]}>
            <button type="submit" className={styles["btn-correct"]}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
