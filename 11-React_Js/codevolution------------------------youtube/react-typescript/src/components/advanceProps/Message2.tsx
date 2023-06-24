
type MessageProps = {
    name: string,
    messageCount?: number, // optional props
    isLoggin: boolean
}


// example: optional props
const Message2 = (props: MessageProps ) => {
    const {messageCount = 0 } = props;
    return (
        <>
            {
                props.isLoggin 
                ? <div> welcome {props.name } ! you have {messageCount} unread messages.  </div>
                : <h2>welcome guest</h2> 
            }
        </>
    )
}

export default Message2