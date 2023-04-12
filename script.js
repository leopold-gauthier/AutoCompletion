const search = document.getElementById('search-bar');
const result = document.getElementById('result');
const title = document.getElementById('title');

if (search) {
    search.addEventListener("keyup", () => {

        result.innerHTML = '';
        title.style.display = "block";

        if (search.value != '') {
            title.style.display = "none";
            // console.log('recherche.php/?search=' + search.value);
            fetch('recherche.php/?search=' + search.value)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    // console.log(data);
                    data.forEach(element => {
                        let e = document.createElement('p');
                        e.innerHTML = '<a class="text-decoration-none text-white" href="element.php?id=' + element.id + '">' + element.nom;
                        result.appendChild(e);
                    });
                })
        }
    })
}



const link = window.location.href;
const id = link.split('='); //sa split en deux , une chaine de caractere au niveau du "="
fetch('recherche.php/?id=' + id[1])
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        data.forEach(element => {
            let e = document.createElement('p');
            e.innerHTML = 'Nom: ' + element.nom + '</br>Type: ' + element.type + '</br>Attaque: ' + element.attaque + '</br>Defense: ' + element.defense ;
            result.appendChild(e);
        });
    })

if(search.value !== ""){
    console.log("taper");

}