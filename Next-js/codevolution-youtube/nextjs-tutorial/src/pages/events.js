
// pre-rendering + client side data fetching

import { useRouter } from "next/router";
import { useState } from "react";


export default function EventList({eventlist}) {
    const [events, setEvents] = useState(eventlist);
    const router = useRouter();


    const fetchSportsEvents = async () => {
        const response = await fetch("http://localhost:2000/events?category=sports");
        const data = await response.json();
        setEvents(data);
        router.push("events?category=sports", undefined, {shallow: true })
        
    }

    return (
        <>
            <button onClick={fetchSportsEvents}>filter sports events</button>
            <h1>list of events</h1>
            {
                events.map(function(evtlist) {
                    return (
                        <div key={evtlist.id}>
                            <h2>{evtlist.id} {evtlist.title} {evtlist.date} | {evtlist.category} </h2>
                            <p>{evtlist.description} </p>
                            <br></br>
                        </div>
                    )
                })
            }
        </>
    )
}


export async function getServerSideProps(context) {
    console.log(context)

    const {query} = context;
    const {category} = query;
    const queryString = category ? "category=sports": ""


    const response = await fetch(`http://localhost:2000/events?${queryString}`);
    const data = await response.json();

    return {
        props: {
            eventlist: data
        }
    }

}