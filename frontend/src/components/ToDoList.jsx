import React from 'react';

class ToDoList extends React.Component {
  constructor() {
    super();

    this.state = {
      newTask: '',
      tasks: [],
    };

    this.onChangeNewTask = this.onChangeNewTask.bind(this);
    // this.onClickNewTask = this.onClickNewTask.bind(this);
    // this.onClickDeleteTask = this.onClickDeleteTask.bind(this);
  }

  async componentDidMount() {

    const fetchTasks = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/');
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

  /* onClickNewTask() {
    const { newTask } = this.state;

    // CHAMAR POST PASSANDO NEWTASK
  } */

  /* onClickDeleteTask(id) {
    // CHAMAR DELETE PASSANDO ID
  } */

  render() {
    const { newTask, tasks } = this.state;
    console.log(tasks)
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
            // onClick={ this.onClickNewTask }
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
                        id='statusInput'
                        // value={item.status}
                        // onChange={ this.onChangeTaskStatus }
                      >
                        <option value='PENDENTE'>PENDENTE</option>
                        <option value='EM ANDAMENTO'>EM ANDAMENTO</option>
                        <option value='PRONTO'>PRONTO</option>
                      </select>
                    </td>
                    <td>
                      <button
                        type='button'
                        // onClick={ () => this.onClickDeleteTask(item.id) }
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
