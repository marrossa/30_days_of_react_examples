import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchVisible: false
        }
    }

    // toggle visibility when run on the state
    showSearch(){
        this.setState({
            searchVisible: !this.state.searchVisible
        })
    }
    
    render(){
        const wrapperStyle = {
            backgroundColor: 'rgba(251, 202, 43, 1)'
        }

        const titleStyle = {
            color: '#111111'
        }

        const menuColor = {
            backgroundColor: '#111111'
        }
        
        return (
            <div style={ wrapperStyle } className="header">
                <div className="menuIcon">
                    <div className="dashTop" style={ menuColor}></div>
                    <div className="dashBottom" style={ menuColor}></div>
                    <div className="circle" style={ menuColor}></div>
                </div>

                <span style={titleStyle} className="title">
                    { this.props.title }
                </span>

                <SearchForm 
                    searchVisible = {this.state.searchVisible}
                    onSubmit = { this.props.onSubmit } />

                {/* Adding an onClick handler to call the showSearch button */}
                <div
                    onClick={this.showSearch.bind(this)} 
                    className="fa fa-search searchIcon">
                </div>
            </div>
        )
    }
}

Header.propTypes =  {
    title: PropTypes.string,
    onSearch: PropTypes.func
}

Header.defaultProps = {
    title: 'Github activity'
}

export default Header;