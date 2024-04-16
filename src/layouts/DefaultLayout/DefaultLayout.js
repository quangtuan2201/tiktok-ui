import PropTypes from 'prop-types';
import className from 'classnames/bind';
import Header from '~/layouts/componenets/Header';
import SideBar from '~/layouts/componenets/SideBar';
import styles from './DefaultLayout.module.scss';
const cx = className.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('warrper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
