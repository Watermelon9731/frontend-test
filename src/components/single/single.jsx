import { useRef } from "react";
import VideoJS from "./videojs/videojs";
import "videojs-contrib-ads";
import "videojs-ima";

export default function Single() {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here:
    player.on("waiting", () => {});

    player.on("dispose", () => {});
  };

  return (
    <section id="movieList">
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady}/>
    </section>
  );
}
