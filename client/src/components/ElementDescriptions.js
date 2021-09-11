function ElementDescriptions(props) {
    return (
        <>
            {props.passStatus === 'none' ? props.startDescription :
                props.passStatus ?
                    <>
                        <div className='found-status'>Okay! - </div>
                        <div className='test-description'>{props.startDescription}</div>
                    </>
                    :
                    <>
                        <div className='found-status'>Not Found - </div>
                        <div className='test-description'>{props.failDescription}</div>
                    </>
            }
        </>
    );
}

export default ElementDescriptions;

