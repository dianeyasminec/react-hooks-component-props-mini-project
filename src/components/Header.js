import React from 'react';
class Header extends React.Component {
    render() { 
        const {name} = this.props 
    return <div>
    <header><h1>{name}</h1></header>
        </div>;
        
    }
}
 
export default Header;