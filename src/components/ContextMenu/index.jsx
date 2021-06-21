import React, { useEffect, useState } from 'react'

import './index.css'

const ContextMenu = ({ parentRef, items, containerId }) => {

    const [isVisible, setIsVisible] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        const parent = parentRef.current;
        if (!parent) {
            return;
        }

        console.log(parentRef);

        const showMenu = (event) => {
            event.preventDefault();
            setIsVisible(true);
            setX(event.clientX);
            setY(event.clientY);
            console.log('show');
        }

        const closeMenu = () => {
            setIsVisible(false);
        }

        parent.addEventListener('contextmenu', showMenu);
        window.addEventListener('click', closeMenu);

        return function cleanup() {
            parent.removeEventListener('contextmenu', showMenu);
            parent.removeEventListener('click', closeMenu);
        }
    })

    const style = {
        top: y,
        left: x
    };


    return isVisible ? (
        <div className='context-menu' style={style}>
            {items.map((item, index) => {
                return (
                    <div key={index}
                        onClick={() => item.onclick(containerId)}
                        className='context-menuItem'>
                        {item.text}
                    </div>
                )
            })}
        </div>
    ) : null
}

export default ContextMenu;