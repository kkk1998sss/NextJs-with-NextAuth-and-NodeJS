"use client"
import React, { Children, ReactNode } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";

const ModalLayout = ({children}:{children: ReactNode}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState<"auto">("auto");
    const handleRadioChange = (value: string) => {
        setModalPlacement(value as "auto");
      };
    return (
    <>
      <div className="flex flex-col gap-2">
      {/* <Button onPress={onOpen} className="max-w-fit">Open Modal</Button> */}
      {/* <RadioGroup
        label="Select modal placement"
        orientation="horizontal"
        value={modalPlacement}
        onValueChange={handleRadioChange}
        >
        <Radio value="auto">auto</Radio>
        
      </RadioGroup> */}
      <Modal 
        isOpen={isOpen} 
        placement={modalPlacement}
        onOpenChange={onOpenChange} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                {children}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
    </>
  )
}

export default ModalLayout





    