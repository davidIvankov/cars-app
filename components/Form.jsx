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
        const duplicates =  props.store.result.item.filter((a)=>{return a.Abv === e.target.Abv.value || a.Name === e.target.Name.value})
        
        if (props.id) {
            if (duplicates.length > 1){
            alert('Name and abbreviation have to be unique')
        } else {
            props.store.updateAsync(data, props.id)
            alert(`Updated Manufacturer:\nOld\nName: ${props.item.Name} Abv: ${props.item.Abv}\nNew\nName: ${e.target.Name.value} Abv: ${e.target.Abv.value}`)
        }
        } else {
            if (duplicates.length > 0){
            alert('Name and abbreviation have to be unique')
        } else {
            props.store.createAsync(data)
            alert(`new manufacturer was added:\nName: ${e.target.Name.value}\nAbv: ${e.target.Abv.value}`)
        }
        }
        props.store.toggleForm(undefined, props.store)
    
    }

    const onAddToModel= async(e)=>{
        e.preventDefault()
        const data = {
            makeId: e.target.makeId.value,
            Abv: e.target.Abv.value,
            Name: e.target.Name.value,
        };
        const duplicates =  props.store.result.item.filter((a)=>{return a.Abv === e.target.Abv.value || a.Name === e.target.Name.value})
    
        const newMake = props.make.one.Name
        if (props.id) { 
            if (duplicates.length > 1){
            alert('Name and abbreviation have to be unique')
        } else {
            props.store.updateAsync(data, props.id)
            alert(`Updated Model:\nOld\nManufacturer: ${props.one} Name: ${props.item.Name} Abv: ${props.item.Abv}\nNew\nManufacturer: ${newMake} Name: ${e.target.Name.value} Abv: ${e.target.Abv.value}`)
        }
        }
        else {
            if (duplicates.length > 0){
            alert('Name and abbreviation have to be unique')
        } else {
            props.store.createAsync(data)
            alert(`new Model was added:\nManufacturer: ${newMake} Name: ${e.target.Name.value} Abv: ${e.target.Abv.value}`)
        }
        }
        props.store.toggleForm(undefined, props.store)
    };

    return(
        <form onSubmit={isMake?onAddToMake:onAddToModel} className={styles.Form} >
            {isMake?'':<SelectMake id={props.item?props.item.makeId:undefined} make={props.make}></SelectMake>}
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