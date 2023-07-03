import { observer } from "mobx-react"
import { vehicleMakeStore } from "@/stores/VehicleStore"
import SelectMake from "./selectMake"

const AddModel = observer(({store})=>{

   const onAddToMake= async(e)=>{
     e.preventDefault()
    const data = {
      Abv: e.target.Abv.value,
      Name: e.target.Name.value,
    };
    store.createAsync(data)
    }
    const onAddToModel= async(e)=>{
        e.preventDefault()
        const data = {
            makeId: e.target.makeId.value,
            Abv: e.target.Abv.value,
            Name: e.target.Name.value,
        };

        store.createAsync(data)
    };
    if (store.vehicleSchema === 'vehicleMake'){
    return (<form 
        onSubmit={onAddToMake}
    >
        <label htmlFor="Name">Name</label>
        <input id="Name" name="Name"></input>
        <label htmlFor="Abv">Abbraviation:</label>
        <input id="Abv"  name="Abv"></input>
        <button type="submit">Add</button>
    </form>)
    } else {
    return (<form 
           onSubmit={onAddToModel}
           >
        <SelectMake store={vehicleMakeStore}></SelectMake>
        <label htmlFor="Name">Model:</label>
        <input id="Name" name="Name"></input>
        <label htmlFor="Abv">Abv:</label>
        <input id="Abv"  name="Abv"></input>
        <button type="submit">Add Car</button>
    </form>
    )
    }

})

export default AddModel