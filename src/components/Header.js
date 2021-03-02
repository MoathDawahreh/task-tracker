import propTypes from 'prop-types';
import Button from './Button'

const Header = (props) => {

   
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color ={ props.ShowAdding ? 'red': 'green' } onClick={props.OnAdd} text ={props.ShowAdding ? 'Close' : 'Add'} />
        </header>
       
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
  }


Header.propTypes ={
    title: propTypes.string.isRequired

}
export default Header
