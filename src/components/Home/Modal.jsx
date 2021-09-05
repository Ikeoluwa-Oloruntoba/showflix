import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdArrowBack, MdClose } from 'react-icons/md';
import Batman from './batman.jfif'
import { Link } from 'react-router-dom';

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  padding-bottom:2000px;
  display: flex;
  background: #000;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`

@media only screen and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 1) {

  width: 280px;
  position:relative;
  height: 800px;

 
  margin-bottom:5000px;
  padding-left:50px;
  padding-bottom:50px;
  
  box-shadow: 0 5px 1500px #D9DBE9;
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: -1;
  border-radius: 20px;

  }

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {

    width: 280px;
  position:relative;
  height: 800px;
  bottom:500px;
  margin-bottom:1400px;
  padding-left:50px;
  padding-bottom:50px;
  margin-left: 680px;
  box-shadow: 0 5px 1500px #D9DBE9;
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: -1;
  border-radius: 20px;
}
`;

const ModalImg = styled.img`
  width: 200px;
  height: 300px;
  padding-right:0px;
  border-radius: 20px;
  background: #000;
`;

const ModalContent = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
  font-family: 'Poppins', sans-serif;
  align-items: top;
  font-size:0.8rem;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    font-family: 'Poppins', sans-serif;
    border-radius:20px;
    background: #5F2EEA;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdArrowBack)`
  cursor: arrow;
  position: absolute;
  margin-top: 70px;
  left: 20px;
  width: 32px;
  height: 32px;
  padding-top: 40px;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal, modalData }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translatex(0%)` : `translatex(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                  <ModalImg src={modalData?.Poster}></ModalImg>
                <h3>{modalData?.Title}</h3>
                <p>Get exclusive access to our next launch.</p>
               <Link to={'/movie/' + modalData.imdbID} ><button>Watch</button></Link> 
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};