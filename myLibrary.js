function algo1(o1, o2){
    if(o1.x-o2.x<o1.width/2+o2.width/2 &&
      o2.x-o1.x<o1.width/2+o2.width/2 &&
      o1.y-o2.y<o1.height/2+o2.height/2 &&
      o2.y-o1.y<o1.height/2+o2.height/2 
      ){
        return  true;
      }
      else {
        return false;
      }
      
  }

  function algo2(o1,o2){

    if(o1.x-o2.x<o1.width/2+o2.width/2 &&
      o2.x-o1.x<o2.width/2+o1.width/2 
      )
      {o1.velocityX=(-1)* o1.velocityX
        o2.velocityX=(-1)* o2.velocityX
    
    }
  }
  