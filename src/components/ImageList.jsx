/* eslint-disable react/prop-types */

const ImageList = ({images}) => {
    return (
      <div className="flex flex-wrap flex-grow gap-10 mt-5 justify-around ">
        {images.map((i) => (
          <Image key={i.id} image={i}/>
        ))}
      </div>
    )
  }
  
  
  function Image({image}) {
    return (
      <div>
          <img className="w-[250px] h-[250px]" src={image.urls.full} alt={image.alt_description} />
          <button className="border-2 flex justify-center align-middle bg-black text-white"><a rel="noreferrer" target="_blank" href={image.links.download}>Download</a></button>
      </div>
      
    )
  }
  
  
  export default ImageList