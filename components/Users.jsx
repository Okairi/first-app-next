"use client";

import Link from "next/link";
export const Users = ({ user }) => {
  return (
    <ul className="bg-">
      {user.map(({ id, email, first_name, last_name, avatar }) => {
        return (
          <Link key={id} href={`/users/${id}`}>
            <li
              key={id}
              className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between"
            >
              <div>
                <h5 className="font-bold ">
                  {id} - {first_name} - {last_name}
                </h5>
                <p className="text-slate-100">Email : {email}</p>
              </div>
              <img src={avatar} className="rounded-full w-20" />
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
