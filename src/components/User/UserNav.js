import { useAuth } from '@/context/AuthContext'
import { Auth, Guest } from '@/context/authGuard'
import { Avatar, Button, Typography } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

export default function UserNav() {
  const { currentUser } = useAuth()
  return (
    <div>
      <Guest>
        <Link href="/login">
          <Button fullWidth variant="gradient" size="sm" className="">
            <span>Log In</span>
          </Button>
        </Link>
      </Guest>
      <Auth>
        <div className="flex flex-row items-center gap-4">
          <Avatar src={currentUser?.photoURL} alt="avatar" variant="rounded" />
          <div>
            <Typography variant="h6">{currentUser?.displayName}</Typography>
            <Button size='sm' variant='text' color='blue'>Logout</Button>
          </div>
        </div>
      </Auth>
    </div>
  )
}
