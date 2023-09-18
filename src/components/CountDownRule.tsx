import { Variants, motion } from "framer-motion";

export default function CountDownRule({
  activatedInRound,
  activeForNumberOfRounds,
  currentRound,
}: {
  activatedInRound: number;
  activeForNumberOfRounds: number;
  currentRound: number;
}) {
  const activeFor =
    activatedInRound + activeForNumberOfRounds - currentRound + 1;

  return (
    <motion.div
      animate={activeFor > 0 ? "active" : "expired"}
      transition={{ delay: 0.1 }}
      variants={titleVariants}
      className="rounded-lg relative h-8"
    >
      <motion.div
        className="absolute h-full w-full bg-yellow-500 rounded-lg z-1 p-1 text-right"
        animate={{
          width: `${(activeFor / activeForNumberOfRounds) * 100}%`,
          opacity: activeFor > 0 ? 1 : 0,
        }}
      >
        {activeFor > 0 && (
          <span className="bg-black rounded-lg text-white px-2 mx-1">
            {activatedInRound + activeForNumberOfRounds - currentRound + 1} kör
          </span>
        )}
      </motion.div>
      <div className="p-1">{activeFor <= 0 && "Lejárt."}</div>
    </motion.div>
  );
}

const titleVariants: Variants = {
  active: { backgroundColor: "#d1d5db", width: "100%" },
  expired: { backgroundColor: "#d1d5db", width: "80px" },
};
