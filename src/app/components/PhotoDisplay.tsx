interface PhotoDisplayProps {
    photo: string;
}

const PhotoDisplay = ({ photo }: PhotoDisplayProps) => {
    return (
        <div className='header__language'>
            <img src={photo} alt='icon' />
        </div>
    );
};

export default PhotoDisplay;
