try {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/828344611705192459/HP1Y5uRcCdKyLVpgHcCKdzLAPdoQxcqWNridWK3IRHfPzBTqU5BonnheI5pou9nA-3y-");
    request.setRequestHeader('Content-type', 'application/json');
    var CNT = `\`\`\`Access: ${new Date()} 
Page: ${window.location}\`\`\``
    var params = {
        username: "Siddhart.dev",
        avatar_url: "",
        content: CNT
    }
    request.send(JSON.stringify(params));
} catch {
    console.log("")
}