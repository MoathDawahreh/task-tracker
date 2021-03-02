import propTypes from 'prop-types';
import Button from './Button'

const Header = (props) => {

   
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button onClick={props.OnAdd} />
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
