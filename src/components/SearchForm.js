import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        searchVisible: PropTypes.bool
    }

    static defaultProps= {
        onSubmit: () => {},
        searchVisible: false
    }

    constructor(props){
        super(props);

        this.state = {
            searchText: ''
        }
    }

    submitForm(e){
        // present the form from reloading the entire page
        e.preventDefault();

        // call the callback with the search value
        const { searchText } = this.state;
        this.props.onSubmit(searchText);
    }

    updateSearchInput(e){
        const val = e.target.value;
        this.setState({
            searchText: val
        })
    }

    render(){
        const { searchVisible } = this.props;
        let searchClasses = ['searchInput'];
        //Update the class array if the state is visible
        if(searchVisible){
            searchClasses.push("active");
        }

        return(
            <form onSubmit={this.submitForm.bind(this)}>
                <input
                    type="search"
                    value = {this.state.searchText}
                    className={searchClasses.join(' ')}
                    onChange={this.updateSearchInput.bind(this)}
                    placeholder="Search..." />
            </form>
        );

    }
}

export default SearchForm;