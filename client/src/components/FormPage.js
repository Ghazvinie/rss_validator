import React, { useState } from 'react';
import validator from 'validator';
import '../FormPage.css';
import { requirementsObj } from '../requirements';

import ElementDescriptions from './ElementDescriptions';


function FormPage() {
    const [textInput, setTextInput] = useState('');
    const [tests, setTests] = useState(requirementsObj);
    const [urlError, setUrlError] = useState(null)

    const handleChange = (e) => {
        const value = e.target.value;
        setTextInput(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUrlError(null);

        const result = validator.isURL(textInput.trim());
        if (!result) {
            setUrlError('Invalid URL');
            return;
        };

        const res = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: textInput.trim()
            })
        });
        const data = await res.json();

        for (const item in data) {
            setTests(prevTests => ({
                ...prevTests,
                [item]: {
                    ...prevTests[item],
                    passStatus: data[item]
                }
            }));
        };
    };




    return (
        <div className='form-table-container'>

            <div className='form-container'>
                <form onSubmit={(e) => handleSubmit(e)}>

                    <input
                        type='text'
                        value={textInput}
                        onChange={(e) => handleChange(e)}
                        placeholder='Please input a valid url'
                    />
                    <button>Submit</button>
                </form>
                <span className='url-error'>{urlError}</span>
            </div>
            <table className="demo">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(tests).map(singleTest => {
                        return (
                            <tr key={tests[singleTest].title}>
                                <td className='dotTd'>
                                    <span className="dot"
                                        style={{
                                            backgroundColor: tests[singleTest].passStatus === 'none' ? 'rgba(59, 59, 59, 0.255)' :
                                                tests[singleTest].passStatus ? 'rgba(63, 213, 63, 0.555)' : 'rgba(255, 0, 64, 0.555)'
                                        }}>
                                    </span>
                                </td>
                                <td>
                                    <p className='title' >{tests[singleTest].title}</p>
                                    <ElementDescriptions passStatus={tests[singleTest].passStatus}
                                        startDescription={tests[singleTest].startDescription}
                                        passDescription={tests[singleTest].passDescription}
                                        failDescription={tests[singleTest].failDescription} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div >
    );
}

export default FormPage;


