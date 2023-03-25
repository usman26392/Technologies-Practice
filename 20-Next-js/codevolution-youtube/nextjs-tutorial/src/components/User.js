

// const User = (props) => {
//   return (
//     <div key={props.singleUser.id}>
//       <h3> {props.singleUser.name} </h3>
//       <h4>{props.singleUser.username} </h4>
//       <br></br>
//     </div>
//   );
// };

// or with destructuring!
const User = ({singleUser}) => {
    return (
      <div key={singleUser.id}>
        <h3> {singleUser.name} </h3>
        <h4>{singleUser.username} </h4>
        <br></br>
      </div>
    );
  };



export default User;
