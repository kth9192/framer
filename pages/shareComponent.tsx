import { motion } from 'framer-motion';
import { NextPage } from 'next';
import React, { useState } from 'react';

const ShareComponent: NextPage = () => {
  const [isClick, setClick] = useState(false);
  const toggleClick = () => setClick((prevState) => !prevState);

  return (
    <div
      className="flex w-full h-full justify-center items-center gap-[100px] bg-rose-400"
      onClick={toggleClick}
    >
      <div
        className={`flex w-[300px] h-[300px] bg-white rounded-lg justify-center items-center `}
      >
        {!isClick && (
          <motion.div
            className="bg-violet-400 w-[100px] h-[100px] shadow rounded-full"
            layoutId="sameCircle"
            style={{ borderRadius: '@apply rounded-full' }}
          ></motion.div>
        )}
      </div>

      <div
        className={`flex w-[300px] h-[300px] bg-white rounded-lg justify-center items-center `}
        onClick={toggleClick}
      >
        {isClick && (
          <motion.div
            className="bg-violet-400 w-[100px] h-[100px] shadow rounded-full"
            layoutId="sameCircle"
            style={{ borderRadius: 0, scale: 2 }}
          ></motion.div>
        )}
      </div>
    </div>
  );
};

export default ShareComponent;
