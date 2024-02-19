import { Route, Routes } from "react-router-dom";
import { Home } from "../components/home/home.component";
import { Contactus } from "../components/contactus.component";
import { Registration } from "../components/regform.component";
import { Signin } from "../components/signin.component";
 export function AppRouter() {
    return (
        <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/contactus" element={<Contactus></Contactus>}></Route>
            <Route path="/signup" element={<Registration></Registration>}></Route>
            <Route path="/signin" element={<Signin></Signin>}></Route>
        </Routes>
    )
 }