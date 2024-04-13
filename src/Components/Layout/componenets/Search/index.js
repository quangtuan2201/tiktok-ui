import { useEffect, useState, memo, useRef } from 'react';
import className from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/Components/AccountItem';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/Components/Icons';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import Styles from './Search.module.scss';
const cx = className.bind(Styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef(null);
    useEffect(() => {
        const id = setTimeout(() => {
            setSearchResult(['Tuấn', 'Tuấn Anh', 'Nguyễn Tuấn Anh']);
        }, 3000);
        return () => {
            clearTimeout(id);
        };
    }, []);
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        if (inputRef) inputRef.current.focus();
    };
    return (
        <HeadlessTippy
            visible={showResult && searchResult?.length > 0}
            interactive={true}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult} // bấm ra ngoài phạm vi nó se gọi hàm đối số
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    ref={inputRef}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <ClearIcon width="2rem" height="2rem" />
                    </button>
                )}
                {console.log('search value: ', !!searchValue)}
                {/* <button className={cx('loading')}>
                    <LoadingIcon width="2rem" height="2rem" />
                </button> */}
                <button className={cx('search-btn')}>
                    {/* search */}
                    <SearchIcon width="2rem" height="2rem" />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default memo(Search);
