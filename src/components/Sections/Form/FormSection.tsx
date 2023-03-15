import { Button, TextField } from "@mui/material";
import Arrow from "components/Carousel/Arrows/Arrow";
import styles from "./FormSection.module.css";
import { useTranslation } from "react-i18next";

const FormSection = () => {
  const { t } = useTranslation();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <section className={styles["form__section"]} id="contact">
      <div className={styles.gif}></div>
      <div className={styles.form}>
        <h3>{t("home.form.title")}</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className={styles["form-inputs"]}>
            <TextField
              id="outlined-basic"
              label={t("home.form.email")}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label={t("home.form.name")}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label={t("home.form.topic")}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label={t("home.form.msg")}
              variant="outlined"
              multiline
            />
          </div>
          <div className={styles["form__send"]}>
            <Button
              variant="contained"
              color="success"
              className={styles["btn-correct"]}
              size="medium"
            >
              {t("home.form.btn")}
            </Button>
          </div>
        </form>
      </div>
      <Arrow direction="up" />
    </section>
  );
};

export default FormSection;
