import { observer } from "mobx-react";
import styles from '../styles/Form.module.css'

const SelectMake=observer((props)=> {
    const make = [{Name:'any',id:''}, ...props.make.all]
    const onFilter=async(e)=>{
        if (props.role==='filter') {
        if (e.target.value === '') {props.store.setSearchQuery(`WHERE makeId LIKE '%'`)}
       else props.store.setSearchQuery(`WHERE makeId ='${e.target.value}'`)
        } else {
            props.make.getOne(`/${e.target.value}`)
        }
    }
    if (!make) return <>Loading...</>

    if (make[0]){
    return (
        <div className={styles.div}>
            <label htmlFor="makeId" className={styles.label} > 
                {props.role === 'filter'?'filter by manufacturer:': 'MANUFACTURER*'}
            </label>
                <select 
                    id="makeId" 
                    name="makeId" 
                    onChange={onFilter}  
                    defaultValue={props.id?props.id:make[0].id} 
                    required={props.role === 'filter'?false:true}
                    className={styles.input}
                >
                    {make.map((item) => {
                        return <option key={item.id} value={item.id} >{item.Name}</option>
                    })}
                </select>
        </div>
    )
                }
        
    
    
})

export default SelectMake