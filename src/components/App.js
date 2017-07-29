import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
    constructor(){
        super();
        
        this.state = {
            fruit: [],
            filters: [],
            currentFilter: null
        };
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.setState({
            filter: e.target.value
        })
    }
    
    render(){
        return(
            <FruitBasket />    
        )
    }
}

export default App;
