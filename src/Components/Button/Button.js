import Proptype from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { memo } from 'react';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    smail = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    leftIcon,
    rightIcon,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // Remove event listener when btn is disabled
    if (disabled) {
        // delete props.onClick; //Cách 1
        // Cách 2
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', { primary, outline, smail, large, text, disabled, rounded, [className]: className });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.prototype = {
    to: Proptype.string,
    href: Proptype.string,
    primary: Proptype.bool,
    outline: Proptype.bool,
    smail: Proptype.bool,
    large: Proptype.bool,
    text: Proptype.bool,
    disabled: Proptype.bool,
    rounded: Proptype.object,
    leftIcon: Proptype.node,
    rightIcon: Proptype.node,
    children: Proptype.node.isRequired,
    className: Proptype.string,
    onClick: Proptype.func,
    // ...passProp,
};

export default memo(Button);
