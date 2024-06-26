import React from 'react';
import styles from '../../styles/common/modal.module.css';
import RadiusButton from '../designTool/RadiusButton';
import useClickOutside from '../hook/useClickOutside';
import { useState, useEffect } from 'react';
import CustomDropdown from '../designTool/CustomDropdown';


const InputModal = ({ data, closeModal, onConfirm }) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

    const handleConfirmClick  = () => {
      if (inputValue) {
        onConfirm(inputValue);
      } else {
        console.error('inputValue are missing');
      }
  
  };
  return (
    <div>
      <div className={styles.modalTitle}>{data.title}</div>
      <div className={styles.modalContent}><input value={inputValue} onChange={handleInputChange} type='text' required/></div>
      <div className={styles.buttonBox}>
        <RadiusButton className={styles.modalButton} color="#77AAAD" padding="0.5rem 1rem" fontSize="14px" text="취소" onClick={closeModal}/>
        <RadiusButton className={styles.modalButton} color="#77AAAD" padding="0.5rem 1rem" fontSize="14px" text="확인" onClick={handleConfirmClick}/>
      </div>
    </div>
  );
};


const DefaultModal = ({ data, closeModal, onConfirm }) => {
  //처리할 기본키값 보내는 용도
    const handleConfirmClick  = () => {
      if (data && data.columns) {
        onConfirm(data.columns);
        console.log(data.columns);
      } else {
        console.error('Data or columns are missing');
      }
  
  };
  return (
    <div>
      <div className={styles.modalTitle}>{data.title}</div>
      <div className={styles.modalContent}>{data.content}</div>
      <div className={styles.buttonBox}>
        <RadiusButton className={styles.modalButton} color="#77AAAD" padding="0.5rem 1rem" fontSize="14px" text="취소" onClick={closeModal}/>
        <RadiusButton className={styles.modalButton} color="#77AAAD" padding="0.5rem 1rem" fontSize="14px" text="확인" onClick={handleConfirmClick}/>
      </div>
    </div>
  );
};

// 커스텀 모달 컴포넌트
const CustomModal = ({ data, closeModal, onConfirm}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  //처리할 옵션 보내는 용도
  const handleSelect = (item) => {
    setSelectedItem(item);
  };
  const handleConfirmClick  = () => {
    if (selectedItem) {
      onConfirm(selectedItem);
    }
};

  return (
    <div className={styles.modalBody}>
      <div className={styles.modalTitle}>{data.title}</div>
      <div className={styles.modalContent}>
      {data.content} : &nbsp;
        <CustomDropdown
          dropdownWidth="200px"
          columns={data.columns}
          onSelect={handleSelect}
        />
      </div>
      <div className={styles.buttonBox}>
        <RadiusButton text="취소" color="#77AAAD" padding="0.5rem 1rem" fontSize="14px" onClick={closeModal} />
        <RadiusButton text="확인" color="#77AAAD" padding="0.5rem 1rem" fontSize="14px" onClick={handleConfirmClick} />
      </div>
    </div>
  );
};

// 모달 컨테이너 컴포넌트
const Modal = ({ isOpened, type, closeModal, data }) => {
  if (!isOpened) return null;

  const wrapperRef = useClickOutside(closeModal);
  return (
    <div className={styles.modalContainer} ref={wrapperRef}>
      <div className={styles.modalBody} >
      { type === 'custom' ? (
        <CustomModal onConfirm={data.onConfirm} closeModal={closeModal} data={data} />
      ) : (
      type === 'default' ?
      (
        <DefaultModal onConfirm={data.onConfirm} data={data} closeModal={closeModal} />
      ) :
       <InputModal onConfirm={data.onConfirm} data={data} closeModal={closeModal} />
    )}
      </div>
    </div>
  );
};

export default Modal;
