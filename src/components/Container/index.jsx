import React, { useRef } from 'react'
import './index.css'

import ContextMenu from '../ContextMenu'

const Container = ({ children }) => {

    const containerRef = useRef(null);

    return (
        <div className='container' ref={containerRef}>
            {children}
            <ContextMenu parentRef={containerRef}></ContextMenu>
        </div>
    )
}

export default Container