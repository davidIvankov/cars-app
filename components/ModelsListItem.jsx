
import VehicleService from "@/common/VehicleService";
import { useEffect, useState } from "react";
import { vehicleMakeStore, vehicleModelStore } from "@/stores/VehicleStore";
import DeleteBtn from "./DeleteBtn";

const ModelsListItem= (props)=>{
    const vehicleService = new VehicleService('vehicleMake')
    if (props.model === 'vehicleModel') {
   const [make, setMake]= useState();
   useEffect(()=>{
    vehicleService.get(`/${props.item.makeId}`)
                  .then((data)=>setMake(data))
   },[])
   
   if (!make) return( 
                        <li>
                            <p>{props.item.Name}</p>
                            <DeleteBtn store={vehicleMakeStore}></DeleteBtn>
                        </li>
                )
    return(
            <li>
                <p>{make.Name} : {props.item.Name}</p>
                <DeleteBtn store={vehicleModelStore}></DeleteBtn>
            </li>
    )
    } else {
        return <li><p>{props.item.Name}</p></li>
    }
}

export default ModelsListItem