import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Postcenter() {
  const navigate = useNavigate();

  const captionRef = useRef(null);
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  const thumbnailRef = useRef(null);

  const [preview, setPreview] = useState({
    image: null,
    video: null,
    thumbnail: null,
  });

  const handlePreview = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(prev => ({
        ...prev,
        [type]: URL.createObjectURL(file),
      }));
    }
  };

  const postUpload = async () => {
    const images = imageRef.current?.files[0];
    const video = videoRef.current?.files[0];
    const thumbnail = thumbnailRef.current?.files[0];
    const captions = captionRef.current?.value;

    const formData = new FormData();

    // Either video or image as "media"
    if (video) {
      formData.append("media", video);
    } else if (images) {
      formData.append("media", images);
    }

    // Optional fields
    if (thumbnail) formData.append("thumbnail", thumbnail);
    if (images) formData.append("image", images); // optional image again
    formData.append("captions", captions);

    const toastId = toast.loading("Uploading your post...");

    try {
      const response = await fetch('https://https://onlyfans-backend-production.up.railway.app//api/create/Posts', {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (response.status === 200) {
        toast.update(toastId, {
          render: "✅ Post uploaded successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        navigate('/dashboard');
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      toast.update(toastId, {
        render: "❌ Failed to upload. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <section className="flex relative border-l border-r border-gray-400 w-full md:w-[632px] h-dvh">
      <div className="w-[632px] h-full overflow-y-auto">
        {/* Toasts */}
        <ToastContainer position="top-right" />

        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300 h-[56px] sticky w-full z-10 bg-white top-0">
          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <h1 className="text-[32px] font-light leading-none">&larr;</h1>
            </Link>
            <h1 className="text-lg font-bold tracking-wide">NEW POST</h1>
          </div>
          <button
            onClick={postUpload}
            className="bg-gray-300 px-5 py-1 text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-800"
          >
            POST
          </button>
        </div>

        {/* Caption Input */}
        <div className="px-4 pt-4">
          <textarea
            placeholder="Compose New Post..."
            rows={4}
            className="w-full border border-gray-300 text-sm px-3 py-2 resize-none outline-none rounded-md"
            ref={captionRef}
          />
        </div>

        {/* Upload Buttons */}
        <div className="flex flex-wrap items-center gap-4 px-4 py-4 mt-4 border-t border-b border-gray-300">
          <UploadButton
            label="Image"
            icon="https://img.icons8.com/ios-filled/50/image.png"
            inputRef={imageRef}
            inputId="image-upload"
            accept="image/*"
            onChange={(e) => handlePreview(e, 'image')}
          />
          <UploadButton
            label="Video"
            icon="https://img.icons8.com/ios-filled/50/video.png"
            inputRef={videoRef}
            inputId="video-upload"
            accept="video/*"
            onChange={(e) => handlePreview(e, 'video')}
          />
          <UploadButton
            label="Thumbnail"
            icon="https://img.icons8.com/ios-filled/50/film-reel.png"
            inputRef={thumbnailRef}
            inputId="thumbnail-upload"
            accept="image/*"
            onChange={(e) => handlePreview(e, 'thumbnail')}
          />
        </div>

        {/* Preview Section */}
        <div className="px-4 py-4 space-y-4">
          {preview.image && (
            <PreviewBlock title="Image Preview" type="image" src={preview.image} />
          )}
          {preview.video && (
            <PreviewBlock title="Video Preview" type="video" src={preview.video} />
          )}
          {preview.thumbnail && (
            <PreviewBlock title="Thumbnail Preview" type="image" src={preview.thumbnail} />
          )}
        </div>
      </div>
    </section>
  );
}

// Upload Button Component
const UploadButton = ({ label, icon, inputRef, inputId, accept, onChange }) => (
  <div>
    <label htmlFor={inputId} className="cursor-pointer flex items-center gap-2 text-sm bg-gray-100 px-3 py-2 rounded hover:bg-gray-200">
      <img src={icon} alt={label} className="w-5 h-5" />
      {label}
    </label>
    <input
      type="file"
      id={inputId}
      accept={accept}
      ref={inputRef}
      className="hidden"
      onChange={onChange}
      multiple={true}
    />
  </div>
);

// Preview Component
const PreviewBlock = ({ title, type, src }) => (
  <div>
    <h3 className="text-sm font-medium mb-1">{title}:</h3>
    {type === 'video' ? (
      <video src={src} controls className="max-h-60 w-full rounded-md" />
    ) : (
      <img src={src} alt={title} className="w-24 h-24 object-cover rounded-md border" />
    )}
  </div>
);

export default Postcenter;
