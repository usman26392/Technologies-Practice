
type statusProps = {
    // status: string
    // or more secure
    status: "loading" | "success" | "error"
}



// example: jsx depends on props
const Status = (props: statusProps ) => {
    let message;
    if(props.status == "loading") {
        message = "loading..."
    }
    else if(props.status == "success") {
        message = "Data fetch successfully!"
    }
    else if (props.status == "error" ) {
        message = "Error fetching data !"
    }

  return (
    <h2>
        {message}
    </h2>
  )
}

export default Status