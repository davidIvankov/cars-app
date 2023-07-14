import VehicleService from "../common/VehicleService";
import { useEffect, useState } from "react";
import ItemBtns from "./ItemBtns";
import { observer } from "mobx-react";
import styles from '../styles/List.module.css'

const ListItem= observer((props)=>{
    const vehicleService = new VehicleService('vehicleMake')
    if (props.model === 'vehicleModel') {
   const [make, setMake]= useState();
   useEffect(()=>{
    vehicleService.get(`/${props.item.makeId}`)
                  .then((data)=>setMake(data))
   },[props.item.makeId])
   
   if (!make) return( 
                        <div className={styles.item}>
                            <div className={styles.texts}>
                                <p className={styles.name}>{props.item.Name}</p>
                                <p className={styles.name}>{props.item.Abv}</p>
                            </div>
                            <ItemBtns store={props.store} obj={props.item}></ItemBtns>
                        </div>
                )
    return(
            <div className={styles.item}>
            <p>{make.Name}</p>
            <img 
                src="https://img.freepik.com/free-psd/silver-sedan-car_53876-84522.jpg?w=740&t=st=1689350847~exp=1689351447~hmac=a7c5fe105f9b904a8945bb9c4499a7cace168e70314d6ade5cffe25f4866be1a" 
                className={styles.img}
            ></img>
            <div className={styles.texts}>
                <p className={styles.name}>{props.item.Name}</p>
                <p className={styles.abv}>{props.item.Abv}</p>
            </div>
            <ItemBtns store={props.store} obj={props.item}></ItemBtns>
        </div>
    )
    } else {
        return (
        <div className={styles.item}>
            <img 
                src="https://cdn-icons-png.flaticon.com/512/1839/1839230.png" 
                className={styles.img}
            ></img>
            <div className={styles.texts}>
                <p className={styles.name}>{props.item.Name}</p>
                <p className={styles.abv}>{props.item.Abv}</p>
            </div>
            <ItemBtns store={props.store} obj={props.item}></ItemBtns>
        </div>)
    }
})

export default ListItem