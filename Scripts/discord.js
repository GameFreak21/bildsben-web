window.onload = function sendMessage() {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/828996349579100191/pZvm9ponJbsba26FrJsnzhfJjCp_XaeDIvJ1VQZsJDi8h7uM1TvBawa2PnVmbI-AU_cF");
  request.setRequestHeader('Content-type', 'application/json');
  var params = {"content":"Someone just visited your website!","embeds":null,"username":"bildsben.tech","avatar_url":"https://bildsben.tech/favicon/android-chrome-512x512.png"}
  request.send(JSON.stringify(params));
}