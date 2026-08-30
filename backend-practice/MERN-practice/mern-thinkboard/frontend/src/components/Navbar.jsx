import { PlusIcon } from "lucide-react";
import { Link } from "react-router";


export default function Navbar() {
    return (
        <header className="bg-base-300 border-b border-base-content/50">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold font-mono tracking-tight ">Thinkboard</h1>
                    <div className="flex items-center gap-4">
                        <Link to="/create" className="btn">
                            <PlusIcon className="size-4" />
                            <span>New Note</span>
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    )
}
