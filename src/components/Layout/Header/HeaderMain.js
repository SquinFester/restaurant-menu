import classes from "./HeaderMain.module.css";

import MealsImage from "../../../assets/background/meals.jpg";

const HeaderMain = () => {
  return (
    <section className={classes["header-main"]}>
      <img src={MealsImage} alt="a table of salats" />
      <div className={classes.triangle}>
        <svg
          data-name="traingle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className={classes["shape-fill"]}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeaderMain;
