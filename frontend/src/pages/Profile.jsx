import React, { useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import EditProfile from "../components/EditProfile";
const Profile = () => {


    return(
      <>
      <Header/>
      <Sidebar/>
      <EditProfile/>
      <Footer/>
      </> 
    )
}
export default Profile;