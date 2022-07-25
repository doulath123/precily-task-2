import React, {useState} from 'react'
import './Add.css'
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
function Add({ data, setData }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [open, setOpen] = useState(false);
  const [addData, setAddData] = useState("");
  const handleChange = (event) => {
    setAddData(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/add", {
        data: addData,
      })
      .then((response) => window.alert("Data is added"))
      .catch((err) => console.log(err));
    setData(addData);
    setAddData("");
    setOpen(false);
  };

  return (
    <>
     <Heading className='data'>{data}</Heading >
      <Button colorScheme='orange' onClick={onOpen}>ADD</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ADDING DATA HEAR</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
           
            <form onSubmit={handleSubmit}>
        <label>
          ENTER DATA
          <br/>
          <input  type="text"
              placeholder="Enter here"
              onChange={handleChange}
              value={addData}  className="Addinput" />
        </label>
       

          <ModalFooter>
            
          <Button colorScheme='blue' onClick={onClose}>
              CLOSE
            </Button>
            <Button type="submit" colorScheme='blue' className='Addbutton' onClick={onClose}>add</Button>
          </ModalFooter>
           
      </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default Add