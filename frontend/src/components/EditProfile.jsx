import React from "react";
function EditProfile(){
    return(
        <div className="Dright-content">
                <div className="dash-main-filed">
                    <div className="inner-field-div">
                        <div className="top-title">
                            <h4>Edit Profile</h4>
                        </div>
                        <div className="edit-profile pt-30">
                            <form className="form w-100" action="profile.html"> 
                                <div className="input-group mb-3 mb-lg-4 pb-1"> 
                                    <label className="form-label w-100">Profile Picture</label>
                                    <div className="profile-img">
                                        <span className="file-title">Browse File</span>
                                        <button className="default-btn">Upload</button>
                                        <input type="file" className="FileUpload1" id="FileInput" name="booking_attachment"/>
                                    </div>
                                </div>
                                <div className="input-group mb-3 mb-lg-4 pb-1">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="w-100" value="Adam Arnold"/>
                                </div>
                                <div className="input-group mb-3 mb-lg-4 pb-1 w-50 w-sm-100 pe-sm-3 float-start">
                                    <label className="form-label">Email ID</label>
                                    <input type="email" className="w-100" value="audin_rushow@gmail.com"/>
                                </div>
                                <div className="input-group mb-3 mb-lg-4 pb-1 w-50 w-sm-100 ps-sm-3 float-start">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="w-100" value="+1-202-555-0168" name="Phone Number"/>
                                </div>
                                <div className="input-group mb-3 mb-lg-4 pb-1">
                                    <label className="form-label w-100">Gender</label>
                                    <div className="custom-radio d-flex align-items-center">
                                        <label className="gender-blog">
                                        <input type="radio" name="gender-field" checked/>
                                        <span>Male</span>
                                        </label>
                                        <label className="gender-blog">
                                        <input type="radio" name="gender-field"/>
                                        <span>Female</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="update-bottom text-end">
                                    <button type="button" className="default-btn2">Cancel</button>
                                    <button type="submit" className="default-btn">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
         </div>
    )
}
export default EditProfile;