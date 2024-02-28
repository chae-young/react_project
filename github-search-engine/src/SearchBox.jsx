import React from 'react';

const SearchBox = ({data,text}) => {
    return (
        <ul>
            {data.map((list => list.map((item,index) => <li className={text === '' ? 'off' : item.includes(text) ? 'on' : 'off'} key={index}>
                {item}
           
            </li>)))}
        </ul>
    );
};

export default SearchBox;