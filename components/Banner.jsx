import { useState, useEffect } from "react";
import endpoints from "../utils/apiConfig";
import axios from "../utils/axiosConfig";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axios.get(endpoints.fetchNetflixOriginals);
        setMovie(
          req.data.results[Math.floor(Math.random() * req.data.results.length)]
        );
        return req;
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
      className={styles.banner}
    >
      <div className={styles.banner__contents}>
        <h1 className={styles.banner__title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={styles.banner__buttons}>
          <button className={styles.banner__button}>Play</button>
          <button className={styles.banner__button}>My List</button>
        </div>
        <h1 className={styles.banner__description}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
    </header>
  );
};

export default Banner;
