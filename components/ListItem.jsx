import VehicleService from "../common/VehicleService";
import { useEffect, useState } from "react";
import ItemBtns from "./ItemBtns";
import { observer } from "mobx-react";

const ListItem= observer((props)=>{
    const vehicleService = new VehicleService('vehicleMake')
    if (props.model === 'vehicleModel') {
   const [make, setMake]= useState();
   useEffect(()=>{
    vehicleService.get(`/${props.item.makeId}`)
                  .then((data)=>setMake(data))
   },[props.item.makeId])
   
   if (!make) return( 
                        <li>
                            <p>{props.item.Name}</p>
                            <ItemBtns store={props.store} obj={props.item}></ItemBtns>
                        </li>
                )
    return(
            <li>
                <p>{make.Name} : {props.item.Name}</p>
                <ItemBtns store={props.store} obj={props.item}></ItemBtns>
            </li>
    )
    } else {
        return <li><p>{props.item.Name}</p><ItemBtns store={props.store} obj={props.item}></ItemBtns></li>
    }
})

export default ListItem