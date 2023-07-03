import { useEffect, useState } from "react";
import VehicleService from "@/common/VehicleService";

const SelectMake=(props)=> {
    const vehicleService = new VehicleService('vehicleMake')
    const [make, setMake]= useState();
    useEffect(()=>{
       let arr=[];
        vehicleService.get('?page=1')
                      .then((data)=>{
                        arr.push(...data.item)
                        for (let i = 2; i<=Math.ceil(data.totalRecords/10); i++){
                            vehicleService.get(`?page=${i}`).then((data)=>{
                                arr.push(...data.item)
                                setMake(arr)
                            })
                        }
                      })

    },[])

    if (!make) return <>Loading...</>
    return (
        <label htmlFor="makeId">Manufacturer:
            <select id="makeId" name="makeId">
                {make.map((item) => {
                    return <option key={item.id} value={item.id}>{item.Name}</option>
                })}
            </select>
        </label>
    )
    
}

export default SelectMake