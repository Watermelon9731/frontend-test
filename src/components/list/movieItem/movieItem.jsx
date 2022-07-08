import { useEffect, useRef } from "react";
import videojs from "video.js";

export default function MovieItem(props) {
  const videoItemRef = useRef(null);
  const playerListRef = useRef(null);
  const { options, onReady, code } = props;

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerListRef.current) {
      const videoElement = videoItemRef.current;

      if (!videoElement) return;

      const player = (playerListRef.current = videojs(
        videoElement,
        options,
        () => {
          onReady && onReady(player);
        }
      ));

      const imaOptions = {
        id: videoElement.id,
        adTagUrl:
          "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=",
      };

      player.ima(imaOptions);

    } else {
      
    }
  }, [options, videoItemRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerListRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerListRef.current = null;
      }
    };
  }, [playerListRef]);

  return (
    <div data-vjs-player>
      <video ref={videoItemRef} className="video-js vjs-big-play-centered" id={code} />
    </div>
  );
}
