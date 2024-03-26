import { useState } from "react"
import {Modal,Button} from "react-bootstrap"

import "../FirstComponent/index"


import "./index.css"

const RequestCall = () => {
    const [show,setShow]=useState(false)

    const onRequest=()=>{
        setShow(prev=>!prev)
        
        
    }
    console.log(show)
  return (
    <div className="call-container">

        <h1 className="call-heading">Aspiring to be an ACCA? Get in touch with us!</h1>
    <input className="input-text" placeholder="Phone Number" type="text"/>
    <input placeholder="Email Id" type="email"/>
    <select name="cars">
        <option value="currentqualification">Current Qualification</option>
        <option value="ca">CA</option>
        <option value="bcom">Bcom</option>
        <option value="cs">CS</option>
        <option value="cma">CMA</option>
        <option value="other">Other</option>
    </select>
    <button type="button" onClick={onRequest} className="bg-primary">Request Call Back</button>
 <Modal show={show} className="modal">
  <Modal.Header closeButton onClick={onRequest} >
    <Modal.Title>Success</Modal.Title >
   


  </Modal.Header>


  <Modal.Body>
      <img src="https://res.cloudinary.com/dwhmqaqhj/image/upload/v1672217379/save-removebg-preview_qnnvmx.png"
          alt="saved"
        className="img"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={onRequest}>
            Close
          </Button>
                   
      </Modal.Footer>


 </Modal>
    
    </div>
  )
}

export default RequestCall