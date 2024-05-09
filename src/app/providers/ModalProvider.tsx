"use client"

import { useEffect, useState } from 'react'
import ModalLayout from '../components/ModalLayout';

const ModalProvider = () => {
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true);
    },[]);

    if(!isMounted) {
        return null;
    }

  return (
   <>
  
    </>
  )
}

export default ModalProvider