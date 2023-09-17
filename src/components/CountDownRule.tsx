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
      className="p-1 rounded-lg"
    >
      {activeFor > 0 ? (
        <>
          Még
          <span className="bg-black rounded-lg text-white px-2 mx-1">
            {activatedInRound + activeForNumberOfRounds - currentRound + 1}
          </span>{" "}
          körig érvényes.
        </>
      ) : (
        "Lejárt."
      )}
    </motion.div>
  );
}

const titleVariants: Variants = {
  active: { backgroundColor: "#eab308", width: "100%" },
  expired: { backgroundColor: "#d1d5db", width: "20%" },
};
