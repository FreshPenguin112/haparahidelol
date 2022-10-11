alert('hidden');
while (true) {
newTitle = "Classes";

if (document.title != newTitle) {
    document.title = newTitle;
}

$('meta[name="description"]').attr("content", newDescription);

alert("Hello from your Chrome extension!")

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}
}
changeFavicon('https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png');

var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);};
