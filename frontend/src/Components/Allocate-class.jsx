import React from 'react'
import { toast } from "react-toastify";

const Allocate = () => {

    const handleSubmit = (e) => {
        e.preventDeafault();
        toast.success('Submitted');
    }

    return (
        <>
            <div className='conatiner'>
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <label htmlFor="subject">Select the class-size</label>
                    <input type='text' placeholder='class-size' />
                    <label htmlFor="subject">Select the subject</label>
                    <input id='subject' type='text' placeholder='subject' />
                </form>
            </div>
        </>
    )
}

export default Allocate