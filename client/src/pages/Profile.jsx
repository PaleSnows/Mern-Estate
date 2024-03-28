import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const fileRef = useRef(null);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  // console.log(filePerc);

  //FILE Uploading Part//
  const handleFileUpload = (file) => {
    // Firebase storage initialization and reference setup
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    //inititating uploading image to firebase
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Upload progress tracking
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.floor(progress)); // Update upload progress
      },
      (error) => {
        setFileUploadError(true); // Handle upload error
      },
      () => {
        // Upload completed successfully, get download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          // Update form data with the download URL , now in avatar there is download url aka now we have image in our website too
          setFormData({ ...formData, avatar: downloadUrl });
        });
      }
    );
  };

  return (
    <div className="p-3 max-w-lg mx-auto gap-4">
      <h1 className="font-semibold text-3xl text-center my-7">Profile</h1>
      <form className="flex flex-col  gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          alt=""
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error Image Upload(image must be less than 2mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-600">Successfully image uploaded!</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg "
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg "
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg "
          id="password"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 items-center mt-2 uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out </span>
      </div>
    </div>
  );
};

export default Profile;
