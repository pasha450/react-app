import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import UserList from "../components/UserList";
const Users = () => {
    return(
       <>
          <Header/>
            <Sidebar/>
            {/* <EditProfile/> */}
            <Footer/>
           
       </>
    )
}
 export default Users;