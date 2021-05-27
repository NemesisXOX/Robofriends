import { render } from '@testing-library/react';
import react from 'react';
import CardList from './CardList';
import { robots } from './robots';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll';

class App extends react.Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users =>{
            this.setState({robots: users});
        })
        
    }
    
    onsearchchange = (event) =>{
        this.setState({searchfield: event.target.value});   
    }
    render(){
        const filterrobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1 className='f1'>ROBOFRIENDS</h1>
                <Searchbox searchchange={this.onsearchchange}/>
                <Scroll>
                    <CardList robots={ filterrobots }/>
                </Scroll> 
            </div>
        );
    }
    
}

export default App;