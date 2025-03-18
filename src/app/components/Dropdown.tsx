import { useState } from 'react';
import { DropdownProps } from '../models/types';

const Dropdown = ({ text, photo, items, onSelect }: DropdownProps) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleSelect = (value: string, photo: string) => {
        onSelect(value, photo);
        setShowMenu(false);
    };

    return (
        <div className='header__select select'>
            <div className='select-top' onClick={toggleMenu}>
                <img src={photo} alt='icon' />
                <span className='select-top__text'>{text}</span>
            </div>
            {showMenu && (
                <ul className='select-menu'>
                    {items.map(item => (
                        <li
                            key={item.value}
                            className='select-menu__item'
                            onClick={() => handleSelect(item.value, item.photo)}
                        >
                            <img src={item.photo} alt='icon' />
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
