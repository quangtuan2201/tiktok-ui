import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';
const cx = classNames.bind(styles);
function AccountItem({ userInfo }) {
    // console.log('UserInfo: ', userInfo);
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={require('~/assets/images/avatar.jpeg')} alt="Huế"></img>
            <div className={cx('info')}>
                <h4 className={'name'}>
                    <span>Nguyễn Văn A </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}
export default memo(AccountItem);
