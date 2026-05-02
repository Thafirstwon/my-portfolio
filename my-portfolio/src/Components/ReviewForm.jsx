import React from 'react'

const ReviewForm = ({ data, onClose, onConfirm, status, setStatus }) => {
    if (!data) return null;

  return (
    <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
      <div className='bg-white text-black p-6 rounded-xl w-[90%] max-w-md'>

        <h2 className='text-xl font-semibold mb-4'>
          Review Your Message
        </h2>

         <p><strong>Name:</strong> {data.firstName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Country:</strong> {data.country}</p>
        <p><strong>Message:</strong> {data.message}</p>

         <div className='flex justify-between mt-6'>
          <button onClick={onClose}>
            Back
          </button>

          <button
              onClick={() => {
              setStatus("waiting");
              setTimeout(() => onConfirm(), 500);
               }}
              disabled={status === "sending"}
             className="relative overflow-hidden px-4 py-2 bg-black text-white"
>
            {/* Progress bar */}
             {status === "sending" && (
             <span className="absolute left-0 top-0 h-full bg-white/20 animate-[progress_2s_linear] w-full"></span>
              )}

             {/* Text */}
            <span className="relative z-10">
             {status === "waiting" && "Please wait..."}
              {status === "sending" && "Sending..."}
              {status === "idle" && "Done"}
            </span>
            </button>
         </div>

      </div>
      
    </div>
  )
}

export default ReviewForm
