import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/actions/movieAction";
import MovieItem from "./movieItem/movieItem";
import "videojs-contrib-ads";
import "videojs-ima";

export default function List() {
  const playerListRef = useRef(null);

  const { movieData } = useSelector((state) => state.movieReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const videoJsOptions = (url) => {
    return {
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: url,
          type: "application/x-mpegURL",
        },
      ],
    };
  };

  const handlePlayerReady = (player) => {
    playerListRef.current = player;

    // You can handle player events here:
    player.on("waiting", () => {});

    player.on("dispose", () => {});
  };

  const handleDetail = (detail) => {
    if (detail) {
      if (detail.length > 40) {
        return detail.slice(0, 150) + "...";
      }
    }
  };

  const renderMovieList = () => {
    return movieData.map((movie, index) => {
      return (
        <div className="item" key={index}>
          <MovieItem
            options={videoJsOptions(movie.url)}
            onReady={handlePlayerReady}
            code={movie.code}
          />
          <div className="detail">
            <h3>{movie.name}</h3>
            <p>{handleDetail(movie.detail)}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <section id="movieList">
      <div className="container">{renderMovieList()}</div>
    </section>
  );
}
