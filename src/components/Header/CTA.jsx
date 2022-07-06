import React from 'react'
import pdf from '../../assets/pdf.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={pdf} download className='btn'>Download cv</a>
      <a href='#contact' className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA
