Blockly.Blocks['http_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("http_get");
    this.appendValueInput("URL")
        .setCheck("String")
        .appendField("URL");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("perform http get request");
 this.setHelpUrl("");
  }
};