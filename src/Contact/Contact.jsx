import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const refForm = useRef();

    const handleSubmit = (event)=>{
        event.preventDefault();

        const serviceId = "service_apofbgs";
        const templateId = "template_hrc4nrd"

        const apiKey = "nqDWW25CLk72WuOaR"

        emailjs.sendForm(serviceId, templateId,refForm.current,apiKey)
        .then( result => console.log(result.text))
        .catch( error => console.error(error))
    }
  return (
    <div className='bg-slate-600 flex justify-center h-[100vh] items-center'>
        <form className='border-4 rounded-md border-slate-700 w-[20%] flex flex-col h-[60%] bg-slate-500 ' ref={refForm} onSubmit={handleSubmit} action="">
            <div className='bg-slate-300 p-2'>
                <h2 className='text-2xl text-sky-900'>Contact Us</h2>
                <p >Please fill this form</p>
            </div>
            <fieldset className='border-2 p-2 m-2 flex flex-col'>
                <label htmlFor="" className='w-[20%]'>Name</label>
                <input type="text" name="username" placeholder='nombre'required />
            </fieldset>
            <fieldset className='border-2 p-2 m-2 flex flex-col'>
                <label name="email" className='w-[20%]'>Email</label>
                <input type="email" name="email" id="email" placeholder='email' required />
            </fieldset>
            <fieldset className='border-2 p-2 m-2 flex flex-col'>
                <label>Message</label>
                <textarea maxLength="500" placeholder='type your message' name="message" id="" cols="30" rows="10" required></textarea>
            </fieldset>
            <button className='bg-slate-300 w-[30%] rounded-md m-auto'>Send</button>
        </form>

    </div>
  )
}
