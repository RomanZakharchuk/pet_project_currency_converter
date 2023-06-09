const ArrowSvg = ( { color } ) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M21.6823 4.26895C22.0861 4.64578 22.1079 5.27857 21.7311 5.68232L14.7311 13.1823C14.3627 13.5769 13.7477 13.608 13.3415 13.2526L10.0456 10.3686L3.70711 16.7071C3.31658 17.0976 2.68342 17.0976 2.29289 16.7071C1.90237 16.3166 1.90237 15.6834 2.29289 15.2929L9.29289 8.2929C9.66516 7.92063 10.2623 7.90075 10.6585 8.24743L13.9297 11.1097L20.2689 4.31769C20.6458 3.91393 21.2786 3.89211 21.6823 4.26895Z"
                  fill={color} />
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M17 5C17 4.44772 17.4477 4 18 4H21C21.5523 4 22 4.44772 22 5V8C22 8.55228 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V6H18C17.4477 6 17 5.55228 17 5Z"
                  fill={color} />
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M2 20C2 19.4477 2.44772 19 3 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20Z"
                  fill={color} />
        </svg>
    );
};

export { ArrowSvg };