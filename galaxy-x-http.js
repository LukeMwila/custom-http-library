function galaxyX_HTTP(){
    this.http = new XMLHttpRequest()
}

// Make an HTTP GET request
galaxyX_HTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true)

    let self = this
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(self.http.responseText)
        }
    }

    this.http.send()
}

// Make an HTTP POST request
// Make an HTTP PUT request
// Make an HTTP DELETE request

