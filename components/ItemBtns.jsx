import { observer } from "mobx-react-lite"
import VehicleService from "../common/VehicleService"



const ItemBtns=observer((props)=>{
    const vehicleService = new VehicleService('vehicleModel')
    const onDelete= function(){
       vehicleService.get(`?searchQuery=WHERE makeId ='${props.obj.id}'`)
            .then((models)=>{
            if(
                props.store.vehicleSchema === 'vehicleMake' &&
                models.item.length !== 0
            ){
                return alert('You can not delete that Manufacturer.\nDelete models first.')
            } else {
                props.store.deleteAsync(props.obj.id)
            } 
        })
    }

    const onToggleEdit = function(){
        props.store.toggleForm(props.obj.id,props.store)
    }

    return (
        <div>
            <button onClick={onDelete}>DELETE</button>
            <button onClick={onToggleEdit}>EDIT</button>
        </div>
    )

})

export default ItemBtns