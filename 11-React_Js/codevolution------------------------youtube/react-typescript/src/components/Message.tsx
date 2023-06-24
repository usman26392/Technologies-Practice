
// example:1
// const Message = (props: any) => {
//   return (
//     <div> welcome {props.name } ! you have 10 unread messages.  </div>
//   )
// }



// example:2
// type MessageProps = {
//     name: string,
//     messageCount: number
// }

// const Message = (props: MessageProps ) => {
//     return (
//       <div> welcome {props.name } ! you have {props.messageCount} unread messages.  </div>
//     )
//   }

// example: 3
// type MessageProps = {
//     name: string,
//     messageCount: number,
//     isLoggin: boolean
// }

// const Message = (props: MessageProps ) => {
//     return (
//         <>
//             {
//                 props.isLoggin 
//                 ? <div> welcome {props.name } ! you have {props.messageCount} unread messages.  </div>
//                 : <h2>welcome guest</h2> 
//             }
//         </>
//     )
// }

// export default Message


// example:4  destructuring of props
type MessageProps = {
    name: string,
    messageCount: number,
    isLoggin: boolean
}

const Message = ({name, messageCount, isLoggin} : MessageProps ) => {
    return (
        <>
            {
                isLoggin 
                ? <div> welcome {name } ! you have {messageCount} unread messages.  </div>
                : <h2>welcome guest</h2> 
            }
        </>
    )
}

export default Message
