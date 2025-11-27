let group = document.querySelector('[data-ingredientes]'),
widgets = group.querySelectorAll('details');
widgets.forEach(function(widget, index) {

  widget.addEventListener('click', function() {
    
    for (i = 0; i < widgets.length; i++) {
      
      if(i == index) continue;
      
      widgets[i].removeAttribute('open');
    }
    
  });
});


