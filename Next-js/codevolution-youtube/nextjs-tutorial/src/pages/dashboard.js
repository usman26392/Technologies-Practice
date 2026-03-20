import { useEffect, useState } from "react"


const dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(()=> {
        async function fetchDashboardData() {
            const response = await fetch("http://localhost:2000/dashboard");
            const data = await response.json();
            setDashboardData(data);
            setIsLoading(false);
        }
        fetchDashboardData()
    },[]);

    if(isLoading) {
        return (<h1>loading...</h1> )
    }

    return (
        <div>
            <h1>dashboard</h1>
            <ul>
                <li>Posts:  {dashboardData.posts} </li>
                <li>Likes:  {dashboardData.likes } </li>
                <li>Followers:  {dashboardData.followers } </li>
                <li>Following:  {dashboardData.following } </li>
            </ul>

        </div>

    )
}

export default dashboard