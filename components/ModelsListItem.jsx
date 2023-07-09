import VehicleService from "../common/VehicleService";
import { useEffect, useState } from "react";

import DeleteBtn from "./DeleteBtn";
import { observer } from "mobx-react";

const ModelsListItem= observer((props)=>{
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
                            <DeleteBtn store={props.store} obj={props.item}></DeleteBtn>
                        </li>
                )
    return(
            <li>
                <p>{make.Name} : {props.item.Name}</p>
                <DeleteBtn store={props.store} obj={props.item}></DeleteBtn>
            </li>
    )
    } else {
        return <li><p>{props.item.Name}</p><DeleteBtn store={props.store} obj={props.item}></DeleteBtn></li>
    }
})

export default ModelsListItem