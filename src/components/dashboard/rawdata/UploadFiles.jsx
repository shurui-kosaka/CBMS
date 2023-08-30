import React, { useState, useRef } from 'react';

function UploadFiles({ files, setFiles }) {
    const fileInputRef = useRef(null);

    const openFileManager = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const uploadHandler = (event) => {
        const file = event.target.files(0);

    }
    return (
        <div className='flex flex-col min-w-[360px] max-w-[475px] md:w-[50%]'>
            <p className=' mt-3 font-bold text-[16px] text-white'>Upload File</p>
            <input
                placeholder='Title (Required)'
                className='mt-3 px-4 py-3 border rounded-[10px] bg-none text-white shadow-sm'
            />
            <div class='mt-3 px-4 py-3 flex flex-col border border-white rounded-[10px]'>
                <p>Upload File</p>
                <input
                        type='file'
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={uploadHandler}
                    />
                <button
                    class='p-2 bg-none mt-4 text-white font-bold rounded-[48px] border border-white shadow-sm hover:text-black hover:bg-white ease-in-out duration-200'
                    onClick={openFileManager}
                >
                    Open File Manager
                </button>
                <p className='w-full text-center my-5'>or</p>
                <div className='flex flex-col border-[2px] border-white border-dashed rounded-[5px] bg-[rgba(217,217,217,0.19)] h-[173px] items-center justify-center'>
                    <img src="/assets/svgs/documentupload.svg"  />
                    <p className='mt-2 text-xs'>Drag Files Here</p>
                </div>
            </div>
        </div>
    )
}

export default UploadFiles
