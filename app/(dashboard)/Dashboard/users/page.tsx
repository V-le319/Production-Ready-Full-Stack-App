import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div>
        <h1>Dashboard Users</h1>
        <ul>
            <li><Link href="/Dashboard/users/1">Users 1</Link></li>
            <li><Link href="/Dashboard/users/2">Users 2</Link></li>
            <li><Link href="/Dashboard/users/3">Users 3</Link></li>
            <li><Link href="/Dashboard/users/4">Users 4</Link></li>
        </ul>
        
        </div>
  )
}

export default page