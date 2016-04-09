function Html(){
    
    var types = {
        fire: "btn-danger",
        water: "btn-primary",
        flying: "btn-info",
        bug: "btn-success",
        electric: "btn-warning"
    }
    
    var selectButtonClass = function(typeName){
        var className = types[typeName];
        
        if(className === undefined){
            className = "btn-default";
        }
        
        return className;
    }
    
    var getButtonElement = function(name){
        var btn_class = selectButtonClass(name);
        return '<button type="button" class="btn ' + btn_class + '">' + name + '</button>'
    }
    
    return {
        Pokemon: function(data){
            var types = [];
            data.types.forEach(function(elem){
                var btn_text = getButtonElement(elem.name);
                types.push(btn_text);
            });
            
            return $([
                '<div class="col-xs-6 col-md-4">',
                    '<div class="pokemon" id="'+ data.id+'" >',
                        '<img class="pokemon_img" src="'+data.pic_url+'" height="120" width="120"/>',
                        '<br/>',
                        '<label class="pokemon_name">'+data.name+'</label>',
                        '<div class="pokemon_types">',
                            types.join(''),
                        '</div>',
                    '</div>',
                '</div>'
            ].join(''));
        },
        Details:function(data){
            return $([
                '<div class="details col-md-6 col-xs-12 ">',
                    '<img class="pokemon_details_img" src="'+data.pic_url+'" height="120" width="120"/>',
                    '<br/>',
                    '<label class="pokemon_details_name">'+data.name+'</label>',
                    '<table class="table table-bordered pokemon_details_table">',
                        '<tr><td>Type</td><td>'+data.type +'</td></tr>',
                        '<tr><td>Attack</td><td>'+ data.attack +'</td></tr>' ,   
                        '<tr><td>Defense</td><td>'+ data.defense +'</td></tr>',    
                        '<tr><td>HP</td><td>'+ data.hp +'</td></tr>',    
                        '<tr><td>SP Attack</td><td>'+ data.sp_attack +'</td></tr>',    
                        '<tr><td>SP Defense</td><td>'+ data.sp_deffense +'</td></tr>',    
                        '<tr><td>Speed</td><td>'+ data.speed +'</td></tr>',    
                        '<tr><td>Weight</td><td>'+ data.weight +'</td></tr>',   
                        '<tr><td>Total Moves</td><td>'+ data.total_moves +'</td></tr>',    
                    '</table>',
                '</div>'
            ].join(''))    
        }
    }
};
