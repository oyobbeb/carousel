var indexValue = 1;
showImg(indexValue);

function side_slide(e) {
  showImg(indexValue +=e);
}

function showImg(e){
  
    var i;
    const img = document.querySelectorAll('img');
    if(e > img.length){
        indexValue = 1
    }
    if(e < 1){
      indexValue = img.length
    }
  
    for(i = 0; i< img.length; i++){
      img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}

dots[0].addEventListener('click', function(){
  img[1].style.display ="none";
  img[3].style.display ="none";
  img[2].style.display ="none";
  img[4].style.display ="none";
  img[0].style.display ="block";
});

dots[1].addEventListener('click', function(){
  img[0].style.display ="none";
  img[3].style.display ="none";
  img[2].style.display ="none";
  img[4].style.display ="none";
  img[1].style.display ="block";
});

dots[2].addEventListener('click', function(){
  img[0].style.display ="none";
  img[3].style.display ="none";
  img[1].style.display ="none";
  img[4].style.display ="none";
  img[2].style.display ="block";
});

dots[3].addEventListener('click', function(){
  img[0].style.display ="none";
  img[1].style.display ="none";
  img[2].style.display ="none";
  img[4].style.display ="none";
  img[3].style.display ="block";
});

dots[4].addEventListener('click', function(){
  img[0].style.display ="none";
  img[1].style.display ="none";
  img[2].style.display ="none";
  img[3].style.display ="none";
  img[4].style.display ="block";
});
