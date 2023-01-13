import { ModalBodyStyled, ModalDiv } from "./ModalStyled";
import React, { SetStateAction, useContext, useEffect, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

interface iModal {
  titulo: string;
  click: boolean;
  setClick: React.Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const ModalBody = ({
  titulo,
  click,
  setClick,
  children,
}: iModal) => {
  const refModal = useRef(null);
  const layoutHeight = window.screen.height;
  const {openModal,setOpenModal}=useContext(AuthContext) 

  useEffect(() => {
    if(openModal===false){
      setClick(false)
    }
    function modalOutClick(event: { target: any }) {
      const clique = event.target;
      const modal = refModal.current;
      if (clique.contains(modal)) {
        setClick(false);
        setOpenModal(false)
      }
    }
    if (click && openModal) {
      window.addEventListener("click", modalOutClick);

      return () => {
        window.removeEventListener("click", modalOutClick);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click, openModal]);

  function closeModal(){
    setOpenModal(false)
    setClick(false)
  }
  
  if (click && openModal && children) {
    return (
      <ModalBodyStyled ref={refModal}>
        <motion.div
          className="tt"
          initial={{ y: -layoutHeight }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ModalDiv>
            <div className="modalHeader">
              <p>{titulo}</p>
              <button onClick={ closeModal }>
                <AiFillCloseCircle className="iconClose" />
              </button>
            </div>
            {children}
          </ModalDiv>
        </motion.div>
      </ModalBodyStyled>
    );
  };
  return <></>;
};
