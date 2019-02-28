var url = 'list.json'
fetch(url).then(response => {
    return response.json();
}).then(data => {
 
    var main  = document.getElementsByTagName("main");

    for(i in data) {
    
        var section = document.createElement("div");
        section.className = "section";

        var title = document.createElement("a");
        title.className = "title"
        title.textContent = data[i].name;
        title.href = data[i].link;

        var description = document.createElement("p");
        description.className = "description";
        description.textContent = data[i].description;

        section.appendChild(title);
        section.appendChild(description);
        main[0].appendChild(section);

    }

}).catch(err => {
    console.log(err);
});





{/* <div class="section">
    <a class="title">Hello World</a>
    <p class="description">yes this project with a long title</p>
</div> */}