import React, {useState} from 'react'
import './Update.css'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {useDisclosure, Button, Heading } from '@chakra-ui/react'
import axios from 'axios';
function Update({ data, setData }) {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [open, setOpen] = useState(false);
  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/update", {
        newData: data,
      })
      .then((response) => window.alert("Data is updated "))
      .catch((err) => console.log(err));
    setOpen(false);
  };
  return (
    <>
     
      <Button onClick={onOpen} >UPDATE</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>UPDATEING DATA HEAR</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
           
            <form onSubmit={handleSubmit}>
        <label>
        ENTER DATA
          <br/>
          <input   type="text"
              placeholder="Enter here"
              onChange={handleChange}
              value={data} className='Updateinput' />
        </label>
       
      

          <ModalFooter>
            
          <Button colorScheme='blue' onClick={onClose}>
              CLOSE
            </Button>
        <Button type="submit" colorScheme='blue' className='Updatebutton' onClick={onClose}>UPDATE</Button>
          </ModalFooter>
          </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default Update

