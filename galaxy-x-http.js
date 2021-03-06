function galaxyX_HTTP(){
    this.http = new XMLHttpRequest()
}

// Make an HTTP GET request
galaxyX_HTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true)

    let self = this
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, self.http.responseText)
        }else{
            callback('Error: ' + self.http.status)
        }
    }

    this.http.send()
}

// Make an HTTP POST request
galaxyX_HTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')

    let self = this
    this.http.onload = function(){
        callback(null, self.http.responseText)
    }

    this.http.send(JSON.stringify(data))
}

// Make an HTTP PUT request
galaxyX_HTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')

    let self = this
    this.http.onload = function(){
        callback(null, self.http.responseText)
    }

    this.http.send(JSON.stringify(data))
}

// Make an HTTP DELETE request
galaxyX_HTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true)

    let self = this
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, 'Deleted')
        }else{
            callback('Error: ' + self.http.status)
        }
    }

    this.http.send()
}
