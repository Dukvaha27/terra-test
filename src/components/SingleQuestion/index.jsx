import React, {memo} from 'react';
import Modal from "../Modal";
import styled from "styled-components";

const ContainetModal = styled.div`
  div {
    border-bottom: 1px solid;
    padding: 5px 0 ;
  }
  &>:last-child {
    border-bottom: none;
  }
`;

const Row = styled.div`
  display: flex;;
  justify-content: space-between;
  align-items: center;

  div {
    border: none;
  }

  & > :first-child {
    margin-right: .5rem;
    font-weight: 600;
    color: #3b3a37;
  }

`
const SingleQuestion = ({open, setOpen}) => {
    return (
        <Modal open={open} onClose={setOpen}>
            <ContainetModal>
                <Row>
                    <div>Автор:</div>
                    <div>chel kakoy</div>
                </Row>
                <Row>
                    <div>Tema:</div>
                    <div>lorem upsum dolor sit amet</div>
                </Row>
                <Row>
                    <div>Commetns:</div>
                    <div>coments</div>
                    <div></div>
                </Row>
            </ContainetModal>
        </Modal>
    );
};

export default memo(SingleQuestion);
