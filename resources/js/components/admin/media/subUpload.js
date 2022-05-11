import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import validator from 'validator';
import $ from 'jquery';
import axios from 'axios';

import imageDefaul from '../../../../../public/assets-admin/img/image.svg';

const SubUpload = () => {
    const alert = useAlert()
    const intSize = 1000000;
    const imagesTypes = [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif"
    ];

    function uploadFile(file) {
        const fileReader = new FileReader();
        // File Type 
        const fileType = file.type;
        // File Size 
        const fileSize = file.size;
    
        if(intSize < fileSize){
            return alert.info('Kích thước tệp không hợp lệ.');
        }

        if(!validator.isIn(fileType, imagesTypes)){
            return alert.info('Loại tệp không hợp lệ.');
        }

        UpMedia(file);
    
        if (true) {
            // After File Reader Loaded 
            fileReader.addEventListener('load', function () {
    
                var htmlUploaded = document.createElement('div');
                htmlUploaded.setAttribute('class', 'col-1 mb-5');
                var htmlUploadedLink = document.createElement('a');
                htmlUploadedLink.setAttribute('href', 'javascript:void(0);');
                htmlUploaded.appendChild(htmlUploadedLink);
                var htmlUploadedMedia = document.createElement('div');
                htmlUploadedMedia.setAttribute('class', 'media-image');
                htmlUploadedLink.appendChild(htmlUploadedMedia);
                var htmlUploadedLoading = document.createElement('div');
                htmlUploadedLoading.setAttribute('class', 'loading-imge');
                htmlUploadedMedia.appendChild(htmlUploadedLoading);
                var htmlUploadedIcon = document.createElement('i');
                htmlUploadedIcon.setAttribute('class', 'fas fa-spinner fa-spin icon-loading');
                htmlUploadedIcon.style.display = 'flex';
                htmlUploadedMedia.appendChild(htmlUploadedIcon);
                var htmlUploadedImage = document.createElement('img');
                htmlUploadedImage.src = fileReader.result;
                htmlUploadedMedia.appendChild(htmlUploadedImage);
    
                var parent = document.getElementById('uploaded');
                parent.insertBefore(htmlUploaded, parent.firstChild);

            });
            
            


            // Read (file) As Data Url 
            fileReader.readAsDataURL(file);
        } else { // Else
    
            
    
        };
    };

    const HandleUploadingMedia = () => {
        $('#fileInput').click();
    }
    
    const HandleUpload = (event) => {
        const fileReader = new FileReader();
        console.log(event.target.files);
        for (let index = 0; index < event.target.files.length; index++) {
            const file = event.target.files[index];
            uploadFile(file);
        }
    }
    
    const HandleMedia = () => {
        alert(313123); 
    }

    const UpMedia = (params) =>  {
        axios.post('http://127.0.0.1:8000/api/media/up', params ).then(res => {
            setAuthToken(res.data);
            Cookies.set('auth_token_user', res.data.token.access_token, { expires: res.data.token.expires_in })
            localStorage.setItem('auth:token:user', JSON.stringify(res.data.token));
            return alert.success('Đăng nhập thành công');
        })
        .catch(result => {
            return alert.error('Lỗi đăng nhập');
        });
    }
    
    const Media = () => {
        return (
            <>
                <div className="col-md-1">
                    <a onClick={HandleImage} href="#">
                        <div className="media-image">
                            <img src="https://happybox.vn/wp-content/uploads/2021/12/HappyBox_733_2813-copy.jpg"/>
                        </div>
                    </a>
                </div>
            </>
        );
    }



    return (<>
        <h1 className="h3 mb-1 text-gray-800">Tải lên hình ảnh</h1>
        <div className="row">

            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header py-3">
                        <div className="row">
                            <div id="uploadArea" className="upload-area mx-auto">
                                <div className="upload-area__header">
                                    <h1 className="upload-area__title">Tải lên hình ảnh của bạn</h1>
                                    <p className="upload-area__paragraph mt-4">
                                        Những tệp được tải lên
                                        <strong className="upload-area__tooltip">
                                        &nbsp; Tệp
                                        <span className="upload-area__tooltip-data"></span> 
                                        </strong>
                                    </p>
                                </div>
                                
                                <div onClick={HandleUploadingMedia} className="upload-area__drop-zoon drop-zoon">
                                    <span className="drop-zoon__icon">
                                        <img className='image-uploading' src={imageDefaul} />
                                    </span>
                                    <p className="drop-zoon__paragraph">Nhấp để tải lên </p>
                                    <span id="loadingText" className="drop-zoon__loading-text">Đang tải tệp lên</span>
                                    <input multiple type="file" onChange={HandleUpload} id="fileInput" className="drop-zoon__file-input" accept="image/*"/>
                                </div>
                                
                                <div id="fileDetails" className="upload-area__file-details file-details">
                                    <h3 className="file-details__title text-center">Đã tải tệp lên</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row" id='uploaded'>
                            <div className="uploaded-file">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default SubUpload;