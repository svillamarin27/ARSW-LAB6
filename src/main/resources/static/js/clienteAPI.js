const Url = 'http://localhost:8080/blueprints/';
clienteAPI = (function () {
    var array = []
    return {
        getBlueprintsByAuthor: function (author, callback) {
                $.get(Url+author,function(data){
                    
                    array = data;
                });
                return callback(array)
        },

        getBlueprintsByNameAndAuthor: function (author, name, callback) {
                $.get(Url+author+"/"+name,function(data){
                    array = data;
                });
                return callback(array)
        }
    };
})();