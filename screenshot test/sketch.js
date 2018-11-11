function genScreenshot() {
    html2canvas(document.body, {
      onrendered: function(canvas) {

        $('#test').attr('href', canvas.toDataURL("image/jpg"));
        $('#test').attr('download','This + That - Poster.jpg');
        $('#test')[0].click();
      }


    });
    }
