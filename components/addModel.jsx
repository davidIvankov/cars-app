import { observer } from "mobx-react"
import SelectMake from "./selectMake"


const AddModel = observer((props)=>{
   const onAddToMake= async(e)=>{
        e.preventDefault()
        const data = {
            Abv: e.target.Abv.value,
            Name: e.target.Name.value,
        };
        if (props.id) props.store.updateAsync(data, props.id)
        else props.store.createAsync(data)
    }
    const onAddToModel= async(e)=>{
        e.preventDefault()
        const data = {
            makeId: e.target.makeId.value,
            Abv: e.target.Abv.value,
            Name: e.target.Name.value,
        };
        if (props.id) props.store.updateAsync(data, props.id)
        else props.store.createAsync(data)
    };
    if (props.store.vehicleSchema === 'vehicleMake'){
        return(
            <form onSubmit={onAddToMake}>
                <label htmlFor="Name">Name</label>
                <input id="Name" name="Name" defaultValue={props.item?props.item.Name:''}  required></input>
                <label htmlFor="Abv">Abbraviation:</label>
                <input id="Abv"  name="Abv" defaultValue={props.item?props.item.Abv:''}  required></input>
                <button type="submit">Add</button>
            </form>
        )
    } else {
        return(
           <form onSubmit={onAddToModel}>
                <SelectMake id={props.item?props.item.makeId:undefined}></SelectMake>
                <label htmlFor="Name">Model:</label>
                <input id="Name" name="Name" defaultValue={props.item?props.item.Name:undefined} required></input>
                <label htmlFor="Abv">Abv:</label>
                <input id="Abv"  name="Abv" defaultValue={props.item?props.item.Abv:undefined} required></input>
                <button type="submit">Add Car</button>
            </form>
        )
    }

})

export default AddModel