import { connect } from 'react-redux'
import Navbar from '../components/navigation/Navbar'

const getState = (state) => {
    console.log('id:' + state.navigate.id);
    return 'id:' + state.navigate.id;
}

const mapStateToProps = (state) => ({
    activeButton: getState(state)
});

const Navigation = connect(
    mapStateToProps
)(Navbar)

export default Navigation