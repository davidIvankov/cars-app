import { observer } from "mobx-react-lite"
import styles from '../styles/List.module.css'

const ItemBtns=observer((props)=>{
    const onDelete= async()=>{
        props.model.setSearchQuery(`WHERE makeId ='${props.obj.id}'`)
        await props.model.getAsync()
        const models = await props.model.result
            
                console.log(models)
            if(
                props.store.vehicleSchema === 'vehicleMake' &&
                models.item.length !== 0
            ){
                props.model.setSearchQuery("WHERE Name LIKE '%'")
                return alert('You can not delete that Manufacturer.\nDelete models first.')
            } else {
                props.store.deleteAsync(props.obj.id)
                props.model.setSearchQuery("WHERE Name LIKE '%'")
                props.store.toggleForm(undefined,props.store)
            } 
    }

    const onToggleEdit = async()=>{
        if (props.obj.makeId){ await props.make.getOne(`/${props.obj.makeId}`);
        const one = props.make.one.Name
        props.store.toggleForm(props.obj.id,props.store, one)
    } else props.store.toggleForm(props.obj.id,props.store)
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    }

    return (
        <div className={styles.btns}>
            <button className={styles.delete} onClick={onDelete}>DELETE</button>
            <button className={styles.update} onClick={onToggleEdit}>EDIT</button>
        </div>
    )

})

export default ItemBtns