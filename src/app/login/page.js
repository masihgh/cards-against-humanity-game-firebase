'use client'
import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter } from "@material-tailwind/react";
import { Google } from "iconsax-react";

import firebaseApp from '@/firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Page() {
    const [loading, setLoading] = useState(false);

    const HandleLogin = () => {
        setLoading(true)
        const auth = getAuth(firebaseApp);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: "select_account "
        });

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user,token);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

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

export default Page;
