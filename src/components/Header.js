import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <div className="menuIcon">
                    <div className="dashTop"></div>
                    <div className="dashBottom"></div>
                    <div className="circle"></div>
                </div>

                <span className="title">
                    { this.props.title }
                </span>

                <input
                    type="text"
                    className="searchInput"
                    placeholder="Search..." />

                <div className="fa fa-search searchIcon"></div>
            </div>
        )
    }
}

Header.propTypes =  {
    title: PropTypes.string
}

Header.defaultProps = {
    title: 'Github activity'
}

export default Header;