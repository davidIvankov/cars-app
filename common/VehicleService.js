import { flow } from "mobx";

const webApiUrl = "https://api.baasic.com/beta/mono-fe-test/resources";



export default class VehicleService {

    constructor(schemaName){
        this.schemaName = schemaName

    }
    
    get = flow(function*(urlParams){
        const options = {
            method: "GET",
        }
     const response = yield fetch(`${webApiUrl}/${this.schemaName}${urlParams}`, options);
     const data = yield response.json();

     return data
    })
    post = flow(function*(item){
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify(item)
        }
        const request = new Request(`${webApiUrl}/${this.schemaName}`, options);
        const response = yield fetch(request);
        return response;
    })
    put = async (item) => {
        const headers = new Headers()
        headers.append("Content-Type", "application/json");
        var options = {
            method: "PUT",
            headers,
            body: JSON.stringify(item)
        }
        const request = new Request(`${webApiUrl}/${this.schemaName}`, options);
        const response = await fetch(request);
        return response;
    }
    delete = async (id) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const options = {
            method: "DELETE",
            headers
        }
        const request = new Request(`${webApiUrl}/${this.schemaName}?${id}`, options);
        const response = await fetch(request);
        return response;
    }
}


