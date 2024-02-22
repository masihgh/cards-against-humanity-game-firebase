"use client"
import Image from "next/image";
import {Button} from "@material-tailwind/react";
import AppNavbar from "@/components/AppNavbar";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
    const {currentUser} = useAuth()
    console.log(currentUser);
    return (
        <main className="container px-5 min-h-screen">
            <Button>Button</Button>
        </main>
    );
}
