import propTypes from 'prop-types';

const Button = ( props ) => {


     
    return (

        <button
        onClick={props.onClick}
        style={{ backgroundColor: 'purple' }}
        className='btn'
      >
        Add
      </button>
  
       

      

    )
}

Button.propTypes = {
    onClick : propTypes.func

}
export default Button
