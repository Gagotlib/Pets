import ImageGallery from "react-image-gallery";
import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        thumbnail: "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        original: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        thumbnail: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

];


const Gallery = () => {
    return (
        <>
            <ImageGallery items={images} />;
        </>
    )
}

export default Gallery