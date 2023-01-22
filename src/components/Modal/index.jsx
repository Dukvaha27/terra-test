import React, {memo, useEffect, useRef, useState} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useOutClickWrite from "../../hooks/use-out-click";

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999999999999;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  animation: 0.2s load linear;
  opacity: ${({ show }) => (!show ? 0 : 1)};
  transition: 0.2s;
  @keyframes load {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ModalStyled = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  position: absolute;
  z-index: 9999999999999999999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Modal = ({ children, open, onClose }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (open) {
      setShow(true);
    }
    if (!open && show) {
      setTimeout(() => {
        setShow(false);
      }, 200);
    }
  }, [open]);
  const ref = useRef();

  useOutClickWrite(ref, onClose);

  return (
    show &&
    createPortal(
      <Container show={open}>
        <ModalStyled ref={ref}>{children}</ModalStyled>
      </Container>,
      document.body
    )
  );
};

export default memo(Modal);
