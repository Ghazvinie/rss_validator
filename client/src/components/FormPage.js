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
                        <td>
                            <p>{`<author>`}</p>
                            This is the author of the article
                        </td>
                    </tr>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>
                            <p>{`<guid>`}</p>
                            This is the Globally Unique Identifier.
                            The JS Player can use this to match audio articles in your SpeechKit audio content
                            management system with articles in your content management system.
                        </td>
                    </tr>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>
                            <p>{`<title>`}</p>
                            This is the article title.
                        </td>
                    </tr>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>
                            <p>{`<description>`}</p>
                            This is the article description.
                        </td>
                    </tr>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>
                            <p>{`<link>`}</p>
                            This is the article URL. The JS Player and Player iFrame embed can use this to match audio articles in your
                            SpeechKit audio content management system with articles in your content management system.</td>
                    </tr>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>
                            <p>{`<pubDate>`}</p>
                            This is the pubDate. If a pubDate is updated e.g, when an update is made to an article. 
                            SpeechKit will regenerate the audio.
                        </td>
                    </tr>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>
                            <p>{`<enclosure>`}</p>
                            This is multimedia content e.g. images.
                        </td>
                    </tr>
                    <tr>
                        <td className='dotTd'><span className="dot"></span></td>
                        <td>
                            <p>{`<content>`}</p>
                            This is the article content (excluding the title).
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default FormPage;