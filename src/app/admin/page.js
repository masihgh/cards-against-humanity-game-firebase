'use client'

import { withAuth } from "@/context/authGuard";

function Page() {
    return (<h1>Only logged in users can view this page</h1>);
}

export default withAuth(Page)
