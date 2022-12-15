import React,{useContext} from "react";
import Image from "../components/Image";
import {getClass} from "../utils";
import { AppContext } from "../context/context";

function Photos() {

    const {allPhotos} = useContext(AppContext);
    
    const photos = allPhotos.map((photo, index) => {
        return (
            <Image 
                key={photo.id} 
                img={photo} 
                className={getClass(index)}
            />
        )
    })

    return (
        <main className="photos">
           {photos}
        </main>
    )
}

export default Photos