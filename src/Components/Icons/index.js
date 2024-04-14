export const UploadIcon = ({
    className,
    width = '3.2rem',
    height = '3.2rem',
    viewBox = '0 0 640 512',
    fill = 'currentColor',
    xmlns = 'http://www.w3.org/2000/svg',
    fillRule,
    clipRule,
}) => (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill={fill} xmlns={xmlns}>
        <path
            fillRule={fillRule}
            clipRule={clipRule}
            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
        />
    </svg>
);
// In Search/index.js
export const ClearIcon = ({
    className,
    width = '3.2rem',
    height = '3.2rem',
    viewBox = '0 0 512 512',
    fill = 'currentColor',
    xmlns = 'http://www.w3.org/2000/svg',
    fillRule,
    clipRule,
}) => (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill={fill} xmlns={xmlns}>
        <path
            fillRule={fillRule}
            clipRule={clipRule}
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
        />
    </svg>
);

export const LoadingIcon = ({
    className,
    width = '3.2rem',
    height = '3.2rem',
    viewBox = '0 0 512 512',
    fill = 'currentColor',
    xmlns = 'http://www.w3.org/2000/svg',
    fillRule,
    clipRule,
}) => (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill={fill} xmlns={xmlns}>
        <path
            fillRule={fillRule}
            clipRule={clipRule}
            d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
        />
    </svg>
);

export const SearchIcon = ({
    className,
    width = '3.2rem',
    height = '3.2rem',
    viewBox = '0 0 640 512',
    fill = 'currentColor',
    xmlns = 'http://www.w3.org/2000/svg',
    fillRule,
    clipRule,
}) => (
    <svg className={className} width={width} height={height} viewBox={viewBox} fill={fill} xmlns={xmlns}>
        <path
            fillRule={fillRule}
            clipRule={clipRule}
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        />
    </svg>
);
// icon check in AcountItem/index
export const CheckIcon = ({
    className,
    // width = '3.2rem',
    // height = '3.2rem',
    viewBox = '0 0 512 512',
    fill = 'currentColor',
    xmlns = 'http://www.w3.org/2000/svg',
    fillRule,
    clipRule,
}) => (
    <svg className={className} viewBox={viewBox} fill={fill} xmlns={xmlns}>
        <path
            fillRule={fillRule}
            clipRule={clipRule}
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
        />
    </svg>
);
