import className from 'classnames/bind';
import Header from '../componenets/Header';
import SideBar from './SideBar';
import styles from './DefaultLayout.module.scss';
const cx = className.bind(styles);

export default function DefaultLayout({ children }) {
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
