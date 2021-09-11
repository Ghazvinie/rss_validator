function ElementDescriptions(props) {

    return (
        <>
            {props.passStatus === 'none' ? props.description :
                props.passStatus ?
                    <>
                        <div className='found-status'>Element Found -</div>
                        <div>{props.description}</div>
                    </>
                    :
                    <>
                        <div className='found-status'>Element Not Found -</div>
                        <div>{props.description}</div>
                    </>
            }
        </>
    )
}

export default ElementDescriptions;

