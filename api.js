class API{
    static getAll(){
        return new Promise(function(resolve,reject){
            xml.open('get','https://dummyjson.com/products');

            xml.onreadystatechange = function(){
                if(xml.readyState === 4 && xml.status===200){
                    resolve(JSON.parse(xml.responseText).products);
                }
            }
            xml.send();
        })



    }

    static getOne(id){
        return new Promise(function(resolve,reject){
            xml.open('get','https://dummyjson.com/products/'+id);

            xml.onreadystatechange = function(){
                if(xml.readyState === 4 && xml.status===200){
                    resolve(JSON.parse(xml.responseText));
            
                   
                }
            }
            
            xml.send();
        })
        
       
        

    }


}