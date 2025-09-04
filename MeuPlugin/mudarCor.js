(function($){

    $.fn.mudarCor = function(cor){

        this.each(function(){

            $(this).css('color', cor);
            $(this).css('text-decoration', 'none');

            $(this).hover(function(){
                $(this).css('background-color', '#ff0000ff');
            }, function(){
                $(this).css('background-color', '#ffffffff')
            });

        })

        return this;
  }

}(jQuery));