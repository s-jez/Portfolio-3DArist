import styles from "./FormSection.module.css";

const FormSection = () => {
  return (
    <div className={styles["form__section"]}>
      <div className={styles.gif}></div>
      <div className={styles.form}>
        <h3>Ask me!</h3>
        <form action="">
          <input type="email" placeholder="Your e-mail.." required /> <br />
          <input type="text" placeholder="Your name.." required /> <br />
          <input type="text" placeholder="Topic" required /> <br />
          <textarea
            name=""
            id=""
            placeholder="Hi, How are you?"
            required
          ></textarea>
          <div className={styles["form__send"]}>
            <button type="submit" className="btn-correct">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
