
function Sort({sortFunc, descendingFunc}) {
    return (
        <div>
            <div>
                 <label for="descending"> 낮은순
                     <input id="descending" type="checkbox" value="down" onChange={(e)=>descendingFunc(e.target.checked)}/>
                 </label>
            </div>
            <div>
                <button value="name" onClick={(e)=>sortFunc(e.target.value)}>이름</button>
                <button value="release" onClick={(e)=>sortFunc(e.target.value)}>출시일</button>
                <button value="rank" onClick={(e)=>sortFunc(e.target.value)}>순위</button> 
            </div>
        </div>
    )
}

export default Sort;