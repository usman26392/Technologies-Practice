
import { useSelector} from 'react-redux'

const Coin = () => {
  const coinCount =  useSelector((state)=> (state.counter.value));
  const color =  useSelector((state)=> (state.themeColor.value));


  return (
    <div>
        <span style={{color: color}}>Coins: {coinCount}</span>
    </div>
  )
}

export default Coin