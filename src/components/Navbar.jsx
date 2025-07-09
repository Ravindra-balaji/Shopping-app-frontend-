import { Link } from "react-router";
const Navbar=()=>
{
    return (
        <div className="py-4 px-6 flex justify-between bg-black">
        <div className="font-bold text-amber-100 text-3xl"> Shopping App</div>
        <div className="flex gap-2">
        <input className="b-1 py-1 px-2 rounded-md border-4 bg-white w-160 h-10 border-2" />
        <button className="b-1 py-1 px-2 rounded-md text-emerald-600 bg-amber-100 ">Search</button>
        </div>
        <div className="flex gap-2 text-emerald-600 text-2xl">
            <Link to="/profile">Profile</Link>
            <Link to="/signup">SignUp</Link>
        </div>
        </div>

    )
}
export {Navbar};