import React from 'react'
import Flag from './Flag'
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import ReviewForm from './ReviewForm';

const Form = () => {
      const [formPreview, setFormPreview] = React.useState(null);
      const [showReview, setShowReview] = React.useState(false);
      const [showSuccess, setShowSuccess] = React.useState(false);
      const [loading, setLoading] = React.useState(false);
      const [status, setStatus] = React.useState("idle")

      React.useEffect(() => {
            if (showSuccess) {
                  const timer = setTimeout(() => {
                   setShowSuccess(false);
                  }, 3000);

                  return () => clearTimeout(timer);
            }
      }, [showSuccess])


        const signUp = (event) => {
            event.preventDefault();

            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);

            setFormPreview(data);
            setShowReview(true)
            setStatus("idle");

      
        };

        const formRef = React.useRef();


        const sendEmail = () => {
            setStatus("sending")
            setLoading(true)

        emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formPreview,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
               .then(() => {
                  setStatus("success")
                  setLoading(false);
                  setShowReview(false);
                  setShowSuccess(true);

                  formRef.current.reset();

                  toast.success("Message sent successfully 🚀")
               })
               .catch((err) => {
                  setStatus("idle");
                  console.error(err);

                  toast.error("Something went wrong. Try again.")
               })
        }

  return (
      <section>
             <Toaster position="top-right" />
            
            <form 
                  ref={formRef}
                   onSubmit={signUp} 
                   className='max-w-xl w-full mx-auto px-5 sm:px-6 flex flex-col gap-6'
                   >
                  <label htmlFor='firstName'>First Name<span className="text-pink-300 ml-1">*</span></label>
                  <input id='firstName' 
                         name='firstName' 
                         type='text' required 
                  className="w-full border-b border-gray-500 bg-transparent py-3 text-sm sm:text-base focus:outline-none focus:border-pink-300 transition"
                  />

                  <label htmlFor='lastName'>Last Name<span className="text-pink-300 ml-1">*</span></label>
                  <input id='lastName' 
                         name='lastName' 
                         type='text' 
                         required
                 className="w-full border-b border-gray-500 bg-transparent py-3 text-sm sm:text-base focus:outline-none focus:border-pink-300 transition" 
                  />

                  <br />

                  <label htmlFor='email'>Email<span className="text-pink-300 ml-1">*</span></label>
                  <input 
                  id='email' 
                  type='email' 
                  name='email'
                  required 
                  placeholder='getintouch@gmail.com'
                  className="w-full border-b border-gray-500 bg-transparent py-3 text-sm sm:text-base focus:outline-none focus:border-pink-300 transition"
                  />

                  <br />

                  <label htmlFor='message'>
                        Tell me about your project...<span className="text-pink-300 ml-1">*</span> 
                  </label>
                  <textarea  
                   name='message' 
                   required
                   rows="4"
                   className="w-full border-b border-gray-500 bg-transparent py-3 text-sm sm:text-base focus:outline-none focus:border-pink-300 transition"
                   >
                  </textarea>

                  <br />


                  <label htmlFor="country">Select your country<span className="text-pink-300 ml-1">*</span></label>
                  <Flag />
            

                  <button
                        type='submit'
                        className="mt-4 w-full sm:w-auto border border-black dark:border-white px-6 py-3 text-sm sm:text-base hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                  >
                        Submit
                  </button>
            </form>

            {showReview && (
                  <ReviewForm
                  data={formPreview}
                  onClose={() => setShowReview(false)}
                  onConfirm={sendEmail}
                  status={status}
                  setStatus={setStatus}
                  />
            )}

            {showSuccess && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex    items-center justify-center z-50">
             <div className="bg-white text-black px-6 py-4 rounded-xl text-center">
             <h2 className="text-lg font-semibold">
              Message sent successfully
            </h2>
          </div>
        </div>
      )}
      </section>
  
  )
}

export default Form
