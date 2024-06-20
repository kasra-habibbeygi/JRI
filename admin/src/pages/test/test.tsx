import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';

const Test = () => {

    let tasks: Task[] = [
        {
          start: new Date(2020, 1, 1),
          end: new Date(2020, 1, 2),
          name: 'Idea',
          id: 'Task 0',
          type:'task',
          progress: 45,
          isDisabled: true,
          styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' }
        },
        {
          start: new Date(2020, 1, 3),
          end: new Date(2020, 1, 10),
          name: 'Kasra',
          id: 'Task 1',
          type:'task',
          progress: 80,
          styles: { progressColor: 'red', progressSelectedColor: 'blue' },
        },
];

    return <div><Gantt tasks={tasks} /></div>;
};
export default Test;