import { Variants, motion } from "framer-motion";
import { useState } from "react";

const OPTIONS = [
  "Igyál 1 kortyot",
  "Igyál 2 kortyot",
  "Igyál 3 kortyot",
  "Igyál 4 kortyot",
  "Igyál 5 kortyot",
  "Igyál 5 kortyot, vagy csinálj 5 fekvőt",
  "Igyál 8 kortyot",
  "Igyál 10 kortyot",
  "Igyál 10 kortyot, vagy csinálj 10 fekvőt",
  "Nem kell innotok",
  "Mindenki igyon 5 kortyot",
];

export default function RandomSip() {
  const [options] = useState<string[]>(
    OPTIONS.sort(() => Math.random() - 0.5).slice(0, 3),
  );

  const [selected, setSelected] = useState<number | undefined>();

  return (
    <motion.div
      className="flex justify-around bg-gray-300 p-4 rounded-lg border-x-4 "
      animate={{ scale: [0, 1.2, 1], y: [-50, 0] }}
    >
      {options.map((option, index) => (
        <motion.div
          key={option}
          className={`bg-yellow-500 p-3 rounded-lg border border-b-2 max-w-[30%]  ${
            selected === undefined &&
            "cursor-pointer text-2xl border-b-yellow-600"
          } 
          `}
          animate={getVariant(index, selected)}
          variants={variants}
          onClick={() => {
            if (selected === undefined) {
              setSelected(index);
            }
          }}
          whileHover={selected === undefined ? { scale: 1.2 } : {}}
        >
          {selected !== undefined ? option : `${index + 1}.`}
        </motion.div>
      ))}
    </motion.div>
  );
}

const getVariant = (index: number, selectedIndex: number | undefined) => {
  if (selectedIndex === undefined) {
    return "hidden";
  } else if (selectedIndex === index) {
    return "selected";
  } else {
    return "revealed";
  }
};

const variants: Variants = {
  hidden: {
    backgroundColor: "#eab308",
  },
  selected: {
    backgroundColor: "#eab308",
    scale: 1.2,
  },
  revealed: {
    backgroundColor: "#d1d5db",
    opacity: 0.5,
  },
};
