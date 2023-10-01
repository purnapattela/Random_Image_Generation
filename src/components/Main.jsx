import NavBar from "./NavBar"
import ImageList from './ImageList'
import { useState,useEffect } from "react"
import Footer from "./Footer"


const Main = () => {
  const [images,setImages] = useState([])

  useEffect(function(){
    async function getImages(){
      // const res = await fetch(`https://api.unsplash.com/photos/random?client_id=OUMOdaS2o2iPFGKfrrT3PAJS7loP6rDRzNHlTgdGeiQ&count=12`)
      // // const data = await res.json;
      // console.log(res)'
      fetch(`https://api.unsplash.com/photos/random?client_id=OUMOdaS2o2iPFGKfrrT3PAJS7loP6rDRzNHlTgdGeiQ&count=12`)
      .then(data => data.json())
      .then(res => setImages(res))
    }
    getImages()
  },[])


  return (
    <div className="min-w-full min-h-full">
      <NavBar  />
      <ImageList images={images}/>
      <Footer />
    </div>
  )
}

export default Main


// width: 1440px
// height: 1524px
// top: -860px
// left: 1523px
