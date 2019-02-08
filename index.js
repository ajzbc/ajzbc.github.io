console.log("hello curious person");

var url = 'list.json'
fetch(url).then(response => {
    return response.json();
}).then(data => {
 
    var projects = document.getElementById("projects");
    var pointless = document.getElementById("pointless");

    for(i in data.projects) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = data.projects[i].link;
        a.target = "_blank";
        a.innerHTML = data.projects[i].name;
        var span = document.createElement("span");
        span.innerHTML = " " + data.projects[i].description;
        li.appendChild(a);
        li.appendChild(span);

        projects.appendChild(li);
    }

    for(i in data.pointless) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = data.pointless[i].link;
        a.target = "_blank";
        a.innerHTML = data.pointless[i].name;
        var span = document.createElement("span");
        span.innerHTML = " " + data.pointless[i].description;
        li.appendChild(a);
        li.appendChild(span);

        pointless.appendChild(li);
    }

}).catch(err => {
    console.log(err);
});