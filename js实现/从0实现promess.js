class CustomPromise {
    state = 'PENDING'
    value = undefined
    thenCallbacks = [ ]
    errorCallbacks = [ ]
    constructor(action){
        action(this.resolver.bind(this), this.reject.bind(this))
    }

    resolver(value){
        this.state = "RESOLVED"
        this.value = value
        this.thenCallbacks.forEach((callback) =>{
            callback(this.value)
        })
    }

    reject(value){
        this.state = "REJECTED"
        this.value = value
        valuethis.errorCallbacks.forEach((callback)=>{
            callback(this.value)
        })
    }

    then(callback){
        this.thenCallbacks.push(callback)
        return this
    }

    catch(callback){
        this.errorCallbacks.push(callback)
        return this
    }
}