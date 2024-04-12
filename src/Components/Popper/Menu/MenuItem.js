import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/Components/Button';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    console.log('data,', data);
    const classe = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button leftIcon={data.icon} to={data.to} className={classe} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
