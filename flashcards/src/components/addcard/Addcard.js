import {useState} from "react";
import {useForm} from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'; 
import Axios from 'axios';


function Addcard() {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    resetField("newQuestion")
    resetField("newAnswer")
  };

  const handleShow = () => setShow(true);

  const [question,setQuestion]=useState('')
  const [answer,setAnswer]=useState('')

  let {
    register,
    handleSubmit,
    resetField,
    formState:{errors}
  }=useForm({
    mode: "onChange",
    defaultValues: {
      newQuestion: "",
      newAnswer:""
    }
  }); 

  let submitForm=()=>{
    //storing in local api : HTTP POST
    Axios.post('http://localhost:8000/api/insert', {
      question: question, 
      answer:answer
    });
    handleClose();
  };


  return (
    <>
      <Button className='btn create-button'  onClick={handleShow}>
+ Add card
      </Button>

      <Modal  className="modal" show={show} onHide={handleClose} backdrop="static" centered>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Question (Front)</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="E.g mv"
                autoFocus
                {...register("newQuestion", {required:true})}
                onChange={(e)=>{setQuestion(e.target.value)}}
              />
              {/* validation error message using conditional rendering*/}
              {errors.newQuestion?.type==="required"  && <p className='text-danger'>* Question is required</p>}

            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Answer (back)</Form.Label>
              <Form.Control as="textarea" placeholder="E.g move" rows={3}   {...register("newAnswer", {required:true})} onChange={(e)=>{setAnswer(e.target.value)}}/>
              {errors.newAnswer?.type==="required"  && <p className='text-danger'>* Answer is required</p>}
            </Form.Group>

            <Form.Group controlId="formFile"  className="mb-3">
            <Form.Label>Upload an Image :</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer className='modfoot'>
          <Button className='btn cancel-button' onClick={handleClose}>
            Cancel
          </Button>
          <Button type='submit' className='btn add-button' onClick={handleSubmit(submitForm)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addcard;