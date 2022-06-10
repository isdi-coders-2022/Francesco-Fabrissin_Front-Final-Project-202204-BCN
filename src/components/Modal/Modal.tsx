import { useCallback, useEffect } from "react";
import { closeModalActionCreator } from "../../redux/features/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ModalStyled from "./ModalStyled";

const Modal = () => {
  const { modal: modalText } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const closeModal = useCallback(() => {
    dispatch(closeModalActionCreator());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [closeModal]);

  return (
    <ModalStyled>
      <div data-testid="modal" onClick={closeModal} className="modale">
        <span>{modalText}</span>
        <img
          src="/images/green_success_icon.png"
          alt="succeded icon"
          className="icon"
        />
      </div>
    </ModalStyled>
  );
};

export default Modal;
