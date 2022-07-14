import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "../utils/axiosConfig";
import { motion } from "framer-motion";
import styles from "../styles/Row.module.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axios.get(fetchUrl);
        console.log(req.data.results);
        setMovies(req.data.results);
        return req;
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const isLargeRow = isLarge ? styles.row__posterLarge : styles.row__poster;

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2 className={styles.__title}>{title}</h2>
      <div className={styles.row__posters}>
        {movies.map((movie) => (
          <div className={styles.row__poster} id={movie.id} key={movie.id}>
            <motion.div
              transition={{ delay: 0.05, stiffness: 20 }}
              whileHover={{ scale: 1.08 }}
            >
              <img
                onClick={() => handleClick(movie)}
                className={`${isLargeRow}`}
                src={`${baseURL}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </motion.div>
          </div>
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetechUrl: PropTypes.string.isRequired,
  isLarge: PropTypes.bool,
};

export default Row;
