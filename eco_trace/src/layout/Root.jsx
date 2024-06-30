import { Outlet } from "react-router-dom";


export default function RootLayout(){
    return (
        <main className="bg-green-50">
            <Outlet />
        </main>
        
    );
}