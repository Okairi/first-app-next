import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black">
      <Link href="/" className="">
        Home
      </Link>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
};
