import { observer } from "mobx-react"
import SelectMake from "./selectMake"
import styles from '../styles/Form.module.css'


const Form = observer((props)=>{
   const isMake = props.store.vehicleSchema === 'vehicleMake'
   const onAddToMake= async(e)=>{
        e.preventDefault()
        const data = {
            Abv: e.target.Abv.value,
            Name: e.target.Name.value,
        };
        if (props.id) props.store.updateAsync(data, props.id)
        else props.store.createAsync(data)
    }
    const onAddToModel= async(e)=>{
        e.preventDefault()
        const data = {
            makeId: e.target.makeId.value,
            Abv: e.target.Abv.value,
            Name: e.target.Name.value,
        };
        if (props.id) props.store.updateAsync(data, props.id)
        else props.store.createAsync(data)
    };

    return(
        <form onSubmit={isMake?onAddToMake:onAddToModel} className={styles.Form} >
            {isMake?'':<SelectMake id={props.item?props.item.makeId:undefined}></SelectMake>}
            <div className={styles.div}>
                <label htmlFor="Name" className={styles.label}>NAME*</label>
                <input 
                    id="Name" 
                    name="Name" 
                    defaultValue={props.item?props.item.Name:''}  
                    required
                    className={styles.input}
                    placeholder="any"
                ></input>
            </div>
            <div className={styles.div}>
                <label htmlFor="Abv" className={styles.label}>ABBREVIATION*</label>
                <input 
                    id="Abv"  
                    name="Abv" 
                    defaultValue={props.item?props.item.Abv:''} 
                    className={styles.input} 
                    placeholder="any"
                    required
                ></input>
            </div>
            <div className={styles.btns}>
                <button className={styles.btn} type="submit">{props.id?'UPDATE':'ADD'}</button>
                <button 
                    className={styles.newBtn} 
                    onClick={()=>props.store.toggleForm(undefined,props.store)}
                    style={{visibility: props.id?'visible':'hidden'}}
                >ADD NEW?</button>
            </div>
        </form>
    )

})

export default Form