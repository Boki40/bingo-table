import { motion } from "framer-motion";
import spotifyLogo from "../assets/spotify logo.png";

export default function SpotifyLink({ artistId }: { artistId: string }) {
  return (
    <motion.div
      animate={{ y: [-10, 0, 0], scale: [0.8, 1, 1] }}
      className="flex gap-2 bg-black text-white p-1 rounded-lg w-48 cursor-pointer items-center"
      onClick={() =>
        window.open(`https://open.spotify.com/artist/${artistId}`, "_blank")
      }
    >
      <img src={spotifyLogo} alt="spotify-logo" className="h-5 w-5" />
      <div className=" font-sans">Előadó megnyitása</div>
    </motion.div>
  );
}
