import { connect } from 'react-redux'
import Navbar from '../components/navigation/Navbar'

const mapStateToProps = (state) => ({
    activeButton: state.navigate.id
});

const Navigation = connect(
    mapStateToProps
)(Navbar)

export default Navigation