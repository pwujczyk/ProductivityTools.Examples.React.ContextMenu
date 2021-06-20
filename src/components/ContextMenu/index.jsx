import React, { useEffect } from 'react'

import './index.css'

const ContextMenu = ({ parentRef }) => {


    useEffect(() => {
        const parent = parentRef.current;
        if (!parent) {
            return;
        }


        const showMenu = (event) => {
            event.preventDefault();
            console.log('show');
        }

        parent.addEventListener('contextmenu', showMenu);

        return function cleanup() {
            parent.removeEventListener('contextmenu', showMenu);
        }
    })
    return (
        <div className='context-menu'>
        </div>
    )
}

export default ContextMenu;