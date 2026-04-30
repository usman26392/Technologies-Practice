import { useMemo, useState } from "react";


export default function SimpleSearch() {
    console.log("SimpleSearch: component rendered!");

    const [query, setQuery] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    // A simple list of data
    const users = ["Alice", "Bob", "Charlie", "David", "Eve"];


    // without useMemo:
    // const filteredUsers = () => {
    //     console.log("filteredUsers: inner function ran!");
    //     return users.filter(user =>
    //         user.toLowerCase().includes(query.toLowerCase())
    //     );
    // };

    // with useMemo:
    const filteredUsers = useMemo(() => {
        console.log("filteredUsers: inner function ran!");
        return users.filter(user =>
            user.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]); // Only watch the search query

    return (
        <div>
            <input
                type="text"
                placeholder="Search users..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {/* for without useMemo */}
                {/* {filteredUsers().map(user => <li key={user}>{user}</li>)} */}

                {/* for with useMemo */}
                {filteredUsers.map(user => <li key={user}>{user}</li>)}
            </ul>

            <button onClick={()=> setIsLogin(prev => !prev)}>
                {
                    isLogin ? "Logout" : "Login"
                }
            </button>
        </div>
    )
}
