import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";
import config from "@/config";

const AppFooter = () => {
    return (
        <footer className={'bg-black text-white mt-5 shadow p-3 flex flex-col align-middle items-center gap-2 justify-center'}>
            <div>
                <Typography className='text-sm font-extrabold'>{config.Version}</Typography>
            </div>
        </footer>
    );
};

export default AppFooter;