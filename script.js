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
                    data.forEach(element => {
                        let e = document.createElement('p');
                        e.innerHTML = '<a class="text-decoration-none text-white" href="element.php?id=' + element.id + '">' + element.name;
                        result.appendChild(e);
                    });
                })
        }
    })
}


// Génération de la page pokédex pour tout les pokémons
const id_i = document.getElementById('id');
const name = document.getElementById('name');
const type = document.getElementById('type');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const hp = document.getElementById('hp');
const speed_atk = document.getElementById('speed_atk');
const speed_def = document.getElementById('speed_def');
const speed = document.getElementById('speed');
const total = document.getElementById('total');
const generation = document.getElementById('generation');
const legendary = document.getElementById('legendary');
const img = document.getElementById('img');




const link = window.location.href;
const id = link.split('='); //sa split en deux , une chaine de caractere au niveau du "="
fetch('recherche.php/?id=' + id[1])
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(element => {
            console.log(element);
            let id_i_p = document.createElement('p');
            let name_p = document.createElement('p');
            let type_p = document.createElement('p');
            let attack_p = document.createElement('p');
            let defense_p = document.createElement('p');
            let hp_p = document.createElement('p');
            let speed_atk_p = document.createElement('p');
            let speed_def_p = document.createElement('p');
            let speed_p = document.createElement('p');
            let total_p = document.createElement('p');
            let generation_p = document.createElement('p');
            let legendary_p = document.createElement('p');

            // Index pokémon
            id_i_p.innerHTML = 'Index : ' + element.id;
            id_i.appendChild(id_i_p);

            // Nom
            name_p.innerHTML = element.Name;
            name.appendChild(name_p);

            // Type
            type_p.innerHTML = 'Type: ' + element.Type_1 + " / " ;
            type.appendChild(type_p);
            if(element.Type_2 != null){
                type_p.innerHTML += element.Type_2;
            }else{
                type_p.innerHTML += "--";
            }

            // Attack
            attack_p.innerHTML = 'Attack: ' + element.Attack;
            attack.appendChild(attack_p);

            // Defense
            defense_p.innerHTML = 'Defense: ' + element.Defense;
            defense.appendChild(defense_p);

            // HP
            hp_p.innerHTML = 'HP: ' + element.HP;
            hp.appendChild(hp_p);

            // Speed_atk
            speed_atk_p.innerHTML = 'Sp_ATK: ' + element.Sp_Atk;
            speed_atk.appendChild(speed_atk_p);

            // Speed_def
            speed_def_p.innerHTML = 'Sp_DEF: ' + element.Sp_Def;
            speed_def.appendChild(speed_def_p);

            // Speed
            speed_p.innerHTML = 'Speed: ' + element.Speed;
            speed.appendChild(speed_p);

            // Total
            total_p.innerHTML = 'Total: ' + element.Total;
            total.appendChild(total_p);

            // Generation
            generation_p.innerHTML = 'Génération: ' + element.Generation;
            generation.appendChild(generation_p);

            // Legendary
            legendary_p.innerHTML = 'Legendary: ' + element.Legendary ;
            legendary.appendChild(legendary_p);

            // Img
            img.innerHTML = '<img class="img-fluid" src="https://img.pokemondb.net/artwork/large/'+ element.Name.toLowerCase() +'.jpg">';
            img.appendChild(img);

        });
    })

if(search.value !== ""){
    console.log("taper");

}