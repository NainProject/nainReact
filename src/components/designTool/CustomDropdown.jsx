import React, { useState} from 'react';
import styles from './customDropdown.module.css';
import useClickOutside from '../hook/useClickOutside';

const CustomDropdown = ({ columns=[], onSelect, Header}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const wrapperRef = useClickOutside(toggleDropdown);
    const defaultHeader = Header || (columns.length > 0 ? columns[0].Header : '');

    const handleItemClick = (item) => {
        setSelectedItem(item);
        onSelect(item);
        setIsOpen(false);
    };

    return (
            <div className={styles.dropdownContainer} ref={wrapperRef}>
                <div className={styles.dropdownHeader} onClick={toggleDropdown}>
                    {selectedItem ? selectedItem.Header : defaultHeader}
                </div>
                {isOpen && (
                <ul className={`${styles.dropdownList} ${isOpen ? styles.open : ''}`}>
                    {columns
                    .map((item) => (
                        <li
                            key={item.id}
                            className={styles.dropdownItem}
                            onClick={() => handleItemClick(item)}>
                            {item.Header}
                        </li>
                    ))}
                </ul>
                )}
            </div>
    );
};

export default CustomDropdown;