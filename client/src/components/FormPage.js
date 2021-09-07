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
        <div className='form-table-container'>

            <div className='form-container'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type='text'
                        value={textInput}
                        onChange={(e) => handleChange(e)} />
                    <button>Submit</button>
                </form>
            </div>

                <table class="demo">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='dotTd'><span class="dot"></span></td>
                            <td>First we check if something’s at the URL, and that it takes a reasonable amount of time to retrieve.</td>
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