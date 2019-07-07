const xlsxj = require('xlsx-to-json');

xlsxj({
  input: 'SW_Historical_Data.xlsx', 
  output: "output.json"
}, function(err, result) {
  if(err) {
    console.error(err);
  }else {
    console.log(result);
  }
});