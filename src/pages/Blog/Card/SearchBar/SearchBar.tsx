import { TextField } from "@mui/material";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles["search-bar"]}>
      <TextField
        id="outlined-basic"
        label="Search blog post..."
        variant="outlined"
        className={styles.search}
      />
    </div>
  );
};

export default SearchBar;
