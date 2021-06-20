import React, { useRef } from 'react'
import './index.css'

import ContextMenu from '../ContextMenu'

const Container = ({ children, menuItems }) => {

    const containerRef = useRef(null);

    return (
        <div className='container' ref={containerRef}>
            {children}
            <ContextMenu parentRef={containerRef} items={menuItems}></ContextMenu>
        </div>
    )
}

export default Container