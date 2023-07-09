import { useEffect, useState } from "react";
import VehicleService from "../common/VehicleService";
import { observer } from "mobx-react";

const SelectMake=observer((props)=> {
    const vehicleService = new VehicleService('vehicleMake')
    const [make,setMake]= useState();

    const onFilter=async(e)=>{
        if (props.role==='filter') {
        if (e.target.value === '') {props.store.setSearchQuery(`WHERE makeId LIKE '%'`)}
       else props.store.setSearchQuery(`WHERE makeId ='${e.target.value}'`)
        } else return

    }
    useEffect(()=>{
       let arr=[];
        vehicleService.get('?page=1')
                      .then((data)=>{
                        arr.push(...data.item)
                        for (let i = 2; i<=Math.ceil(data.totalRecords/10); i++){
                            vehicleService.get(`?page=${i}`).then((data)=>{
                                arr.push(...data.item)
                            })
                        }
                        setMake([{id:'none',Name:''},...arr])
                      })

    },[])
    if (!make) return <>Loading...</>


    return (
        <label htmlFor="makeId" > {props.role === 'filter'?'filter by manufacturer:': 'Manufacturer:'}
            <select id="makeId" name="makeId" onChange={onFilter}  defaultValue={props.id?props.id:make[0].id} required={props.role === 'filter'?false:true}>
                {make.map((item) => {
                    return <option key={item.id} value={item.id} >{item.Name}</option>
                })}
            </select>
        </label>
    )
    
})

export default SelectMake