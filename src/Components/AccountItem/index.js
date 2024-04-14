import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import { memo } from 'react';
import Images from '../Images';
import { CheckIcon } from '~/Components/Icons';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Images className={cx('avatar')} src={data?.avatar} alt={data?.bio} />
            <div className={cx('info')}>
                <h4 className={'name'}>
                    <span>{data?.bio}</span>
                    {data.tick && <CheckIcon className={cx('check')} />}
                </h4>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}
export default memo(AccountItem);
