import VehicleService from '@/common/VehicleService';
import Form from '@/components/Form';
import AddModel from '@/components/Form';
import { runInAction,decorate, observable, makeObservable, action } from 'mobx'
import { vehicleMake } from '@/common/VehicleService';





class VehicleStore {
    makes={};
    result={
    item: []
    };
    pages=[];
    page='1';
    form='';
    searchQuery="WHERE Name LIKE '%'";
    status="initial";
    vehicleSchema;
    one={
        item:[]
    };
    sort="Name";
    all=[]

    constructor(vehicleSchema){
        this.vehicleService = new VehicleService(vehicleSchema)
        this.vehicleSchema = vehicleSchema

        makeObservable(this,{
            status: observable,
            result: observable,
            page: observable,
            form: observable,
            one: observable,
            searchQuery: observable,
            setOne: action,
            getForm: action,
            setSort: action,
            sort: observable,
            makes: observable,
            all: observable
        })
    }

    getForm=(form)=>{
        this.form = form
    }

    setSearchQuery=(query)=>{
        if (query !== 'none'){
        runInAction(()=>{
             this.searchQuery=query
            })
        }
    }

    getAll=async()=>{
        const data = await this.vehicleService.get(`?page=1`)
        const res = data.item
        const pageNum = Math.ceil(data.totalRecords/10)
        if (pageNum > 1){
            for (let i = 2; i<=pageNum; i++){
                const more = await this.vehicleService.get(`?page=${i}`)
                res.push(...more.item)
            }
            runInAction(()=>this.all=res)
        } else runInAction(()=>this.all = res)
        
    }

    toggleForm= async(id,store, one)=>{
        if(typeof id === 'string') {
           await this.getOne(`/${id}`)

            const updateForm= <Form
                                store={store} 
                                make={vehicleMakeStore}
                                id={id}
                                item={this.one}
                                one={one}
                            ></Form>
            runInAction(()=>{
                this.getForm(updateForm)
            })
        } else if (this.one && this.form){
            runInAction(()=>{
                this.setOne(undefined)
                this.getForm(<Form store={store} make={vehicleMakeStore}></Form>)
            })
        } else {
            runInAction(()=>{
                this.getForm(<Form store={store} make={vehicleMakeStore}></Form>)
            })
        }
        
        
    }

    setSort(sort){
        runInAction(()=>this.sort = sort)
    }

    setPage(num){
        if (num){
      runInAction(()=>this.page = `${num}`)
        } else return
    }

    getPagesArray=()=>{
        let pagesArr = [];
        const pageNum =this.result.totalRecords
        for (let i = 1; i<=Math.ceil(pageNum/10); i++){
            pagesArr.push(i)
        }
        return pagesArr
    }
    getMake= async()=>{
       const makes = await Promise.all( this.result.item.map(async (item)=>{
       const make =await vehicleMake.get(`/${item.makeId}`)
       return make
        }))
        runInAction(()=>{this.makes = makes})

    }
    getAsync= async()=>{
        var params = {
             page: this.page,
             searchQuery: this.searchQuery,
             sort: this.sort,
         };
        const urlParams = new URLSearchParams(Object.entries(params));
        const data = await this.vehicleService.get(`?${urlParams}`)
        
        runInAction(()=>{
            this.result = data;
            if (this.result.totalRecords) {
              this.pages =  this.getPagesArray()
            } 
        })
        if (this.vehicleSchema === 'vehicleModel') this.getMake()
    
    }
    setOne=(data)=>{
        this.one = data
    }
    getOne= async(params)=>{
         
       const response = await this.vehicleService.get(params)

                runInAction(() => {
                    this.setOne(response)
                })
    
    }
        
    createAsync = async (make) => {
        try {
            const response = await this.vehicleService.post(make);
            if (response.status === 201) {
                runInAction(() => {
                    this.status = "success";
                })
            } 
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }

    };
    updateAsync = async (make, id) => {
    try {
        const response = await this.vehicleService.put(make, id)
        if (response.status === 200) {
            runInAction(() => {
                this.status = "success";
            })
        } 
    } catch (error) {
        runInAction(() => {
            this.status = "error";
        });
    }
    };
    deleteAsync = async (id) => {
        try {
            const response = await this.vehicleService.delete(id);
            if (response.status === 204) {
                runInAction(() => {
                    this.status = "success";
                })
            } 
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }



}

const vehicleMakeStore = new VehicleStore('vehicleMake')
const vehicleModelStore = new VehicleStore('vehicleModel')
export {vehicleMakeStore, vehicleModelStore}
export default VehicleStore
