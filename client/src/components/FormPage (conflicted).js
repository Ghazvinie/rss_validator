import React, { useState } from 'react';
import '../FormPage.css';


function FormPage() {
    const [data, setData] = useState(null);
    const [textInput, setTextInput] = useState('Please input a valid url');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: textInput
            })
        });
        const data = await res.json();
        
        console.log(data)
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setTextInput(value);
    };


    return (
        <div className='form-table-container'>
            {data}

            <div className='form-container'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type='text'
                        value={textInput}
                        onChange={(e) => handleChange(e)} />
                    <button>Submit</button>
                </form>
            </div>

            <table className="demo">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>Some description of the what is being tested etc etc etc etc etc Some description of the what is being tested etc etc etc etc etc
                        </td>
                    </tr>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>Test 2</td>
                    </tr>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>Test 3</td>
                    </tr>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>Test 4</td>
                    </tr>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>Test 5</td>
                    </tr>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>Test 6</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default FormPage;