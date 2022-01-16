import { AnimatePresence, motion } from 'framer-motion';
import { NextPage } from 'next';
import React, { useState } from 'react';
import layoutStyle from '../styles/layout.module.scss';

const Grid: NextPage = () => {
  const [clickedId, setClickedID] = useState<string | null>(null);

  const toggelClick = (id: string) => {
    console.log('tes');

    setClickedID(String(id));
  };

  return (
    <div className="flex w-full h-full justify-center items-center bg-rose-400">
      <div
        className={`grid grid-cols-3 w-[50vw] h-1/3 gap-[10px] ${layoutStyle.testGrid}`}
      >
        {Array.from({ length: 4 }, (_, i) => i + 1).map((item, idx) => (
          <motion.div
            key={new Date().toString() + idx}
            className="bg-white rounded"
            layoutId={`${item}`}
            onClick={() => toggelClick(String(item))}
          ></motion.div>
        ))}
      </div>
      <AnimatePresence>
        {clickedId && (
          <motion.div
            initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
            animate={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
            exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
            className="flex justify-center items-center w-full h-full  absolute z-10"
            onClick={() => setClickedID(null)}
          >
            <motion.div
              className="w-[400px] h-[200px] bg-white rounded opacity-100"
              layoutId={clickedId}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Grid;
