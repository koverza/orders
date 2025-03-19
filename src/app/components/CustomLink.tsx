import React from 'react';
import Link from 'next/link';

interface CustomLinkProps {
    href: string;
    src: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, src }) => {
    return (
        <Link href={href}>
            <img src={src} alt='icon' />
        </Link>
    );
};

export default CustomLink;
