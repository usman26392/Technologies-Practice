import List from "./List";




// list rendering!

// way:1
// const UserList = () => {
//   const userNames = ["Farhan", "Usman", "Fahad ali", "Rehan"];
//   return (
//     <div>
//       <h1>UserList</h1>
//       <ul>
//         {userNames.map((name, idx) => (
//           <li key={idx}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;


// way: 2
// const UserList = () => {
//     const userNames = ["Farhan", "Usman", "Fahad ali", "Rehan ali "];
//     const List = userNames.map((name, idx)=> ( <li key={idx} >{name}</li>))
//     return (
//       <div>
//         <h1>UserList</h1>
//         <ul>
//           { List }
//         </ul>
//       </div>
//     );
//   };
  
//   export default UserList;

// way: 3
const UserList = () => {
    const userNames = ["Farhan", "Usman", "Fahad ali", "Rehan ali "];
    return (
      <div>
        <h1>UserList</h1>
        <ul>
          <List names= {userNames}/>
        </ul>
      </div>
    );
  };
  
  export default UserList;




