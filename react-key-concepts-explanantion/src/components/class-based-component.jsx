// so here  we using class based component
/*here the component is created from class */

import { Component } from "react";

class ClassBasedComponent extends Component{
    // this will render jsx and be seen on browers

    // STATE
    // here we definde the state
    state ={
        showText :false,
        changeColor:false,
        count:0,
        changeaCountstyle : false,
    };

    handleClick = () =>{
// console.log("button clicked");
const{showText,changeColor} = this.state

this.setState({
    showText : !showText,
    changeColor : !changeColor
})
}

handleCount = ()=>{
    this.setState({
        ...this.state,
        count:this.state.count +1
    })
}


// componentDidMount
// componentDidUpdate
// componentWillUnmount

componentDidMount(){
    // it will be called intial render
    // this function will be run and rendered when first time a page is loaded
    console.log("this is called on first time page load");
    
    /*this will load the page and its things first then all the 
    functionality will be function after it
    like here it will firslty load the showtext and ist changed color then
    the toggle button functionality will start implimenting */
this.setState({
    showText : !this.setState.showText,
    changeColor : !this.setState.changeColor
})
}

componentDidUpdate(preProps ,preState){
    // this will not for initial rendering
    /* this function wil check whenerver the component is upadted or
     any prop or state value is updated
    */
//    here  this will show the previous state of the prop and state
/*here it will show false false because the pre prop and state is false false */
//    console.log(preProps,preState);

console.log(preState,this.state)
   if(preState && preState.count !== this.state.count && this.state.count == 10){
    this.setState({
        ...this.state,
        changeaCountstyle:!this.state.changeaCountstyle,
    })
   }
}


componentWillUnmount(){
    // it is called immediatly when the component got destroyed
    console.log('this component is destroyed');
    
}

render(){
        const{showText,changeColor,count,changeaCountstyle} = this.state
        // here we access the state using this.
        // console.log(showText)
        console.log(changeaCountstyle)
        return (<div>
            

            {
                // both approaches are correct
                showText ?
                 <h3 style={{color: changeColor? "red":"black"}} >
                This is my class based component</h3> :null

                // showText ? <h3 className="text-red-600">This is my class based component</h3> :null
            }
            
            <button onClick={this.handleClick}>toggle text</button>
            <button onClick={this.handleCount}>   Count</button>
            <h3 style={{color:changeaCountstyle? "blue":"red"}}>count is {count}</h3>
        </div>)
    }
}
//so here we have to export this file int app.jsx so that the content 
// will be shown on browser
export default ClassBasedComponent;