import { useEffect, useState, memo, useRef } from 'react';
import className from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import axios from 'axios';
import AccountItem from '~/Components/AccountItem';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/Components/Icons';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import Styles from './Search.module.scss';
const cx = className.bind(Styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const apiURL = `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
            searchValue,
        )}&type=${'less'}`;
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        (async () => {
            try {
                const response = await axios.get(apiURL);
                setSearchResult(response.data.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error(error);
            }
        })();
    }, [searchValue]);
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
            visible={showResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.length > 0 &&
                            searchResult.map((item) => {
                                return <AccountItem index={item.id} data={item} />;
                            })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult} // bấm ra ngoài phạm vi nó se gọi hàm đối số
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <ClearIcon width="2rem" height="2rem" />
                    </button>
                )}
                {loading && (
                    <button className={cx('loading')}>
                        <LoadingIcon width="2rem" height="2rem" />
                    </button>
                )}
                {/* search */}
                <button className={cx('search-btn')}>
                    <SearchIcon width="2rem" height="2rem" />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default memo(Search);
