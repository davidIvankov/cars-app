import { observer } from "mobx-react"
import ListItem from "./ListItem"
import Link from "next/link";
import Sort from "./Sort";
import { useEffect } from "react";
import styles from '../styles/List.module.css'
import Form from "./Form";


const List= observer((props)=>  {
    
    const getList = async()=>{
        await props.store.getAsync()
        props.store.setPage(props.page)

    }
    const getSelect= async()=>{
        props.make.getAll()
    }
    useEffect(()=>{
        getList()
    },[props.store.status, props.store.result])
    if (props.make){
        useEffect(()=>{
            getSelect()
        },[props.make.all,props.make.status])
    }

      
    if (!props.store) return <div>Loading...</div>
    return (
        <div>
            {props.store.form?props.store.form:<Form store={props.store} make={props.make}></Form>}
            <div className={styles.row}>
                <div className={styles.flex}>
                    <Sort store={props.store} make={props.make}></Sort>
                </div>
            
                <div className={styles.grid}>{props.store.result.item.map((item, index)=>{
                return (<ListItem
                            index={index}
                            item={item} 
                            key={item.id} 
                            model={props.store.vehicleSchema}
                            store={props.store}
                        ></ListItem>)
                })
                }
                </div>
            </div>
            <div className={styles.pages}>{props.store.pages.map((page)=>{ 
                return <Link className={styles.page} href={{pathname:'/manufacturers/[page]',
                query:{page: page}}} passHref={true} key={page}>{page}</Link>
                })}
            </div>
        </div>
    )

})

export default List