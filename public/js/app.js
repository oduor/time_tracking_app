/*Parent component, TimersDashboard*/
class TimersDashboard extends React.Component {
  render() {
    return (
      <div className='ui three column centered grid'>
  <div className='column'>
    <EditableTimerList />
    <ToggleableTimerForm 
      isOpen={true}
    />
  </div>
      </div>
    );
  }
}

/*Child component EditableTimersList*/
class EditableTimerList extends React.Component {
  render() {
    return (
      <div id='timers'>
        <EditableTimer
    title='Learn React'
    project='Web Domination'
    elapsed='8986300'
    runningSince={null}
    editFormOpen={true}
  />
      </div>  
    );
  }
}

