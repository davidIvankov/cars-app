import { observer } from "mobx-react"
import ListItem from "./ListItem"
import Link from "next/link";
import Sort from "./Sort";
import { useEffect, useState } from "react";
import styles from '../styles/List.module.css'
import Form from "./Form";

const List= observer((props)=>  {
    const [list, setList]= useState()
    const getList = async()=>{
        await props.store.getAsync()
        props.store.setPage(props.page)
        setList(props.store)

    }
    useEffect(()=>{
        getList()
    })
     

      
    if (!list) return <div>Loading...</div>
    return (
        <div>
            {list.form?list.form:<Form store={props.store}></Form>}
            <div className={styles.row}>
                <div className={styles.flex}>
                    <Sort store={list}></Sort>
                </div>
            
                <div className={styles.grid}>{list.result.item.map((item)=>{
                return (<ListItem
                            item={item} 
                            key={item.id} 
                            model={props.store.vehicleSchema}
                            store={props.store}
                        ></ListItem>)
                })
                }
                </div>
            </div>
            <div className={styles.pages}>{list.pages.map((page)=>{ 
                return <Link className={styles.page} href={{pathname:'/manufacturers/[page]',
                query:{page: page}}} passHref={true} key={page}>{page}</Link>
                })}
            </div>
        </div>
    )

})

export default List