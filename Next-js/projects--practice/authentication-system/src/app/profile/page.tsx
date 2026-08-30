"use client";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";



function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("logout successfully");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserData = async ()=> {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  }

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2">
      <h1>ProfilePage</h1>
      <br />
      <br />
      
      <h2 className=" p-2 bg-slate-400 m-4 hover:bg-slate-800  "> 
        { data === "nothing" ? "Nothing data": <Link href={`/profile/${data}`}>{data}</Link>}
      </h2>

      <button
        onClick={logout}
        className="bg-blue-700 mb-2 p-3 rounded-md hover:bg-slate-500">
        logout
      </button>

      <button
        onClick={getUserData}
        className="bg-green-700 p-3 rounded-md hover:bg-slate-500">
        user details
      </button>

      
    </div>
  );
}

export default ProfilePage;
