Blockly.JavaScript['http_get'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'var oReq = new XMLHttpRequest();\n oReq.open("GET", ' + value_url + ');\n oReq.send();\n';
  //console.log(code);
  return code;
};
