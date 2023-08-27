import React, { useState } from 'react';
import Image from 'next/image';
function HoverImage({ defaultImg, hoverImg, altText, height, width }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: 'relative' }}
        >
            {isHovered ? 
                 <Image src={hoverImg} alt={altText} height={height} width={width} /> :
                 <Image src={defaultImg} alt={altText} height={height} width={width} />
            }
        </div>
    );
}

export default HoverImage;
