import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import UserList from "../components/UserList";
const Dashboard = () => {
    return(
       <>
       
       <Header/>
       <Sidebar/>
       <UserList/>
       <Footer/>

       </>
    )
}
 export default Dashboard;