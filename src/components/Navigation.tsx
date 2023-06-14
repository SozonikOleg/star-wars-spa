import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex justify-between px-5 h-[50px] bg-blue-100 items-center shadow-md ">
      <Link className="text-blue-400" to="/">
        Star-Wars
      </Link>
      <Link className="text-blue-400" to="/auth">
        Auth
      </Link>
    </nav>
  );
};
