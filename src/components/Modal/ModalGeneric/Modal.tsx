import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import Button from "../../Button/Button";
import { ModalBody } from "./BodyModal";
import { ModalStyled } from "./ModalStyled";

interface iOpenModal {
  children: React.ReactNode;
  title: string;
  button?: string | React.ReactNode;
}

export function Modal({ children, title, button }: iOpenModal) {
  const [click, setClick] = useState(false);
  const {setOpenModal} =useContext(AuthContext)

  function openModal(){
    setClick(true)
    setOpenModal(true)
  }

  if (typeof button === "object") {
    return (
      <ModalStyled>
        <button className="withoutBorder" onClick={ openModal }>
          {button}
        </button>
        <ModalBody titulo={title} click={click} setClick={setClick}>
          {children}
        </ModalBody>
      </ModalStyled>
    );
  } else {
    return (
      <ModalStyled>
        <Button styled={"empty"} onClick={openModal }>
          {button || title}
        </Button>
        <ModalBody titulo={title} click={click} setClick={setClick}>
          {children}
        </ModalBody>
      </ModalStyled>
    );
  };
};
