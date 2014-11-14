$('input[name="show"]').change(function(){
   switch ($(this).attr('value')) {
      case 'all':
         console.log('showing all');
         $('.enderOnly, .mythOnly').show();
         break;
      case 'eo':
         console.log('showing mythender only');
         $('.enderOnly').show();
         $('.mythOnly').hide();
         break;
      case 'mo':
         console.log('showing myth only');
         $('.mythOnly').show();
         $('.enderOnly').hide();
         break;
   }
});