import React from 'react';

const SearchResult = ({text,data}) => {
    const filterdSearchList =  data.map((list => list.filter((item,index) => item === text)))
    return (
        <div>
           {filterdSearchList.map((item,index) => <li key={index}>{item}</li>)}
        </div>
    );
};

export default SearchResult;