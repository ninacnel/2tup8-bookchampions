import TopBar from './TopBar'
import Footer from './Footer'
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mb-5">
            <TopBar />
            {children}
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout