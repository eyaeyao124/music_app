import React, {useState, useEffect} from "react"
import Axios from "axios";

function Main() {
    const [loading, setLoading] = useState(true)
    const [musicList, setMusicList] = useState([])
    
    const getMusic = async() => {
        const {data:{feed:{entry}}} = await Axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
        setLoading(false)
        setMusicList([entry])
    }

    useEffect(()=>{
       getMusic()
    },[]);

    return(
        <div>
            {loading?
                <div>loading...</div>
            :
                <div>hello!</div>
            }
        </div>
    )
}

export default Main;