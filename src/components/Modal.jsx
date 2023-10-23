import { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../app/crudSlice';

const AddModal = (prop) => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(
    (store) => store.crudReducer
  );

  const [formState, setFormState] = useState({});

  /*
        Determining the state of the form
 
   ? * If there is an element to be edited, transfer the information of that apple to the stateValue variable. If there is no element to be edited, then leave the state values empty.

  
   We repeated the query every time the show value changed, that is, every time the component appeared on the screen.
   */

  useEffect(() => {
    const stateValue = prop.editTask
      ? prop.editTask
      : {
          title: '',
          author: '',
          assigned_to: '',
          end_date: '',
        };

    setFormState(stateValue);
  }, [prop.show]);

  const handleSave = () => {
   // transfer the object to the store
     /*
     ? in classic redux:
     dipstach({
         type:"crudReducer/addTask",
         payload: formState
     })
     */
    dispatch(addTask(formState));
    //close modal
    prop.handleClose();
  };

  if (!setFormState) return 'Loading..';

  return (
    <Modal
      show={prop.show}
      onHide={() => prop.handleClose()}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {prop.editTask ? 'Edit Mode' : 'Add Mode'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={formState.title}
              //  Transferring the value of the input to the state object.
              onChange={(e) =>
                setFormState({
                  ...formState,
                  title: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Writer</Form.Label>
            <Form.Control
              type="text"
              value={formState.author}
              placeholder="Enter Title"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  author: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>To Whom Will It Be Appointed?</Form.Label>
            <Form.Control
              type="text"
              value={formState.assigned_to}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  assigned_to: e.target.value,
                })
              }
            />
            <Form.Text>
            Determine the person to whom the task will be Assigned.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Delivery date</Form.Label>
            <Form.Control
              type="date"
              value={formState.end_date}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  end_date: e.target.value,
                })
              }
            />
            <Form.Text>
            Set the deadline
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => prop.handleClose()}>
        Close
        </Button>
        <Button onClick={handleSave} variant="success">
        Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;