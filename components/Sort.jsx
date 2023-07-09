import { observer } from "mobx-react"
import SelectMake from "./selectMake"

    const Sort = observer(({store})=>{
        const onSelect = async(e)=>{
            store.setSort(e.target.value)
        
        }

    if (store.vehicleSchema === 'vehicleModel'){
        return(
            <div>
                <p>Sort by:</p>
                <fieldset>
                    <label htmlFor="sort_model" name='sort'>model(alphabeticly)</label>
                    <input id="sort_model" type="radio" name='sort' value='Name' onClick={onSelect} defaultChecked></input>
                    <label htmlFor="sort_make">manufacturer(alphabeticly)</label>
                    <input id="sort_make" type="radio" name='sort' value='makeId' onClick={onSelect}></input>
                </fieldset>
                <SelectMake role='filter' store={store}></SelectMake>
            </div>)
    }        
    else return
})

export default Sort