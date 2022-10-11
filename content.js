while True {const newTitle = "Classes";

if (document.title != newTitle) {
    document.title = newTitle;
}

$('meta[name="description"]').attr("content", newDescription);

alert("Hello from your Chrome extension!")

(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/favicom.ico';
    link.rel = 'shortcut icon';
    link.href = 'https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png';
    document.getElementsByTagName('head')[0].appendChild(link);
})();

var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);};
