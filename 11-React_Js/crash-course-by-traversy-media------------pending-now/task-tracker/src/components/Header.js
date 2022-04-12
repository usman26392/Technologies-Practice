
import PropTypes from 'prop-types';
import Button from './Button';

// Header component
const Header = (props) => {
    let myclickBtn = ()=> {
        console.log('yes you clicked');
    };
  return (
    <header className='header'>
        {/* <h1 style={{color:'red', backgroundColor: '#000'}}>Task Tracker {props.title} </h1> */}
        {/* <h1 style = {headingStyle} >Task Tracker {props.title} </h1> */}
        <h1>{props.title}</h1>
        {/* below code is caller of Button component  */}
        {/* bgColor and text are props */}
        <Button bgColor='green' text='Add' />
        <Button bgColor='red' text='delete' clickBtn={myclickBtn} />
    </header>
  )
}


// default props
// Header.defaultProps = {
//     title : "This value is comming from default props"
// }

// validate props' types
Header.propTypes = {
    title: PropTypes.string.isRequired
}


// CSS in js
// const headingStyle = {
//     color: '#fff',
//     backgroundColor: '#000'
// };



export default Header;