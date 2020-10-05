$(function(){
        $('.bg-primary').click(function(){
            $('body').addClass('bg-primary text-white');
            $('body').removeClass('bg-secondary bg-info bg-dark bg-danger bg-success');
          });
         $('.bg-secondary').click(function(){
            $('body').addClass('bg-secondary text-white');
            $('body').removeClass('bg-primary bg-info bg-dark bg-danger bg-success');
          });
          $('.bg-info').click(function(){
            $('body').addClass('bg-info text-white');
            $('body').removeClass('bg-primary bg-secondary bg-dark bg-danger bg-success');
          });
          $('.bg-dark').click(function(){
            $('body').addClass('bg-dark text-white');
            $('body').removeClass('bg-primary bg-secondary bg-info bg-danger bg-success');
          });
          $('.bg-danger').click(function(){
            $('body').addClass('bg-danger text-white');
            $('body').removeClass('bg-primary bg-secondary bg-info bg-dark bg-success');
          });
          $('.bg-success').click(function(){
            $('body').addClass('bg-success text-white');
            $('body').removeClass('bg-primary bg-secondary bg-info bg-dark bg-danger');
          });

          $('.settings img').click(function(){
            $('.settings').toggleClass('move');
          })
     });