import React from 'react';
import styles from '../page.module.scss';

interface CustomInputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ type, name, value, onChange, placeholder }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={styles.home__tabsInput}
            placeholder={placeholder}
        />
    );
};

export default CustomInput;
