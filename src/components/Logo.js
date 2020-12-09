import React from 'react'

export default function Logo() {
    const listStyle = {
    color: 'yellow',
    marginLeft: '10px'
    }
    return (
        <div>
            <h2 style={{marginLeft: '20px'}}><span style={listStyle}>Logo</span> <span style={{color: 'red', fontSize: 'bold'}}>& </span><span style={{fontSize: '30px'}}>9ja</span></h2>
        </div>
    )
}
