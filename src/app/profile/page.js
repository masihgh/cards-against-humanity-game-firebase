'use client'
import { useAuth } from '@/context/AuthContext'
import { withAuth } from '@/context/authGuard'
import { Avatar, Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react'
import React from 'react'

const Profile = () => {

    const { currentUser } = useAuth()
    return (
        <section className={"mt-20 flex flex-row justify-center"}>
            <Card className="w-96">
                <CardBody>
                    <div className="flex items-center gap-4">
                        <Avatar src={currentUser?.photoURL} alt="avatar" variant="rounded" />
                        <div>
                            <Typography variant="h6">{currentUser?.displayName}</Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                {currentUser?.email}
                            </Typography>
                        </div>
                    </div>
                    <h1></h1>
                </CardBody>
                <CardFooter className="pt-0 gap-3 grid">
                    <Button color='red'>Logout</Button>
                </CardFooter>
            </Card>
        </section>
    )
}

export default withAuth(Profile)
