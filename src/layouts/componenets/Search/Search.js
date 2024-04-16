import { useEffect, useState, memo, useRef } from 'react';
import className from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/Components/AccountItem';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/Components/Icons';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import { useDebounce } from '~/hooks';
import Styles from './Search.module.scss';
import { searchServices } from '~/services';

const cx = className.bind(Styles);

console.log('searchServices in : ', searchServices);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);
    const debounced = useDebounce(searchValue, 500);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        (async () => {
            try {
                setLoading(true);
                const result = await searchServices.search(debounced);
                setSearchResult(result);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        })();
    }, [debounced]);
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        if (inputRef) inputRef.current.focus();
    };
    return (
        // warring Tippy
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.length > 0 &&
                                searchResult.map((item) => {
                                    return <AccountItem key={item.id} data={item} />;
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
                        onChange={handleChange}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {/* Clear */}
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <ClearIcon width="2rem" height="2rem" />
                        </button>
                    )}
                    {/* Loading */}
                    {loading && (
                        <button className={cx('loading')}>
                            <LoadingIcon width="2rem" height="2rem" />
                        </button>
                    )}
                    {/* search */}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon width="2rem" height="2rem" />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default memo(Search);
