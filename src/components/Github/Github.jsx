// import { response } from 'express'
// import React, { useState } from 'react'
// import { useEffect } from 'react'



// function Github() {
//     const myURL = new URL('https://api.github.com/users/hiteshchoudhary');
// console.log(myURL.hostname);

//     const [data,setData]=useState([])
// useEffect(() => {
//  fetch('https://api.github.com/users/hiteshchoudhary')
//  .then(response=>response.json())
//  .then(data=>{
//     console.log(data);
//     setData(data);
//  })

// }, [])


//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github-Fallowers : {data.followers}</div>
//   )
// }

// export default Github





import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data=useLoaderData()
    // const myURL = new URL('https://api.github.com/users/hiteshchoudhary');
    // console.log(myURL.hostname); // Logs the hostname to verify the URL is correct

    // const [data, setData] = useState(null); // Initialize as null for better handling

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Santoshpatel112')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data); // Logs the data from the GitHub API
    //             setData(data); // Update state with fetched data
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error); // Handle any potential errors
    //         });
    // }, []);

    if (!data) {
        return <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Loading...</div>; // Display while fetching data
    }

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl" style={{border:"1px solid grey", borderRadius:"10px", }}>
            Github Followers: {data.followers}
            <br />
            <img src={data.avatar_url} alt ="Git picture" width={300} style={{border:"1px solid grey " ,borderRadius:"20px", }} />
        </div>
    );
}

export default Github;


export const githubInfoLoader=async ()=>{
  const response= await fetch('https://api.github.com/users/Santoshpatel112')
  return response.json();
}