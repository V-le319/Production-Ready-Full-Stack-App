import React from 'react'
import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'


const StartupCard = ( {post} : {post: StartupTypeCard}) => {

  {/*if you're destructuring a subproperty from another property
    and in the same line you destructer another property with the same name 
    -> YOU HAVE TO RENAME ONE OF THEM. In this case we need to change _id of the author property */}
  
    const { _createdAt, views, author: { _id: authorId, name}, category, title, _id, description, immage: image} = post;
  return (
    <li className="startup-card group">
        <div className='flex-between'>
            <p className='startup_card_date'>
                {formatDate(_createdAt)}
            </p>

            <div className="flex gap-1.5">
              <EyeIcon className="size-6 text-sidebar"></EyeIcon>
              <span className='text-base'>{views}</span>
            </div>
        </div>

        <div className='flex-between mt-5 gap-5'>
          <div className='flex-1'>
            <Link href={`/user/${authorId}`}>
            <span className='text-base font-medium line-clamp-1'>{name}</span>
            </Link>
            <Link href={`/startups/${_id}`}>
            <span className='text-2xl font-semibold line-clamp-1'>{title}</span>
            </Link>
          </div> 

          <Link href={`/user/${authorId}`}>
          <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48}
                 className='rounded-full' />
            </Link>
        </div>

        <Link href={`/startups/${_id}`}>
        <p className='startup-card_desc'>{description}</p>
        <img src={image} alt="" className='startup-card_img'/>
        </Link>

        <div className='flex-between gap-3 mt-5'>
          <Link href={`/?query=${category.toLowerCase()}`}>
          <p className='text-base'>{category}</p>
          </Link>
          <Button className='startup-card_btn' asChild>
            <Link href={`/startup/${_id}`}>Details</Link>
          </Button>
        </div>
    </li>
  )
}

export default StartupCard