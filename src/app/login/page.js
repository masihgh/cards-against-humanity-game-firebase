'use client'
import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter } from "@material-tailwind/react";
import { Google } from "iconsax-react";
import { useAuth } from "@/context/AuthContext";
import { withGuest } from "@/context/authGuard";

function Page() {
    const [loading, setLoading] = useState(false);

    const { currentUser, signInWithGoogle } = useAuth(); // Access the current user and login function from the AuthContext

    const HandleLogin = () => {
      signInWithGoogle();
      console.log(currentUser);
    };

    return (
        <section className={"mt-20 flex flex-row justify-center"}>
            <Card className="w-96">
                <CardBody>
                    <h1>Hi</h1>
                </CardBody>
                <CardFooter className="pt-0 gap-3 grid">
                    <Button
                        className={"flex items-center gap-3 justify-center"}
                        fullWidth
                        loading={loading}
                        onClick={HandleLogin}
                    >
                        {loading ? 'Loading...' : (
                            <>
                                <Google className={"w-5 h-5"} />
                                Login With Google
                            </>
                        )}
                    </Button>
                </CardFooter>
            </Card>
        </section>
    );
}

export default withGuest(Page);
