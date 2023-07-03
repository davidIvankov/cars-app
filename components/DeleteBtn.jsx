import { observer } from "mobx-react-lite"


const DeleteBtn=observer((props)=>{
 function onDelete(){
        props.store.deleteAsync(props.obj.id)
    }
    return <button onClick={onDelete}></button>

})

export default DeleteBtn