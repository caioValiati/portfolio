import React, { useContext, useState } from "react";
import "./mouseTrailer.css";
import { AnimatePresence, motion } from "framer-motion";

export const MouseTrailer = () => {
  const [interacting, setInteracting] = useState()
  const [mousePos, setMousePos] = useState({x: 0, y: 0})
  const secondaryCursor = React.useRef(null);
  const mainCursor = React.useRef(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0
  });

  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        const interactable = event.target.closest("#interactable")

        positionRef.current.mouseX =
            clientX - secondaryCursor.current.clientWidth / 2;
        positionRef.current.mouseY =
            clientY - secondaryCursor.current.clientHeight / 2;
        setMousePos({
            x: clientX,
            y: clientY
        })
        setInteracting(interactable !== null)
    }); 

    return () => {};
  }, []);

  return (
    <div className={`cursor-wrapper`}>
      <div 
        className="main-cursor " 
        ref={mainCursor}
        style={{transform: `translate(${mousePos.x - 2.5}px, ${mousePos.y - 2.5}px)`}}
      >
        <div className="main-cursor-background"></div>
      </div>
      <AnimatePresence>
      {
        interacting && (
          <motion.div 
            initial={{ opacity: 0  }}
            animate={{ opacity: 1  }}
            exit={{opacity: 0 }}
            transition={{
              duration: 0.1,
            }}
            style={{transform: `translate(${mousePos.x - 25}px, ${mousePos.y - 30}px)`}}
            className="trailer-text">
            Click
          </motion.div>
        )
      }
      </AnimatePresence>
      <div 
        className="secondary-cursor" 
        ref={secondaryCursor}
        style={interacting ? {
            transform: `translate3d(${mousePos.x - 30}px, ${mousePos.y - 30}px, 0) scale(1.8)`,
            transition: "all 0.3s"
        } 
            : {transform: `translate3d(${mousePos.x - 30}px, ${mousePos.y - 30}px, 0) scale(1)`}}
      >
        <div className="cursor-background"></div>
      </div>
    </div>
  );
};
