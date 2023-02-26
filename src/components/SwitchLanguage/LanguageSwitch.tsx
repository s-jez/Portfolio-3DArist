import { FC, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select onChange={handleLanguageChange} value={i18n.language}>
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </select>
  );
};

export default LanguageSwitch;
