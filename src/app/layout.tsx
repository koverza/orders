'use client';
import { useState } from 'react';
import './scss/variables.scss';
import './scss/reset.scss';
import './scss/mixins.scss';
import './layout.scss';
import Dropdown from './components/Dropdown';
import PhotoDisplay from './components/PhotoDisplay';
import { DropdownItem } from './models/types';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [textUSD, setTextUSD] = useState('USD');
    const [textEn, setTextEn] = useState('EN');
    const [photoUSD, setPhotoUSD] = useState('/dollar.svg');
    const [photoEn, setPhotoEn] = useState('/england.svg');

    const handleSelectUSD = (currency: string, photo: string) => {
        setTextUSD(currency);
        setPhotoUSD(photo);
    };

    const handleSelectEN = (language: string, photo: string) => {
        setTextEn(language);
        setPhotoEn(photo);
    };

    const currencyItems: DropdownItem[] = [
        { label: 'USD', value: 'USD', photo: '/dollar.svg' },
        { label: 'UAH', value: 'UAH', photo: '/dollar.svg' },
        { label: 'EUR', value: 'EUR', photo: '/dollar.svg' }
    ];

    const languageItems: DropdownItem[] = [
        { label: 'EN', value: 'EN', photo: '/england.svg' },
        { label: 'UA', value: 'UA', photo: '/ukraine.svg' }
    ];

    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>Orders</title>
            </head>
            <body>
                <div className='wrapper max-width' id='__next'>
                    <header className='header' id='header'>
                        <div className='container'>
                            <div className='header__inner'>
                                <a href='#' className='header__logo'></a>
                                <div className='header__nav'>
                                    <Dropdown
                                        text={textUSD}
                                        photo={photoUSD}
                                        items={currencyItems}
                                        onSelect={handleSelectUSD}
                                    />
                                    <Dropdown
                                        text={textEn}
                                        photo={photoEn}
                                        items={languageItems}
                                        onSelect={handleSelectEN}
                                    />
                                    <PhotoDisplay photo={photoEn} />
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className='main'>
                        <div className='container'>{children}</div>
                    </main>
                </div>
            </body>
        </html>
    );
}
