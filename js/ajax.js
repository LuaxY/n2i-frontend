$(function(){
var AJAX = {
        init: function (){
            console.log('JS AJAX INIT');

            /* Manage all .xhrForm with button /!\ need class active in case of                   // multiple form in same page */
            $(document).on('submit','.xhrForm.active', function(e){
                e.preventDefault();
                if($(this).hasClass('file')){
                    AJAX.request($(this), true);
                }else{
                    AJAX.request($(this), false);
                }
            });

            /* Manage all .xhrForm with no button,
            // trigger elem with class triggerSubmit
            // and #xhrForm with class active*/
            $(document).on('click','.xhrForm.active .triggerSubmit', function(e){
                e.preventDefault();
                if($(this).hasClass('file')){
                    AJAX.request($(this).parents('form'), true);
                }else{
                    AJAX.request($(this).parents('form'), false);
                }
            });
        },
        request: function(form, file){
            var btnText;
            var processdata, contenttype = true;
            if(file){
                processdata, contenttype = false;
            }


            var formData = new FormData();
            var fileInput = document.querySelector('.fileInput');


            formData.append('file', fileInput.files[0]);
            formData.append('todo', form.find('input[name=todo]').val());
            formData.append('routing', form.find('input[name=routing]').val());

            $.ajax({
                url: 'http://127.0.0.1/urdresser/dispatcher',
                type: 'POST',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                beforeSend: function(){
                    //remove errors
                },
                success: function(response) {
                    var data = false;
                    try {
                        data = $.parseJSON(response);
                    }catch (e){}
                    if(data){
                        console.log(data);
                        setTimeout(function(){
                            /*objet de retour*/
                            /*
                            * JSON : type -> success, error...
                                     msg -> html ou message d'erreur
                                     field -> champ a remplir ou modifier
                            */
                            $.each(data, function(index, message){
                                if(message.type == 'error'){
                                    $('.formError').html(message.msg).fadeIn(1000);
                                    console.log(message.msg);
                                    if(message.field){
                                        //get error field and add class error on it
                                        $('input[name='+message.field+'], select[name='+message.field+']').addClass('error').parent('.outer-select').addClass('error');
                                    }
                                }
                                if(message.type == 'redirect'){
                                    //update body
                                    $(message.field).fadeOut(150, function(){
                                        $(this).html(message.msg);
                                        $(this).fadeIn(500);
                                    });
                                }
                                /*
                                if(message.type == 'logout'){
                                    window.location = message.msg;
                                }*/
                                setTimeout(function(){
                                    $('.formbutton').removeClass('loading').html(btnText);
                                },150);

                            });
                        },1000);
                    }
                }
            });
        }
    }
    return AJAX.init();
});
