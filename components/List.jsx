import { observer } from "mobx-react"
import ListItem from "./ListItem"
import Link from "next/link";
import Sort from "./Sort";
import { useEffect, useState } from "react";

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
            <Sort store={list}></Sort>
            <ol>{list.result.item.map((item)=>{
            return (<ListItem
                        item={item} 
                        key={item.id} 
                        model={props.store.vehicleSchema}
                        store={props.store}
                    ></ListItem>)
            })
            }
            </ol>
            <div>{list.pages.map((page)=>{ 
                return <Link href={{pathname:'/manufacturers/[page]',
                query:{page: page}}} passHref={true} key={page}>{page}</Link>
                })}
            </div>
            <button onClick={()=>{list.toggleForm(undefined,props.store)}}></button>
           {list.form}
        </div>
    )

})

export default List