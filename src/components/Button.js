import propTypes from 'prop-types';

const Button = () => {


    const OnClick= () =>{
        // console.log("clicked")

    }
    return (
        <button

        className = 'btn'
        style ={{backgroundColor:'purple'}}
        onClick ={OnClick}> Add </button>

    )
}

Button.propTypes = {
    onClick : propTypes.func

}
export default Button
