import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./SwitchLang.module.css";

const SwitchLang = () => {
  const [isToggle, setIsToggle] = useState<boolean>(
    localStorage.getItem("isToggle") === "true" ? true : false
  );

  const { i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("isToggle", isToggle.toString());
  }, [isToggle]);

  const handleLanguageChange = () => {
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

export default SwitchLang;
