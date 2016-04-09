function Api(){
    var next = null;
    var api_prefix = "http://pokeapi.co"

    var callApi = function(url, success){
        $.getJSON(api_prefix + url, success);
    }
    
    return {
        GetNextPokemons : function(limit, success){
            var url;
            if (next){
                url = next;
            } else {
                url = '/api/v1/pokemon?limit=' + limit;
            }
            
            callApi(url, function(data){
                var pokemons = [];
                next = data.meta.next;
                
                data.objects.forEach(function(val){
                    var pokemon = {
                        id: val.pkdx_id,
                        pic_url: 'http://pokeapi.co/media/img/' + val.pkdx_id +'.png',
                        details: val.resourse_uri,
                        name: val.name,
                        types: val.types
                    }
                    pokemons.push(pokemon);
                });
                
                success(pokemons);
            });
        },
        GetDetails: function(id, success){
            callApi('/api/v1/pokemon/' + id, function(val){ 
                var res = {
                    type: val.types[0].name,
                    pic_url: 'http://pokeapi.co/media/img/' + val.pkdx_id +'.png',
                    name: val.name,
                    attack: val.attack,
                    defense: val.defense,
                    hp: val.hp,
                    sp_attack: val.sp_atk,
                    sp_deffense: val.sp_def,
                    speed: val.speed,
                    weight: val.weight,
                    total_moves: val.moves.length
                };
                success(res);
            });
        }
    }
}