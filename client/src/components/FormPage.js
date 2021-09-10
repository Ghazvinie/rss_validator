import React, { useState } from 'react';
import validator from 'validator';
import '../FormPage.css';
import { requirements, requirementsObj } from '../requirements';


function FormPage() {
    const [data, setData] = useState(null);
    const [textInput, setTextInput] = useState('');
    const [tests, setTests] = useState(requirementsObj);
    const [passStatuses, setPassStatuses] = useState();
    const [urlError, setUrlError] = useState(null)



    const handleSubmit = async (e) => {
        e.preventDefault();

        setUrlError(null);

        const result = validator.isURL(textInput.trim());
        if (!result) {
            setUrlError('Invalid URL');
            setTests((prevTests) => ({
                ...prevTests,
                url: {
                    ...prevTests.url,
                    passStatus: false,
                    description: 'Please check your URL and try again'
                }
            }));

        };


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
                        console.log(tests[singleTest].description)
                        return (
                            <tr >
                                <td className='dotTd'>
                                    <span className="dot"
                                        style={{
                                            backgroundColor: tests[singleTest].passStatus === 'none' ? 'rgba(59, 59, 59, 0.255)' :
                                                tests[singleTest].passStatus ? 'rgba(63, 213, 63, 0.555)' : 'rgba(255, 0, 64, 0.555)'
                                        }}>
                                    </span>
                                </td>
                                <td>
                                    <p>{tests[singleTest].title}</p>
                                    <span >
                                        {tests[singleTest].description}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                    {/* {tests.map(singleTest => {
                        return (
                            <tr key={singleTest.id}>
                                <td className='dotTd'>
                                    <span className="dot"
                                    style={{backgroundColor: singleTest.passStatus === 'none' ? 'rgba(59, 59, 59, 0.255)' :
                                           singleTest.passStatus ? 'rgba(63, 213, 63, 0.555)' : 'rgba(255, 0, 64, 0.555)'
                                        }}>
                                        </span>
                                </td>
                                <td>
                                    <p>{singleTest.title}</p>
                                    <span >
                                        {singleTest.description}
                                    </span>
                                </td>
                            </tr>
                        );
                    })} */}
                </tbody>
            </table>

        </div>
    );
}

export default FormPage;


