import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitch.module.css";

const LanguageSwitch = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsToggle(!isToggle);
    i18n.changeLanguage(!isToggle ? "pl" : "en");
  };

  return (
    <div className={styles["language-switch"]}>
      <label>{isToggle ? "PL" : "EN"}</label>
      <input
        type="checkbox"
        id="switch"
        className={styles.switch}
        onChange={handleLanguageChange}
        checked={isToggle}
      />
      <label htmlFor="switch" className={styles.label}>
        Toggle
      </label>
    </div>
  );
};

export default LanguageSwitch;
