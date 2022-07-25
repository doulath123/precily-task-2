
import React, {useState, useEffect} from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {useDisclosure, Button} from '@chakra-ui/react'
import axios from 'axios';
function Count({data}) {
 
  const { isOpen, onOpen, onClose } = useDisclosure()
  
const [apiCount, setApiCount] = useState(-1)
  useEffect(()=>{
    axios
      .get("/count")
      .then((response) => {setApiCount(response.data.count)})
      .catch((err) => console.log("doulath"));
console.log(data)
  }, [data])
  return (
    <>
      <Button onClick={onOpen} colorScheme='green' >COUNT</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>API COUNT</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
        {apiCount<0?(
          <p>No Api calls have been made</p>
        ): (<p><strong>API calls : {apiCount}</strong></p>)}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default Count