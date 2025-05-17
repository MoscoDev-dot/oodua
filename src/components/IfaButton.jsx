import React from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const IfaButton = () => {
  return (
    <div className='my-4 mx-2'>
      <Container className='pt-5 mt-5'>
        <div className="d-flex justify-content-center my-3">
            <Button  className='button-1 border rounded-5 text-black' >Orisa Studies</Button>
            <Button  className='ms-3 button-2 border text-black rounded-5'>Ritual Knowledge & Sacred Practices</Button>
            
        </div>
        <div className="d-flex justify-content-center my-3">
            <Button  className='button-3 border text-black rounded-5'>Common Themes in Odu</Button>
            <Button  className='ms-3button-4 border text-black rounded-5'>Odu ifa and Verses Interpretation</Button>
            
        </div>
        <div className="d-flex justify-content-center my-3">
            <Button  className='button-5 border text-black rounded-5'>Digital ifa:Preserving Culture in the land of A</Button>
            <Button  className='ms-3 button-6 border text-black rounded-5'>The Lineages of Ifá: Ẹgbá, Ìjẹ̀bú, Òyó, Ìfẹ̀</Button>
            
        </div>

      </Container>
    </div>
  )
}

export default IfaButton
