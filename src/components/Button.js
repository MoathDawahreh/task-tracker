import propTypes from 'prop-types';

const Button = ( props ) => {


     
    return (

        <button
        onClick={props.onClick}
        style={{ backgroundColor: props.color}}
        className='btn'
      >
        {props.text}
      </button>
  
       

      

    )
}

Button.propTypes = {
    onClick : propTypes.func

}
export default Button
