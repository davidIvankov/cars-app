import { observer } from "mobx-react"

const Sort = observer((props)=>{
    return(
        <div>
            <p>Sort by:</p>
            <label htmlFor="sort_model">model(alphabeticly)</label>
            <input id="sort_model" type="radio" ></input>
            <label htmlFor="sort_make">manufacturer(alphabeticly)</label>
            <input id="sort_make" type="radio" ></input>
            <label htmlFor="sort_update">last update</label>
            <input id="sort_update" type="radio" ></input>
        </div>)

})