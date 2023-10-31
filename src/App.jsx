import ImageGallery from "./components/Home/ImageGallery";

const App = () => {
  return (
    <div className="bg-slate-900/80 min-h-screen">
      <div className="bg-slate-800/80  backdrop-blur-sm sticky top-0 z-50">
        <h1 className="text-[4rem] md:text-9xl lg:text-[140px] font-bold header text-center">
          Image{" "}
          <span
            className="header-span overflow-visible"
            style={{ fontFamily: "Roboto Slab , serif" }}
          >
            Gallery
          </span>
        </h1>
      </div>
      <div className="py-[5%]">
        <ImageGallery />
      </div>
    </div>
  );
};

export default App;
