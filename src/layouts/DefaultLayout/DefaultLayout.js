import PropTypes from 'prop-types';
import className from 'classnames/bind';
import Header from '~/layouts/componenets/Header';
import SideBar from '~/layouts/DefaultLayout/SideBar';
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
DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
