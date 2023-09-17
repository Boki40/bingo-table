import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RuleTimer({
  minutes = 0,
  seconds = 0,
}: {
  minutes?: number;
  seconds?: number;
}) {
  const [remainingSeconds, setRemainingSeconds] = useState<number>(
    minutes * 60 + seconds
  );
  const [active, setActive] = useState<boolean>(true);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (remainingSeconds > 0) {
        setRemainingSeconds(remainingSeconds - 1);
      }
      if (remainingSeconds === 0) {
        clearInterval(myInterval);
        setActive(false);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingSeconds]);

  return (
    <motion.div
      animate={active ? "active" : "expired"}
      transition={{ delay: 0.1 }}
      variants={titleVariants}
      className="p-1 rounded-lg flex justify-center"
    >
      {active ? (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max h-5">
          <div className="flex p-2 bg-yellow-500 rounded-box text-black gap-1">
            <span className="countdown font-mono text-xl text-black">
              <span
                style={{ "--value": Math.floor(remainingSeconds / 60) }}
              ></span>
            </span>
            p
          </div>
          <div className="flex p-2 bg-yellow-500 rounded-box  text-black gap-1">
            <span className="countdown font-mono text-xl text-black">
              <span style={{ "--value": remainingSeconds % 60 }}></span>
            </span>
            mp
          </div>
        </div>
      ) : (
        <div>Lejárt.</div>
      )}
    </motion.div>
  );
}

const titleVariants: Variants = {
  active: { width: "100%" },
  expired: { width: "20%", backgroundColor: "#d1d5db" },
};
