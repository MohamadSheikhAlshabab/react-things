import React from 'react';

function Header(props){
    return(
        <h2 className="count"> Movies: {props.count.length}</h2>
    )
}

export default Header;