(function(){
    var api = new Api();
    var html = new Html();
    
    function next(){
        api.GetNextPokemons(12, function(data){
            var container = $('.main-container');

            data.forEach(function(val){
                var elem = new html.Pokemon(val);
                $(container).append(elem);
                setClick(elem.children('.pokemon'));
            })    
        });  
        
    }
    next();
    
    function setClick(elem){
        elem.click(function(){
            api.GetDetails(this.id, function(data){
                var cont = $('.details-container');
                cont.empty();
                
                var elem = html.Details(data);
                cont.append(elem);
                
                var t = 1;
            });
        });
    }
    
    $('.next-button').click(function(){
        next();
    });
})();