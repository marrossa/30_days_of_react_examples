import React from 'react';

import Header from './Header';
import Content from './Content2';
import ActivityItem from './GithubActivityItem';

const data = require('../githubData.json');

class Panel extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            loading: false,
            searchFilter: '',
            activities: [],
        }
    }

    // Bound to the refresh button
    componentDidMount(){
        this.updateData();
    }

    componentWillReceiveProps(nextProps){
        // Check to see if the requestRefresh props has changed
        if(nextProps.requestRefresh !== this.props.requestRefresh){
            this.setState({loading: true}, this.updateData);
        }
    }

    handleSearch(val) {
        this.setState({
            searchFilter: val,
            loading: true
        });
    }

    // Call out to github and refresh directory
    updateData(){
        const {activities, searchFilter} = this.state;

        const filter = searchFilter !== '' && 
            (e => e.actor.login.match(new RegExp(searchFilter)));

        const fetchDataOrCache = () => Promise.resolve(activities)

        // Use cached data if we have it
        return fetchDataOrCache()
            .then(json => json || data)
            .then(json => filter ? json.filter(filter) : json)
            .then(json => {
                if (activities.length === 0) {
                    this.setState({activities: json})
                }
                return json;
            })
            .then(json => json.slice(0, 4))
    }


    // After the component has refreshed, we want to 
    // refresh the loading variable
    onComponentRefresh(){
        this.setState({
            loading: false
        });
    }

    render(){
        const { loading, activities } = this.state;

        return(
            <div>
                <Header 
                    onSubmit = { this.handleSearch.bind(this) }
                    title = 'Github activity' />    
                <Content 
                    requestRefresh = { loading }
                    onComponentRefresh = { this.onComponentRefresh.bind(this)}
                    fetchdata = { this.updateData.bind(this) } />
            </div>
        )
    }
}

export default Panel;