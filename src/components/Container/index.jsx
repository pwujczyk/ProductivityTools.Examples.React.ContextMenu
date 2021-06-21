import React, { useRef } from 'react'
import './index.css'

import ContextMenu from '../ContextMenu'

const Container = ({ children, menuItems, containerId }) => {

    const containerRef = useRef(null);

    return (
        <div className='container' ref={containerRef} containerId="xxxxx">
            {children}
            <ContextMenu parentRef={containerRef} items={menuItems} containerId={containerId}></ContextMenu>
        </div>
    )
}

export default Container