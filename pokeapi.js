let num = 384;

var data = new XMLHttpRequest(); //step 1

data.onload = function(){//step 2
  if (this.status === 200){

    try {
      const resObj = JSON.parse(this.responseText)
      console.log(resObj);
    } catch (e) {
      console.warn("COULD NOT PARSE");
    }



  }else{
    console.warn("404 not found!");
  }

}
data.open('get', `https://fizal.me/pokeapi/api/v2/id/${num}.json`); //step 3
data.send();//step 4
