import { observer } from "mobx-react"
import SelectMake from "./selectMake"
import styles from '../styles/Form.module.css'

    const Sort = observer(({store})=>{
        const onSelect = async(e)=>{
            store.setSort(e.target.value)
        
        }

    if (store.vehicleSchema === 'vehicleModel'){
        return(
            <div className={styles.column}>
                <p className={`${styles.p} ${styles.pMain}`}>Filters</p>
                <p className={styles.p}>Sort</p>
                    <div className={styles.buttons}>
                        <input
                            label='model(alphabeticly)'
                            className={styles.none} 
                            id="sort_model" 
                            type="radio" 
                            name='sort' 
                            value='Name' 
                            onClick={onSelect} 
                            defaultChecked
                        ></input>
                        <input 
                            label='manufacturer(alphabeticly)'
                            className={styles.none}
                            id="sort_make" 
                            type="radio" 
                            name='sort' 
                            value='makeId' 
                            onClick={onSelect}
                        ></input>
                    </div>
                <SelectMake role='filter' store={store}></SelectMake>
            </div>)
    }        
    else return
})

export default Sort