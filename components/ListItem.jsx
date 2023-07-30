
import ItemBtns from "./ItemBtns";
import { observer } from "mobx-react";
import styles from '../styles/List.module.css'
import { vehicleMakeStore, vehicleModelStore } from "@/stores/VehicleStore";

const ListItem= observer((props)=>{   
    if (props.model === 'vehicleModel' && props.store.makes[props.index]) {
    return(
            <div className={styles.item}>
            <p>{props.store.makes[props.index].Name}</p>
            <img 
                src="https://img.freepik.com/free-psd/silver-sedan-car_53876-84522.jpg?w=740&t=st=1689350847~exp=1689351447~hmac=a7c5fe105f9b904a8945bb9c4499a7cace168e70314d6ade5cffe25f4866be1a" 
                className={styles.img}
            ></img>
            <div className={styles.texts}>
                <p className={styles.name}>{props.item.Name}</p>
                <p className={styles.abv}>{props.item.Abv}</p>
            </div>
            <ItemBtns store={props.store} obj={props.item} model={vehicleModelStore} make={vehicleMakeStore}></ItemBtns>
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
            <ItemBtns store={props.store} obj={props.item} model={vehicleModelStore}></ItemBtns>
        </div>)
    }
})

export default ListItem