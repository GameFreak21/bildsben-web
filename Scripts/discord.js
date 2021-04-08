window.onload = function sendMessage() {
  var request = new XMLHttpRequest();
  console.log("var request")
  request.open("POST", "https://discord.com/api/webhooks/828996349579100191/pZvm9ponJbsba26FrJsnzhfJjCp_XaeDIvJ1VQZsJDi8h7uM1TvBawa2PnVmbI-AU_cF");
  console.log("POSTED")
  request.setRequestHeader('Content-type', 'application/json');
  console.log("request headers done")
  var params = {"content":"Someone just visited your website!","embeds":null,"username":"bildsben.tech","avatar_url":"https://bildsben.tech/favicon/android-chrome-512x512.png"};
  console.log("params done")
  request.send(JSON.stringify(params));
  console.log("sent req")
}
