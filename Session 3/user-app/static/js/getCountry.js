

function getCountry() {
    var http = new XMLHttpRequest();
    var url = "https://plexiform-zone-274808.ew.r.appspot.com/api";
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
        this.displayCountry(http.response);
    }
};

function displayCountry(country) {
    if (country) {
        const json = JSON.parse(country)[0];
        const name = json.name;
        const capital = json.capital;
        const pop = json.population;
        const region = json.region
        const flag = json.flag;

        document.getElementById('flag').setAttribute('src', flag);
        document.getElementById('name').textContent = name;
        document.getElementById('capital').textContent = capital;
        document.getElementById('population').textContent = pop + ' inhabtants';
        document.getElementById('region').textContent = region;
    }
}

this.getCountry();