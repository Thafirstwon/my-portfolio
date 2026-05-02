import React from 'react'

const SuccessOverlay = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
      <div className='bg-white text-black p-6 rounded-xl text-center'>

            <h2 className='text-xl font-semibold'>
                  Thank you! Your message has been sent
            </h2>

            <button
                onClick={onClose}
                 className='mt-4 bg-black text-white px-4 py-2'
                 >
                  Close
                 </button>
      </div>
      
    </div>
  )
}

export default SuccessOverlay
