import React from 'react';
import urlFetch from '../helpers/urlFetch';

class ToDoList extends React.Component {
  constructor() {
    super();

    this.state = {
      newTask: '',
      tasks: [],
    };

    this.onChangeNewTask = this.onChangeNewTask.bind(this);
    this.onClickNewTask = this.onClickNewTask.bind(this);
    this.onClickDeleteTask = this.onClickDeleteTask.bind(this);
    this.onChangeTaskStatus = this.onChangeTaskStatus.bind(this);
  }

  async componentDidMount() {

    const fetchTasks = async () => {
      try {
        const response = await fetch(urlFetch);
        const data = await response.json();
        return data;
      } catch (erro) {
        return new Error('You must provide an url');
      }
    };
    
    const tasks = await fetchTasks();
  
    this.setState({
      tasks,
    })
  }

  async componentDidUpdate() {
    const fetchTasks = async () => {
      try {
        const response = await fetch(urlFetch);
        const data = await response.json();
        return data;
      } catch (erro) {
        return new Error('You must provide an url');
      }
    };
    
    const tasks = await fetchTasks();
  
    this.setState({
      tasks,
    })
  }

  onChangeNewTask(event) {
    this.setState({
      newTask: event.target.value,
    });
  }

  // fonte: https://www.freecodecamp.org/portuguese/news/tutorial-de-fetch-api-em-javascript-exemplos-de-post-e-cabecalho/
  onClickNewTask() {
    const { newTask } = this.state;

    let task = {
      task: newTask,
    }
    
    fetch(urlFetch, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json());
  }

  onClickDeleteTask(id) {   
    fetch(`${urlFetch}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
  }

  onChangeTaskStatus(event) {
    let status = {
      status: event.target.value,
    }

    fetch(`${urlFetch}${event.target.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(status),
    })
      .then(response => response.json())
  } 

  render() {
    const { newTask, tasks } = this.state;
    return (
      <>
        <div>
          <label htmlFor='task'>
            <input
              id='task'
              data-testid='email-input'
              type='task'
              value={ newTask }
              onChange={this.onChangeNewTask}
            />
          </label>
          <button
            type='button'
            onClick={ this.onClickNewTask }
          >
            Adicionar tarefa
          </button>
        </div>
        <div>
          <table>
            <tbody>
              {tasks.map((item) => {
                return (
                  <tr key={ item.id }>
                    <td>{ item.date.slice(0, 10) }</td>
                    <td>{ item.task }</td>
                    <td>
                      <select
                        data-testid='status-input'
                        id={ item.id }
                        value={ item.status }
                        onChange={ this.onChangeTaskStatus }
                      >
                        <option value='PENDENTE'>PENDENTE</option>
                        <option value='EM ANDAMENTO'>EM ANDAMENTO</option>
                        <option value='PRONTO'>PRONTO</option>
                      </select>
                    </td>
                    <td>
                      <button
                        type='button'
                        onClick={ () => this.onClickDeleteTask(item.id) }
                      >
                        Excluir tarefa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ToDoList;
