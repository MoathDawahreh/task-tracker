import propTypes from 'prop-types';
import Button from './Button'

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <Button/>
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