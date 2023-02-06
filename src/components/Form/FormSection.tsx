import { Button, TextField } from "@mui/material";
import styles from "./FormSection.module.css";

const FormSection = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className={styles["form__section"]}>
      <div className={styles.gif}></div>
      <div className={styles.form}>
        <h3>Ask me!</h3>
        <form action="" onSubmit={handleSubmit}>
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
            <Button
              variant="contained"
              color="success"
              className={styles["btn-correct"]}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
