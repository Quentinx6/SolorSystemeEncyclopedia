document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
    .then((res) => res.json())
    .then((data)=>{
        console.log(data);
    })
})