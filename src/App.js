import React from 'react'

export default class App extends React.Component {
  state = {
    toDos: [],
    toDo: '',
  }
    handleSubmit = event => {
      event.preventDefault()
      let {toDos, toDo} = this.state;
      toDos.push({text: toDo, line: 'none', opacity: 1});
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

    handleLine = index => {
      let arr = this.state.toDos
      if (arr[index].line === 'none'){
        arr[index].line = 'line-through'
        arr[index].opacity = .3
        }else{
        arr[index].line = 'none'
        arr[index].opacity = 1
        }
      this.setState({toDos:arr})
    }

  render(){
  
    return (
      <div className='mylist'>
        <h1 className='title'>Lucy's Todooos!</h1>

          <div className='input'>
            <form onSubmit = {this.handleSubmit}>
              <input
                size='50'
                placeholder=' '
                value={this.state.toDo}
                onChange={this.handleChange}/>
            </form>

            <ol className='listItems'>
              {this.state.toDos.map((toDo, i)=>
                <li
                style={{textDecoration: toDo.line, opacity: toDo.opacity}}
                key={i}>
                <span onClick={()=>this.handleLine(i)}>{toDo.text}<span className='tab1'></span></span>
                <span onClick={()=>this.handleDelete(i)}>
                <i className="fas fa-trash-alt"></i>
                </span></li>
              )}
            </ol>
          </div>

      </div>
    )
  }
}