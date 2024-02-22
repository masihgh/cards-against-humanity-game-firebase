'use client'
import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter } from "@material-tailwind/react";
import { Google } from "iconsax-react";

function Page() {
    const [loading, setLoading] = useState(false);


    return (
        <section className={"mt-20 flex flex-row justify-center"}>
            <Card className="w-96">
                <CardBody>
                    <h1>Hi</h1>
                </CardBody>
                <CardFooter className="pt-0 gap-3 grid">
                    <Button
                        className={"flex items-center gap-3 justify-center"}
                        variant="outlined"
                        fullWidth
                        disabled={loading}
                    >
                        <Google className={"w-5 h-5"} />
                        {loading ? "Logging in..." : "Login With Google"}
                    </Button>
                </CardFooter>
            </Card>
        </section>
    );
}

export default Page;
