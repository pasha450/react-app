
import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { json } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;



function EditProfile(){
        const[userData , setUserData] = useState({
            name: '',
            profile_image: null
        });
        const[userId, setUserId] = useState('');
        const[header, setHeader] = useState({});
        const[selectedImage,setSelectedImage] = useState();
        const[PreviewUrl,setPreviewUrl] = useState('');
        const[Message,setMessage] = useState('');
       

    useEffect(()=>{
        const token = Cookies.get('authToken');
        let loggedUserData = localStorage.getItem("storeData");
        loggedUserData = JSON.parse(loggedUserData)
        const userId = loggedUserData.userId;
        const header = {
            'Authorization': token 
        }
        // **********---
        setUserId(userId);
        setHeader(header);
        const fetchUserData = async () => {
            try {
                const result = await axios.post(`${apiUrl}/edit-profile`,{userId:userId},{ headers: header});
                const userObject = {
                    userId:result.data.userData._id,
                    name:result.data.userData.name,
                    email:result.data.userData.email,
                    gender:result.data.userData.gender,
                    profile_image:result.data.userData.profile_image,
                    gender:result.data.userData.gender == undefined ? '': result.data.userData.gender,
                }
                setUserData(userObject);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserData();
    },[]);

     const handleImageChange =(e) =>{
     const file = e.target.files[0];
     console.log(file,"file")
     console.log(file.file,"file444444444444")
     if (file)
     {
        setSelectedImage(file);
        setUserData(prevState => ({
            ...prevState,
            profile_image: file
        }));
    
      }
     };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        // console.log("value = " , e.target.value);    
        // console.log("name = " , e.target.name);    
        // console.log("current name", userData.name)
    }

    const handleSubmit =  async(e) => {
        e.preventDefault();

    //  use for upload image file 
    
        if(!selectedImage){
            setMessage('select an image to upload');
            return ;
        } 
        const formData = new FormData()
        formData.append('name', userData.name);
        formData.append('profile_image', selectedImage);
        console.log(formData,'nothing hereeee');
        try{
         
            console.log(userData,'userData')
            let result = await axios.post(`${apiUrl}/update-profile`,userData,{ headers: header ,'Content-Type': 'multipart/form-data',
          ...header} );
            console.log("form submitted !!",result);
            // console.log(userData,"updated value");
            toast.success('Profile updated successfully!'); // Show success toast
            localStorage.setItem('storeData',JSON.stringify(userData));
        }
        catch(error){
          console.log(error);
          toast.error('Error updating profile');
        }
    }
    return(
        <div className="Dright-content">
                <ToastContainer />
                <div className="dash-main-filed">
                    <div className="inner-field-div">
                        <div className="top-title">
                            <h4>Edit Profile</h4>
                        </div>
                        <div className="edit-profile pt-30">
                            <form className="form w-100" method='post' onSubmit={handleSubmit} enctype="multipart/form-data"> 
                                <div className="input-group mb-3 mb-lg-4 pb-1"> 
                                    <label className="form-label w-100">Profile Picture</label>
                                    <div className="profile-img">
                                        <span className="file-title">Browse File</span>
                                        <button className="default-btn">Upload</button>
                                        <input 
                                            type="file"
                                            className="FileUpload1"
                                            id="FileInput"
                                            name="profile_image"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                                <div className="input-group mb-3 mb-lg-4 pb-1">
                                    <label className="form-label">Name</label>
                                    <input 
                                    type="text" 
                                    className="w-100" 
                                    name="name"
                                    value={userData.name}
                                    onChange={handleChange}
                                />
                                </div>
                                <div className="input-group mb-3 mb-lg-4 pb-1 w-50 w-sm-100 pe-sm-3 float-start">
                                    <label className="form-label">Email ID</label>
                                    <input
                                    name="email"
                                    className="w-100" 
                                    type="email" 
                                    value={userData.email}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="input-group mb-3 mb-lg-4 pb-1">
                                    <label className="form-label w-100">Gender</label>
                                    <div className="custom-radio d-flex align-items-center">
                                        <label className="gender-blog">
                                        <input 
                                            type="radio"
                                            name="gender"
                                            value="1"
                                            checked={userData.gender =="1" ? true : false}
                                            onChange={handleChange}
                                        />
                                        <span>Male</span>
                                        </label>
                                        <label className="gender-blog">
                                        <input 
                                            type="radio" 
                                            value="2"
                                            name="gender"
                                            checked={userData.gender =="2" ? true : false}
                                            onChange={handleChange}
                                        />
                                        <span>Female</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="update-bottom text-end">
                                    <button type="button" className="default-btn2">Cancel</button>
                                    <button type="submit" className="default-btn">update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
         </div>
    )

}
export default EditProfile;