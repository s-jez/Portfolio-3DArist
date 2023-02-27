import {useEffect, RefObject} from "react";
import styles from "components/Navbar/Navbar.module.css";


const useOnClickOutside = (ref: RefObject<HTMLDivElement>, handler: () => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      if (event.target instanceof HTMLDivElement && event.target.classList.contains(styles["mobile-nav"])) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
export default useOnClickOutside;




