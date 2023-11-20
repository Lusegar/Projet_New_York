export const Description = {
    image: "../asset/NY.jpg",
    description: `New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square`,
    Météo: `6°C, vent O à 6 km/h, 68 % d'humidité weather.com`,
    Quartier: `Harlem, Upper East Side, West Village, Flushing, SoHo, PLUS`,
    Population: `8,468 millions (2021)`,
    Altitude: `10 m; Min. −8,2 m; Max. 124,9 m`,
    Coordonnées: `40° 42′ 51″ nord, 74° 00′ 21″ ouest `
};

export const Template = {
    el: document.querySelector("section"),
    printF() {
        return this.el.innerHTML += `<ul>
                                        <p><img src="${Description.image}" alt="cover"></p>
                                        <p><strong><ion-icon name="easel-outline"></ion-icon> Description</strong> : ${Description.description}</p>
                                        <p><strong><ion-icon name="partly-sunny-outline"></ion-icon> Météo</strong> : ${Description.Météo}</p>
                                        <p><strong><ion-icon name="business-outline"></ion-icon> Quartier</strong> : ${Description.Quartier}</p>
                                        <p><strong><ion-icon name="people-circle-outline"></ion-icon> Population</strong> : ${Description.Population}</p>
                                        <p><strong><ion-icon name="location-outline"></ion-icon> Coordonnées</strong> : ${Description.Coordonnées}</p>
                                        
                                    <ul>`;
    }
};

/* New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square. ― Google
Météo : 6°C, vent O à 6 km/h, 68 % d'humidité weather.com
Quartiers : Harlem, Upper East Side, West Village, Flushing, SoHo, PLUS
Population : 8,468 millions (2021)
Altitude : 10 m; Min. −8,2 m; Max. 124,9 m
Code FIPS : 36-51000
Code ZIP : 100xx–104xx, 11004–05, 111xx–114xx, 116xx
Coordonnées : 40° 42′ 51″ nord, 74° 00′ 21″ ouest */