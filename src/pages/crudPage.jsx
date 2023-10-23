import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Table,
} from 'react-bootstrap';
import AddModal from '../components/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../app/crudSlice';

const CrudPage = () => {
  const state = useSelector((store) => store.crudReducer);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

   /*
   We initially set the element to be edited as null.
    If null is sent to the modal, the modal will notice this and perform the insertion.
     If the edit button is clicked and a value is assigned to the state, then when the modal is sent, the modal detects it and performs the editing process.
   */
  const [editTask, setEditTask] = useState(null);

  const handleClose = () => {
    // delete element to edit
    setEditTask(null);
    // modal close
    setShowModal(false);
  };

  return (
    <div className="m-2">
      <AddModal
        show={showModal}
        handleClose={handleClose}
        editTask={editTask}
      />
      <Button
        variant="success"
        className="my-3"
        // modal open
        onClick={() => setShowModal(true)}
      >
   Add New Element
      </Button>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Duty</th>
            <th>Writer</th>
            <th>Appointed</th>
            <th>Date</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task) => (
            <tr>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup>
                  <Button
                    onClick={() =>
                      dispatch(removeTask(task.id))
                    }
                    variant="danger"
                  >
                   Delete
                  </Button>
                  <Button
                    onClick={() => {
                      // Transfers the element to be edited to state
                      setEditTask(task);
                      //   modal open
                      setShowModal(true);
                    }}
                  >
                    Edit
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;