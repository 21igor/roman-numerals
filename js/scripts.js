
var translate = function(number) {
  var values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var result = "";
  var remainder = number;

  values.forEach(function(value){
    var count = parseInt(remainder/value);
    result = result + toRoman(value,count);
    remainder = remainder%value;
  });

  return result;
}

var toRoman = function (value,count) {
  var values = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],
              [90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
  var roman = "";

  values.forEach(function(V,index) {
    for (var i = 0; i < count; i++) {
      if(value === V[0]){
        roman = roman + V[1];
      }
    }
  });

  return roman;
}

//Front end logic
$(function(){
  $("form#roman-numerals").submit(function(event) {
    event.preventDefault();
    var decNumber = parseInt($("input#dec-number").val());

    if (decNumber > 3999 || decNumber < 0) {
      alert("PLease enter a number between 0 and 3999");
    }else {
      $("#result").text(translate(decNumber));
    }
  });
});
