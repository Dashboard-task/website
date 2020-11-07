import { Badge, Table } from 'react-bootstrap';
import React from 'react';
import { State, TaskData } from '../../util/types/data-types';
import { X, Trash } from 'react-bootstrap-icons';
import moment from 'moment';

interface ListTaskProps {
  tasks: TaskData[];
  onDeleteTask: (task: TaskData) => void;
  onSelectTask: (task: TaskData) => void;
}

/**
 * Composant des tâches. 
 * Toutes les tâches d'un thèmes y seront stoquées.
 */
export const TaskComponent: React.FC<ListTaskProps> = (props) => {

  return (
    <Table bordered responsive size="sm" variant='primary'>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>État</th>
          <th>Priorité</th>
          <th>Débuté le</th>
          <th>Expire le </th>
          <th><X color='red' /></th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map((task, index) => (
          <tr key={index} onClick={() => props.onSelectTask(task)}>
            <td>{index + 1}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td><Badge variant={State.WAITING ? 'light' : 'primary' }>{task.state}</Badge></td>
            <td><Badge variant="primary">{task.priority}</Badge></td>
            <td>{moment(task.createdAt).format("MMM Do YY")}</td>
            <td>{moment(task.deadline).format("MMM Do YY")}</td>
            <td><Trash color='red' onClick={() => props.onDeleteTask(task)} /></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
