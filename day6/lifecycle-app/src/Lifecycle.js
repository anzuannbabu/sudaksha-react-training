import { React, Component } from 'react'
class Lifecycle extends Component {
   // eslint-disable-next-line
   constructor(props) {
      super(props);
      //state 
      this.state = {
         data: 0
      }
      this.setNewNumber = this.setNewNumber.bind(this)
      this.decrementNumber = this.decrementNumber.bind(this)
   };

   componentWillMount() {
      console.log('Component WILL MOUNT! parent')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!parent ')
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   setNewNumber() {
      this.setState({ data: this.state.data + 1 })
   }
   decrementNumber() {
      this.setState({ data: this.state.data > 0 ? this.state.data - 1 : 0 })
   }
   render() {
      return (
         <div>
            <button onClick={this.setNewNumber}>INCREMENT</button> <br /><br />
            <button onClick={this.decrementNumber}>DECREMENT</button> <br /> <br />
            From current class - Lifecycle component: {this.state.data}

            From Childclass Content : <Content myNumber={this.state.data}></Content>
         </div>
      );
   }
}
class Content extends Component {
   componentWillMount() {
      console.log('Component WILL MOUNT! child')
   }
   componentDidMount() {
      console.log('Component DID MOUNT! child')
   }
   componentWillReceiveProps(newProps) {
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   render() {
      return (
         <div>
            <h1>{this.props.myNumber}</h1>
         </div>
      );
   }
}

export default Lifecycle