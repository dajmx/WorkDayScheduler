$(document).ready(function () {

  
    
    $(function () {
      
      $('.saveBtn').on('click', function (event) {
        event.preventDefault();
        
        var textarea = $(this).siblings('.description');
        
        
        var text = textarea.val();
        
       
        var timeBlockId = textarea.closest('.time-block').attr('id');
        
     
        localStorage.setItem(timeBlockId, text);
      });
    
      $('.time-block').each(function () {
        var timeBlockId = $(this).attr('id');
        
        var savedText = localStorage.getItem(timeBlockId);
        
        if (savedText) {
          $(this).find('.description').val(savedText);
        }
      });

      function displayCurrentHour() {
        $('.hour').each(function () {
          var hourValue = parseInt($(this).find('span').text()); 
          var currentHour = dayjs().hour(); 
      
          var $timeBlock = $(this).closest('.time-block'); 
      
        
          if (hourValue === currentHour) {
            $timeBlock.addClass('present').removeClass('past future');
          } else if (hourValue < currentHour) {
            $timeBlock.addClass('past').removeClass('present future');
          } else {
            $timeBlock.addClass('future').removeClass('present past');
          }
        });
      }
      
      displayCurrentHour();
      
      
    
    
    });
    
  


  var gradDate = dayjs('2023-06-15').format('MMM D, YYYY');
$('#currentDay').text(gradDate);
});