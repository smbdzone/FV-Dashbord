'use client';

import React, { useState } from 'react';

const MediaForm: React.FC = () => {
    const [videoTitle, setVideoTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState<File | null>(null);

    const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setThumbnail(file);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({ videoTitle, url, description, thumbnail });
    };

    return (
        <div className="mb-4">
            <div className="">
                <h1 className="text-2xl font-bold mb-6 text-black">Manage Media Centre</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-black font-medium mb-1">Video Title</label>
                        <input
                            type="text"
                            value={videoTitle}
                            onChange={(e) => setVideoTitle(e.target.value)}
                            placeholder="Enter Video title"
                            className="w-full md:w-1/2 bg-[#c5f6f7] p-3 rounded-md outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-black font-medium mb-1">URL</label>
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Write URL"
                            className="w-full md:w-1/2 bg-[#c5f6f7] p-3 rounded-md outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-black font-medium mb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            className="w-full md:w-1/2 bg-[#c5f6f7] p-3 rounded-md outline-none resize-none"
                        />
                    </div>

                    <div className="border border-dashedw-full  md:w-[80%] border-gray-300 p-6 rounded-md text-center">
                        <p className="font-semibold text-black mb-2">Upload Thumbnail</p>
                        <p className="text-sm text-gray-500 mb-4">Click or drag an image here to upload</p>
                        <label className="inline-block bg-[#c5f6f7] text-black px-4 py-2 rounded-md cursor-pointer">
                            Upload Thumbnail
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden "
                                onChange={handleThumbnailUpload}
                            />
                        </label>
                    </div>

                    <div className="text-right relative mr-2 md:-left-50">
                        <button
                            type="submit"
                            className="bg-[#0AC4BB] text-white font-semibold px-6 py-2 rounded-md hover:opacity-90"
                        >
                            Save Package
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MediaForm;
