
import { useState } from "react"

const Form2 = () => {
    const [field, setField] = useState({
        userName: "usman",
        userComment: "i am front end developer"
    });

    // console.log(field.userName)

    function fieldHandler(evtObj) {
        // console.log(evtObj)
        // console.log(evtObj.target.name)
        // console.log([evtObj.target.name])
        // console.log(
        //     { 
        //         [evtObj.target.name]: evtObj.target.value
        //     }
        // )

        setField(
            {
                ...field,[evtObj.target.name]: evtObj.target.value
            }
        )
    }
    

  return (
    <form>
        <h1>Form</h1>
        <div>
            <label htmlFor="">Username:</label>
            <input type="text" value={field.userName} name="userName"  onChange={ fieldHandler }  />
        </div>
        <div>
            <label htmlFor="">UserComment:</label>
            <input type="text" value={field.userComment} name="userComment"  onChange={ fieldHandler }  />
        </div>
    </form>
  )
}

export default Form2