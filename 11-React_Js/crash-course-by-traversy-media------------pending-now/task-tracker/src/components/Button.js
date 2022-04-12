// rafce snippet

import PropTypes from 'prop-types';

const Button = ({bgColor, text, clickBtn}) => {
  return (
    <button 
        style={{backgroundColor: bgColor}}
        onClick = {clickBtn}
        className='btn'> {text}
        </button>
  )
};


Button.defaultProps = {
    bgColor: 'dodgerblue'
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    clickBtn: PropTypes.func
};

export default Button;