// import { useEffect, useState } from 'react';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
    faCircleQuestion,
    faEarthAmericas,
    faEllipsisVertical,
    faKeyboard,
    faMessage,
    faCoins,
    faGear,
    faUser,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/Components/Button';
import Menu from '~/Components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/Components/Icons';
import Images from '~/Components/Images';
import Search from '~/layouts/componenets/Search';
import routes from '~/config/routes';

const cx = className.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmericas} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];

    // Handle logic
    const handleMenuChange = (menuItem) => {
        // switch (menuItem.type) {
        //     case 'language':
        //         break;
        // }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Logo TikTok" />
                </Link>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" delay={[0, 200]}>
                                {/* //placement : vị trí Tippy */}
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Comment" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faMessage} />
                                     */}
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu hideOnClick={false} items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Images
                                className={cx('user-avatar')}
                                src={require('~/assets/images/avatar.jpeg')}
                                alt="Nguyễn văn A"
                                fallback={require('~/assets/images/avatar.jpeg')} // Dự phòng một ảnh nếu đường dẫn bị lỗi
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
