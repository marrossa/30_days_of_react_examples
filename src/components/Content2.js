import React from 'react';
import ActivityItem from './GithubActivityItem';

const data = require('../githubData.json')

class Content2 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            activities: data,
            filtered: data
        }
    }

    componentDidMount(){
        this.updateData;
    }
    
    componentWillReceiveProps(nextProps){
        //Check to see if the requestRefresh has changed
        if(nextProps.requestRefresh !== this.props.requestRefresh){
            this.setState({loading: true}, this.updateData);
        }
    }

    updateData(){
        this.setState({
            loading: false,
            activities: data
                .sort(() => 0.5 - Math.random()).slice(0, 4),
        }, this.props.onComponentRefresh);
    }

    render(){
        const { loading, activities } = this.state;
        return (
            <div className="content">
                <div className="line"></div>
                { /* Show loading message if loading */ }
                { loading && <div>Loading</div> }
                { /* Timeline item */ }
                { activities.map((activity) => (
                    <ActivityItem 
                        key={ activity.id }
                        activity={ activity } />
                ))}

            </div>
        )
    }
}

export default Content2;