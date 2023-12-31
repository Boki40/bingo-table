import { motion } from "framer-motion";
import { flags } from "./utils/flags";
import { useEffect, useState } from "react";

export default function FlagGame() {
  const [currentFlag, setCurrentFlag] = useState<[string, string]>(["", ""]);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  useEffect(() => {
    const randomFlag = flags[Math.floor(Math.random() * flags.length)];
    setCurrentFlag(randomFlag);
  }, []);

  return (
    <div
      onClick={() => setIsRevealed((prev) => !prev)}
      className="flex gap-5 items-center cursor-pointer bg-gray-300 rounded-2xl p-3"
    >
      <div
        className="h-24 w-40 bg-center  bg-no-repeat bg-contain rounded-lg shadow-lg glass gow-0"
        style={{
          backgroundImage: `url(images/flags/${currentFlag[1]})`,
        }}
      />
      <div className={`text-2xl`}>
        {!isRevealed ? (
          <motion.div
            key={0}
            animate={{
              opacity: [0, 1],
              y: [-25, 0],
            }}
          >
            Kattints a felfedéshez
          </motion.div>
        ) : (
          <motion.div
            key={1}
            animate={{
              opacity: [0, 1],
              y: [-25, 0],
            }}
          >
            {currentFlag[0]}
          </motion.div>
        )}
      </div>
    </div>
  );
}