import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { HiCamera } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import Button from '../button/Button';
import "./formstyles/profiledit.css";

const ProfileEditForm = ({user, setShowEditForm}) => {
    const {updateUserHandle} = useData();
    const {currentUser : {token, userInfo}} = useAuth();
    const [imageUploading, setImageUploading] = useState(false)
    const [editForm, setEditForm] = useState({
        avatarUrl : user?.avatarUrl,
        bio : user?.bio,
        website : user?.website
    });
    const editFormRef = useRef();

    const {firstName, lastName, username} = user;

    const onEditFormChange = (e) => {
        const {name, value}= e?.target;
        setEditForm((prev) => ({...prev, [name] : value}))
    }

    const handleAvatarChange = async (e) => {
        setImageUploading(true);
        const imageData = e?.target?.files[0];
        const formData = new FormData();
        formData.append('file', imageData);
        formData.append('upload_preset', process.env.REACT_APP_CLAUDINARY_UPLOAD_PRESET);
        formData.append('cloud_name', "dibzjsyhk");

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/dibzjsyhk/auto/upload`,{
                method : "POST",
                body : formData
            })
            const {secure_url} = await response?.json();
            console.log(secure_url) 
            setEditForm((prev) => ({...prev, [e?.target?.name] : secure_url}))
            setImageUploading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const closeForm = (e) => {
           if(!editFormRef.current.contains(e.target)){
            setShowEditForm(false);
           }
        }

       document.addEventListener('mousedown', closeForm);
       return () => document.removeEventListener('mousedown', closeForm);
    }, [])


    return (
        userInfo?.username === username && (

            <div className='editprofile' ref={editFormRef}>
                <p>
                    <span><strong>edit profile</strong></span>
                    <Button 
                        icon={<RxCross2/>}
                        onClick={() => setShowEditForm(false)}
                    />
                </p>
                <hr />
                <form className='editprofileForm' onSubmit={(e) => updateUserHandle(e, editForm, token, setShowEditForm)}>
                    <label className='editprofileForm__label editprofileForm_label--imagelabel' htmlFor="">
                        <strong>avatar</strong>
        
                        <section className='editprofileForm__uploadBox'>
                            
                            <section className='editprofileForm__uploadImge'>
                             <img className='editprofileForm__avatar' src={editForm?.avatarUrl} alt={`${editForm?.avatarUrl} of ${username}`} />
                            </section>
        
                             <section className='editprofileForm__upload'>
                                <HiCamera  className='editprofileForm__uploadicon'/>
                                <input className='editprofileForm__input editprofileForm__fileinput' onChange={handleAvatarChange} type="file" accept='/image' name='avatarUrl' />
                             </section>
                        
                        </section>
                        
                    </label>
                    <label className='editprofileForm__label'>
                        <strong>name</strong>
                        <input type="text" className="editprofileForm__noneditable" readOnly   value={`${firstName} ${lastName}`} />
                    </label>
                    <label className='editprofileForm__label'>
                        <strong>username</strong>
                        <input type="text" className="editprofileForm__noneditable" readOnly  value={username} />
                    </label>
                    <label className='editprofileForm__label'>
                        <strong>
                        bio
                        </strong>
                        <input 
                            type="text" 
                            name="bio" 
                            value={editForm?.bio}
                            onChange={onEditFormChange}
                        />
                    </label>
                    <label className='editprofileForm__label'>
                        <strong>website</strong>
                        
                        <input 
                            type="text" 
                            name="website" 
                            value={editForm?.website}
                            onChange={onEditFormChange}
                        />
                    </label>
                    <Button 
                       label={imageUploading ? "please wait.." : "submit"}
                       disabled={imageUploading}
                       type={'submit'}
                    />
                <p>*name and username cannot be edited</p> 
                </form>
            </div>
          )
        )
}

export default ProfileEditForm