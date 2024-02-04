import { useEffect, useState } from "react"


// topic: lifecycle methods of component

function UserDataDisplay() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Simulate an API call to fetch user data
        let fetchData = async () => {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                let data = await response.json();
                setUserData(data);
            }
            catch (error) {
                console.error("Error fetching user data", userData)
            }
        };
        // 'componentDidMount' equivalent code here
        // Call the fetchData function when the component mounts
        fetchData();

        // Cleanup function (equivalent to 'componentWillUnmount')
        return () => {
            console.log('Component will unmount');
        }
    },[]) // Empty dependency array means it runs once on mount
    return (
        <div>
            <h1>User Data </h1>
            {
                userData ? (
                    <div>
                        <p>Name: {userData.name}</p>
                        <p>Email: {userData.email} </p>
                        <p>City: {userData.address.city} </p>
                    </div>
                )
                : (<p style={{color:"red"}}>Loading user data</p>)  
            }
            
        </div>
    )
}

export default UserDataDisplay

// In this example:
// The useEffect hook is used to perform the data fetching when the component mounts (componentDidMount equivalent).
// The userData state is updated with the fetched data.
// The component renders the user data when available or a loading message while waiting for the data.
// The cleanup function inside useEffect serves as the cleanup logic when the component is unmounted (componentWillUnmount equivalent).
// This example demonstrates a real-life scenario where you might want to fetch data from an API when a component mounts and handle cleanup when the component unmounts. The use of useEffect and state makes it a clean and concise way to manage side effects in functional components.





// ----------------------------------- in detail ------------------------------
// In React, functional components don't have traditional lifecycle methods like class components do. However, with the introduction of React Hooks in React 16.8, functional components gained lifecycle-like features through the use of hooks like useEffect.

// Here are the equivalent lifecycle methods in functional components:

// 1. componentDidMount Equivalent:
// In functional components, you can achieve the equivalent behavior of componentDidMount using useEffect with an empty dependency array ([]). The code inside the useEffect hook runs after the component is mounted.

// import React, { useEffect } from 'react';

// const MyComponent = () => {
//   useEffect(() => {
//     // componentDidMount equivalent code here
//     console.log('Component mounted');
//     // Cleanup function (optional)
//     return () => {
//       console.log('Component will unmount');
//     };
//   }, []); // Empty dependency array means it runs once on mount

//   return (
//     <div>
//       {/* Component render code */}
//     </div>
//   );
// };

// export default MyComponent;


// 2. componentDidUpdate Equivalent:
// The equivalent of componentDidUpdate in functional components is achieved by using useEffect with a dependency array that includes the variables you want to watch for changes.
// import React, { useEffect, useState } from 'react';

// const MyComponent = () => {
//   const [value, setValue] = useState('');

//   useEffect(() => {
//     // componentDidUpdate equivalent code here
//     console.log('Component updated with new value:', value);
//   }, [value]); // Watch for changes in 'value'

//   return (
//     <div>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </div>
//   );
// };

// export default MyComponent;


// 3. componentWillUnmount Equivalent:
// The cleanup code for when the component is unmounted is placed inside the useEffect hook with a cleanup function. This is equivalent to componentWillUnmount.

// import React, { useEffect } from 'react';

// const MyComponent = () => {
//   useEffect(() => {
//     // componentDidMount equivalent code here

//     // Cleanup function (equivalent to componentWillUnmount)
//     return () => {
//       console.log('Component will unmount');
//     };
//   }, []); // Empty dependency array means it runs once on mount

//   return (
//     <div>
//       {/* Component render code */}
//     </div>
//   );
// };

// export default MyComponent;



// While functional components don't directly mirror class components in terms of lifecycle methods, the use of useEffect and other hooks provides a way to achieve similar behavior and manage side effects in functional components.














































