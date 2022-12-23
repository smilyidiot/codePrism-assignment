import {Component} from 'react'
import {v4} from 'uuid'

import {AiOutlineDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import {GrCompliance} from 'react-icons/gr'

import './App.css'

class App extends Component {
  state = {
    input: '',
    todoList: [],
  }

  inputTask = event => {
    this.setState({input: event.target.value})
  }

  addToList = event => {
    event.preventDefault()

    const {input} = this.state
    const todoItem = {
      id: v4(),
      todoName: input,
      completed: false,
    }

    this.setState(prevState => ({
      todoList: [...prevState.todoList, todoItem],
      input: '',
    }))
  }

  deleteTodo = cardId => {
    const {todoList} = this.state

    const newTodoList = todoList.filter(each => each.id !== cardId)
    this.setState({todoList: newTodoList})
  }

  completedTodo = cardId => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(eachTask => {
        // console.log('card', eachTask)
        if (eachTask.id === cardId) {
          return {...eachTask, completed: true}
        }
        return eachTask
      }),
    }))
  }

  render() {
    const {input, todoList} = this.state
    // console.log(todoList)

    const completedTask = todoList.filter(each => each.completed === true)
    console.log('completed', completedTask)

    const newTodoList = todoList.filter(each => each.completed !== true)

    return (
      <div className="main-container">
        <h1 className="main-head">
          <span>Todo</span>
          List
        </h1>
        <form className="create-container" onSubmit={this.addToList}>
          <h1 className="head">
            <span>Create</span> a task
          </h1>
          <div className="add-bar">
            <input
              type="text"
              onChange={this.inputTask}
              placeholder="Create a todo"
              value={input}
              className="input"
            />
            <button type="submit" className="add-button">
              Add Todo
            </button>
          </div>
        </form>
        <div className="list-container">
          <h1 className="head">
            <span>Todo</span> List
          </h1>
          {todoList.length === 0 ? (
            <div className="empty">
              <h1 className="empty-head">No Task yet</h1>
            </div>
          ) : (
            <div className="bottom-container">
              <ul className="todo-card-list">
                {newTodoList.map(each => (
                  <li
                    className={each.completed === true ? 'grey' : 'normal'}
                    key={each.id}
                  >
                    <div className="todo-card">
                      <h1 className="todo">{each.todoName}</h1>
                      <div className="button-container">
                        <button
                          type="button"
                          className="task-button green"
                          onClick={() => this.completedTodo(each.id)}
                        >
                          <MdDone fontSize="30px" />
                        </button>
                        <button
                          type="button"
                          className="task-button red"
                          onClick={() => this.deleteTodo(each.id)}
                        >
                          <AiOutlineDelete fontSize="30px" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <h1 className="head">Completed Task</h1>
              {completedTask.length === 0 ? (
                <div className="empty">
                  <h1 className="empty-head">No completed task</h1>
                </div>
              ) : (
                <ul className="todo-card-list">
                  {completedTask.map(each => (
                    <li className="done-card" key={each.id}>
                      <div className="todo-card">
                        <h1 className="todo">{each.todoName}</h1>
                        <GrCompliance fontSize="30px" paddingRight="10px" />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default App
