import React from 'react'

export default class App extends React.Component {
  state = {
    toDos: [],
    toDo: '',
  }
    handleSubmit = event =>{
      event.preventDefault()
      let {toDos, toDo} = this.state;
      toDos.push(toDo);
      this.setState({toDos:toDos, toDo:''});
    }

    handleChange = event => {
      this.setState({toDo:event.target.value});
    }

    handleDelete = index => {
      let {toDos} = this.state;
      toDos.splice(index, 1);
      this.setState({toDos:toDos});
    }

    handleClick = index => {

      
    }


  

  render(){
   
    return (
      <div>
        <h1 className='title'>Maggie's Todos!!!</h1>

          <div className='input'>
            <ol>
              {this.state.toDos.map((toDo, i)=> <li  key={i}>{toDo}</li>)}
            </ol>
            
              <form onSubmit = {this.handleSubmit}>
              <input 
                value={this.state.toDo}
                onChange={this.handleChange}/>
              <button>Add Todo!</button>
              </form>
          </div>

          
          <div className='deleteTodo'>

          </div>




      </div>
    )
  }
}