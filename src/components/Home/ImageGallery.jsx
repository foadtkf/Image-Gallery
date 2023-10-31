import { useState } from "react";
const ImageGallery = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1677700442000-dd522cf3dedb?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=1527&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1678652170505-5fb0f5ab1eca?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 54,
      src: "https://images.unsplash.com/photo-1519818187420-8e49de7adeef?auto=format&fit=crop&q=80&w=1527&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 64,
      src: "https://images.unsplash.com/photo-1590273089302-ebbc53986b6e?auto=format&fit=crop&q=80&w=1516&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 774,
      src: "https://images.unsplash.com/photo-1601191362988-ac6ebec629c8?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 84,
      src: "https://images.unsplash.com/photo-1567712595315-545da0d341b2?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 49,
      src: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&q=80&w=1396&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 46,
      src: "https://images.unsplash.com/photo-1572358899655-f63ece97bfa5?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 47,
      src: "https://plus.unsplash.com/premium_photo-1678403497308-29b11fc5f882?auto=format&fit=crop&q=80&w=1388&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 41,
      src: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 42,
      src: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 43,
      src: "https://images.unsplash.com/photo-1577561426384-62154a1e9457?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 23,
      src: "https://images.unsplash.com/photo-1564407727371-3eece6c58961?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  const [selectedImages, setSelectedImages] = useState([]);
  const [draggedImage, setDraggedImage] = useState(null);

  const handleDragStart = (e, image) => {
    setDraggedImage(image);
    e.dataTransfer.setData("imageId", image.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetImage) => {
    e.preventDefault();
    const draggedIndex = images.findIndex((img) => img.id === draggedImage.id);
    const targetIndex = images.findIndex((img) => img.id === targetImage.id);

    const updatedImages = [...images];
    updatedImages.splice(draggedIndex, 1);
    updatedImages.splice(targetIndex, 0, draggedImage);

    setImages(updatedImages);
    setDraggedImage(null);
  };

  const toggleImageSelection = (image) => {
    if (selectedImages.includes(image)) {
      setSelectedImages(
        selectedImages.filter((selectedImage) => selectedImage !== image)
      );
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };

  const deleteSelectedImages = () => {
    setImages(images.filter((image) => !selectedImages.includes(image)));
    setSelectedImages([]);
  };

  return (
    <div>
      <div className="image-gallery justify-center">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`image border-4 overflow-hidden hover:scale-[1.02] transition-[1s] ${
              draggedImage === image ? "dragging" : ""
            } ${
              index === 0 ? "feature-image border-red-900" : "normal-image"
            } ${
              selectedImages.includes(image)
                ? " border-red-500"
                : "border-blue-500"
            }`}
            draggable
            onDragStart={(e) => handleDragStart(e, image)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, image)}
            onClick={() => toggleImageSelection(image)}
          >
            <img src={image.src} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-[5%]">
        {selectedImages.length > 0 && (
          <button
            onClick={deleteSelectedImages}
            className="w-[50%] rounded-lg bg-[white] text-black hover:bg-indigo-200 hover:text-slate-800  font-[700] hover:scale-[1.02] transition-[2s] py-4"
          >
            Delete Selected
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
