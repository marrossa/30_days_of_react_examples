import React from 'react';
import Content2 from './Content2';

class Footer extends React.Component{
    render() {
        return (
            <div className='Footer'>
                { this.props.children }
            </div>
        )
    }
}

export default Footer;