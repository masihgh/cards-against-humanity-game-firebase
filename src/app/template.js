"use client"
import React from 'react';
import {ThemeProvider} from "@material-tailwind/react";
import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";

const Template = ({children}) => {
    return (
        <ThemeProvider>
            <AppNavbar/>
            {children}
            <AppFooter/>
        </ThemeProvider>
    );
};

export default Template;