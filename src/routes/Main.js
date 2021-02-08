import React, {useState, useEffect} from "react"
import Axios from "axios";
import Music from "../components/Music_list";
import Sort from "../components/Sort";
import Search from "../components/Search";

function Main() {
    const [loading, setLoading] = useState(true)
    const [basicList, setBasicList] = useState([])
    const [musicList, setMusicList] = useState([])
    const [musicSort, setMusicSort] = useState(null)
    const [searchText, setSearchText] = useState("")
    
    const getMusic = async() => {
        const {data:{feed:{entry}}} = await Axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
        setLoading(false)
        setMusicList(entry)
        setBasicList(entry)
    }

    const sortMusic = (sort) => {
        setMusicSort(sort)
        if(sort == "name") {
            setMusicList(basicList.sort((a,b)=>{if(b["im:name"].label > a["im:name"].label) return -1 }))
        }else if(sort == "release") {
            setMusicList(basicList.sort((a,b)=>{if(b["im:releaseDate"].label < a["im:releaseDate"].label) return -1}))
        }else{
            setMusicList(basicList.sort((a,b)=>{return b["im:itemCount"].label - a["im:itemCount"].label}))
        }
    }

    const descendingMusic = (sort) => {
        setMusicSort(sort)
        setMusicList(musicList.reverse())
    }

    const searchMusic = (name) => {
        setSearchText(name)
        if(name != "") {
            const filterText = basicList.filter((element)=>{
                return element["im:name"].label.toLowerCase().replace(/ /gi, "").includes(name.toLowerCase().replace(/ /gi, ""));
            })
            setMusicList(filterText)
        }else{
            setMusicList(basicList)
        }
        
    }

    useEffect(()=>{
        getMusic()
    },[]);
    console.log(basicList)
    return(
        <div>
            {loading?
            <div>loading...</div>
            :
            <div>
                <Search searchFunc={searchMusic}/>
                <Sort sortFunc={sortMusic} descendingFunc={descendingMusic}/>
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