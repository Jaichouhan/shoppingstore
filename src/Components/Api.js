import React, { useEffect, useState } from 'react';

const Api = () => {
    const [useData,setuseData] = useState("");

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then(data => {
         setuseData(data); 
      })
    },[]);



    return (
        <>
           <div className='container'>
               {useData && useData.map((data,index) => (
                   <div key={index}>
                    <h4>{data.title}</h4>
                    <img src={data.thumbnailUrl} />
                    <img src={data.url} />
                   </div>
               ))}
           </div>
        </>
    )
}

export default Api;
