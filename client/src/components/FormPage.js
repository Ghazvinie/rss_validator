import React, { useState } from 'react';
import '../FormPage.css';
import requirements from '../requirements';


function FormPage() {
    const [data, setData] = useState(null);
    const [textInput, setTextInput] = useState('Please input a valid url');
    const [tests, setTests] = useState(requirements);

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
                    {tests.map(singleTest => {
                        console.log(singleTest)
                        return (
                            <tr>
                                <td className='dotTd'><span className="dot"></span></td>
                                <td>
                                    <p>{singleTest.title}</p>
                                    <span >
                                        {singleTest.description}
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default FormPage;


