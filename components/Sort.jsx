import { observer } from "mobx-react"
import SelectMake from "./selectMake"
import styles from '../styles/Form.module.css'
import { vehicleMakeStore } from "@/stores/VehicleStore"

    const Sort = observer((props)=>{
        const onSelect = async(e)=>{
            props.store.setSort(e.target.value)
        }

    if (props.store.vehicleSchema === 'vehicleModel'){
        return(
            <div className={styles.column}>
                <p className={`${styles.p} ${styles.pMain}`}>Filters</p>
                <p className={styles.p}>Sort</p>
                    <div className={styles.buttons}>
                        <input
                            label='alphabeticly'
                            className={styles.none} 
                            id="sort_model" 
                            type="radio" 
                            name='sort' 
                            value='Name' 
                            onClick={onSelect} 
                            defaultChecked
                        ></input>
                        <input 
                            label='reverse alphabetical'
                            className={styles.none}
                            id="sort_make" 
                            type="radio" 
                            name='sort' 
                            value='Name|desc' 
                            onClick={onSelect}
                        ></input>
                    </div>
                <SelectMake role='filter' store={props.store} make={vehicleMakeStore}></SelectMake>
            </div>)
    }        
    else return
})

export default Sort