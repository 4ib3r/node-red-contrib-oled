module.exports = function(RED) {
    function OledSettingsNode(n) {
        RED.nodes.createNode(this, n);
        this.width = n.width;
		this.height = n.height;
		this.device = n.device;
		this.address = n.address;
    }
    RED.nodes.registerType("oled-settings",OledSettingsNode);
    
    function OledOutNode(n) {
        RED.nodes.createNode(this, n);
        this.text = n.text;
        
    }
    RED.nodes.registerType("oled-out", OledOutNode);
}