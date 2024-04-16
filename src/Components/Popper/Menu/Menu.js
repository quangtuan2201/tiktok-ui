import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFc = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFc }) {
    const [history, setHistory] = useState([
        {
            data: items,
        },
    ]);
    const current = history[history.length - 1]; //ptu cuoi mang
    //
    const renderItems = () => {
        // <MenuItem key={index} data={item} />
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    // Bach về page trước đó
    const handleBack = () => {
        console.log('back');
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}> {renderItems()}</div>
            </PopperWrapper>
        </div>
    );
    // Reset về page đầu tiên
    const handleResetToPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <>
            <Tippy
                // visible
                delay={[0, 700]}
                interactive={true}
                offset={[12, 8]}
                placement="bottom-end"
                hideOnClick={hideOnClick}
                render={renderResult}
                onHidden={handleResetToPage}
            >
                {children}
            </Tippy>
        </>
    );
}
Menu.prototype = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
