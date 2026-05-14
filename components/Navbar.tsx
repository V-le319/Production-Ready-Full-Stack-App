import React from 'react';
import Link from 'next/link';
import {auth, signOut, signIn} from "@/auth"
//import { redirect } from 'next/dist/server/api-utils';
import { BadgePlus, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';


const Navbar = async () => { {/*we're able to do this aync function here bcz we are on server side component */}
  const session = await auth()
  return (
    <header className="px-5 py-3 bg-white font-work-sans shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
        <img className="logo h-10"
              src="/logo.png"
              alt=""/>
        </Link>

        <div className="flex items-center gap-5 text-black text-lg font-medium">
          {session && session?.user ? (
            <>
          <Link href="/startup/create">
          <span className="max-sm:hidden">Create</span>
          <BadgePlus className=" size-6 sm:hidden"/>
          </Link>

          <form action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}>
            <button type="submit">
              <span className="max-sm:hidden">Logout</span>
              <LogOut className=" size-6 sm:hidden text-red-600"/>
            </button>
          </form>

            <Link href={`/user/${session?.id}`}>
            <Avatar className="size-10">
            <AvatarImage src={session?.user?.image} alt={session?.user?.name || ""}  />
            <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            </Link>
          </>
          ) : (
              <form action={async () => {
                  "use server";
                  await signIn('github')
              }}>
                <button type="submit">Login</button>
              </form>
          )}
        </div>

      </nav>
    </header>
  )
}

export default Navbar