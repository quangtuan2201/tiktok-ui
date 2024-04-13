import { forwardRef, useState, memo } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Images.module.scss';
// forwardRef là một HOC để bọc component cấp thấp, nó trả về tham số ref tham chiếu đến element của cha
const Images = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.warpper, className)}
            ref={ref}
            src={fallback || src}
            {...props}
            onError={handleError}
            alt={alt}
        />
    );
});
export default memo(Images);
