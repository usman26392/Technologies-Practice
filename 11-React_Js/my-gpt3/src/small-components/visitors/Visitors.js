

const Visitors = ({people1}) => {
  return (
    <div className="hero-peoples__item">
        <img src={people1} alt="image of people requested access" />
        <div className="hero-peoples__item__counts">
            <span>1.6k+</span>
        </div>
    </div>
  )
}

export default Visitors