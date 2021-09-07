import React, { useState } from 'react';
import '../FormPage.css';


function FormPage() {
    const [data, setData] = useState(null);
    const [textInput, setTextInput] = useState('Please input a valid url');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api', {
            method: 'POST',
        });
        const data = await res.json();
        setData(data);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setTextInput(value);
    };


    return (
        <div className='form-container'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type='text' 
                    value={textInput}
                    onChange={(e) => handleChange(e)}/>
                <button>Submit</button>
          </form>

        </div>
    );
}

export default FormPage;