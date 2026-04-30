import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
// import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import apiInstance from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";


export default function HomePage() {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // const response = await axios.get("http://localhost:5001/api/notes/");
        // // console.log(response.data);
        // setNotes(response.data);
        // OR
        const response = await apiInstance.get("notes/");
        setNotes(response.data);

      } catch (error) {
        console.log(" Error fetching error", error);
        if (error?.response && error?.response.status === 429) {
          setIsRateLimited(true);
          console.log("too many request")
        }
        else {
          toast.error("Failed to fetch notes. Please try again later.");
        }
      }
      finally {
        setIsloading(false);
      }
    }

    fetchNotes();

  }, []);



  return (
    <div className="min-h-screen">
      <Navbar />
      {
        isRateLimited && <RateLimitedUI />
      }

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {
          isloading && <div className="text-center text-primary py-4">Loading notes...</div>
        }
        {
          notes.length === 0 && (!isloading) && (!isRateLimited) && (
            <NotesNotFound />
          )
        }
        {
          notes.length > 0 && !isRateLimited && !isloading && (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
              {
                notes.map((noteObj, idx) => (
                  <NoteCard key={noteObj._id} note={noteObj} totalNotes={setNotes} />
                ))
              }
            </div>
          )
        }
      </div>




    </div>
  )
}


