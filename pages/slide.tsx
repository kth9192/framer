import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, rotateZ: 360 },
  leaving: { opacity: 0, scale: 0, y: 50 },
};

const listVariants = {
  entry: (back: boolean) => {
    return { x: back ? -500 : 500, opacitiy: 0, scale: 0 };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back: boolean) => {
    return {
      x: back ? 500 : -500,
      scale: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    };
  },
};

function Presence() {
  const [visible, setVisible] = useState(1);
  const [showing, setShowing] = useState(false);
  const [back, setBack] = useState(false);
  const toggleShowing = () => setShowing((prevState) => !prevState);
  const next = () => {
    setBack(false);
    setVisible((prevState) => (prevState === 10 ? 10 : prevState + 1));
  };

  const prev = () => {
    setBack(true);
    setVisible((prevState) => (prevState === 1 ? 1 : prevState - 1));
  };

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: 'pink' }}>
      <div className="flex flex-col h-1/3 items-center">
        <button onClick={toggleShowing}>click</button>
        <AnimatePresence>
          {showing && (
            <Box
              variants={boxVariants}
              initial="initial"
              animate="visible"
              exit="leaving"
            />
          )}
        </AnimatePresence>
      </div>

      <div className="flex w-full h-1/3 flex-col justify-center relative">
        <div className="flex w-full  justify-center relative h-full">
          <AnimatePresence custom={back}>
            <motion.div
              custom={back}
              variants={listVariants}
              key={visible}
              className="flex justify-center items-center rounded-md bg-white w-[250px] h-[150px] font-[28px] absolute shadow"
              initial="entry"
              animate="center"
              exit="exit"
            >
              {visible}
            </motion.div>
          </AnimatePresence>{' '}
        </div>
        <div className="flex w-full justify-center gap-[10px]">
          <button
            className="flex justify-center items-center w-[150px] h-[50px] border border-purple-400 text-white"
            onClick={prev}
          >
            prev
          </button>
          <button
            className="flex justify-center items-center w-[150px] h-[50px] bg-purple-400 text-white"
            onClick={next}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Presence;
