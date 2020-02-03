import React, {Component} from 'react';
import bivakzones from '../components/bivakzones.json';

class Icon extends Component{
    constructor(props){
        super(props)
        this.state ={
                  preference: false,
                  color: false
                  
        } 
        this.handleClick = this.handleClick.bind(this);
    }   

handleClick(e){
    
    var txt = "Dog: no preferences";
    if(this.state.preference === true) {
        txt = "Dogs: allowed";
         
    }else if(this.state.preference === false) {
        txt = "Dogs: not allowed"; 
        console.log(bivakzones)
         
    
    }else{
        this.state.preference = 0;   
    
        
    }

    this.setState({
        preference : this.state.preference + 1,
        color: !this.state.color,
        text: txt
      })
      
          
}

   render(){
    const isGreen = this.state.color;
    return (
        <div >
            
            
            

            <button  
             style={{backgroundColor: isGreen?  'green':'red'}}
             onClick={this.handleClick} 
             className={this.state.button ? "buttonTrue": "buttonFalse"} >
                <i class="fas fa-dog fa-2x"> </i>
            </button>
        

            <button 
            style={{
            margin: '18px',}}>
                <i class="fas fa-toilet fa-2x"> </i>
            </button>
            
            <button 
            style={{
            margin: '18px',}}>
                <i class="fas fa-fire fa-2x"> </i>
            </button>

            <button 
            style={{
            margin: '18px',}} >              <i class="fas fa-bicycle fa-2x"> </i>
            </button>

            



    <h1 style={{fontSize: '14px', backgroundColor: isGreen?  'green':'red'}}> {this.state.text}</h1>
    

        </div>
       )
   }
}

export default Icon;