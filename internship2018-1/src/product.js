
$( document ).ready(function() {
    for(var i = 0; i < 24; i++){
        $('#productContainer').append(
            '<div class="float-sm-left">' + 
                        '<img src="./assets/products/'+ (i+1) +'.jpeg" width="350" class="d-inline-block align-top" alt="">'+
                        '<div class="row" >'+
                            '<div class="col-6">'+
                                '<h4>$5.20</h4>'+
                            '</div>'+
                            '<div class="col-6">'+
                                '<button type="button" class="btn btn-primary">Order</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>');
    }    
});
