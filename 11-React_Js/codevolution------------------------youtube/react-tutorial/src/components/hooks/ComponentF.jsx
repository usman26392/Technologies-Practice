import { useContext } from "react"
import { UserChannelContext, UserContext } from "../../App"



const ComponentF = () => {
    const userName =  useContext(UserContext);
    const channelName = useContext(UserChannelContext);

  return (
    <div>My name on youtube is {userName} and my channel name is {channelName}  </div>
  )
}

export default ComponentF