import React, {useState, useEffect} from "react"
import Axios from "axios";
import Music from "../components/Music_list";

function Main() {
    const [loading, setLoading] = useState(true)
    const [musicList, setMusicList] = useState([])
    
    const getMusic = async() => {
        const {data:{feed:{entry}}} = await Axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
        setLoading(false)
        setMusicList(entry)
    }

    useEffect(()=>{
       getMusic()
    },[]);
    console.log(musicList)
    return(
        <div>
            {loading?
            <div>loading...</div>
            :
            <div>
                {musicList.map(music=>{
                    return <Music
                    key={music.id.attributes["im:id"]} 
                    id={music.category.attributes["im:id"]}
                    category={music.category.attributes.label}
                    artist={music["im:artist"].label}
                    name={music["im:name"].label}
                    image={music["im:image"][2].label}
                    title={music.title.label}
                    price={music["im:price"].label}
                    />
                })}
            </div>
            }
        </div>
    )
}

export default Main;