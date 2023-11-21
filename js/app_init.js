/*export const City = {
    Image: "./asset/NY.jpg",
    Description: `New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square`,
    Météo: `6°C, vent O à 6 km/h, 68 % d'humidité weather.com`,
    Quartier: `Harlem, Upper East Side, West Village, Flushing, SoHo, PLUS`,
    Population: `8,468 millions (2021)`,
    Coordonnées: `40° 42′ 51″ nord, 74° 00′ 21″ ouest `
    //icone
};*/
const Icon = {
    Description: `<span aria-hidden="true"><ion-icon name="desktop-outline"></ion-icon></span>`,
    Météo: `<span aria-hidden="true"><ion-icon name="cloudy-night-outline"></ion-icon></span>`,
    Quartier: `<span aria-hidden="true"><ion-icon name="business-outline"></ion-icon></span>`,
    Population: `<span aria-hidden="true"><ion-icon name="globe-outline"></ion-icon></span>`,
    Coordonnées: `<span aria-hidden="true"><ion-icon name="location-outline"></ion-icon></span>`
};
export const Description = {
    Image: "./asset/NY.jpg",
    Description: `New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square`,
    Météo: `6°C, vent O à 6 km/h, 68 % d'humidité weather.com`,
    Quartier: `Harlem, Upper East Side, West Village, Flushing, SoHo, PLUS`,
    Population: `8,468 millions (2021)`,
    Coordonnées: `40° 42′ 51″ nord, 74° 00′ 21″ ouest `
};
//console.table(City)
export const Template = {
    el: document.querySelector("section ul"),
    printF() {

        for (let index in Description) {
            let value = Description[index];
            console.log(index);
            index == "Image" ? this.el.innerHTML += `<li><img src="${value}" alt="image"></li>` : this.el.innerHTML += `<li>
                                    ${Icon[index]} <strong>${index}</strong> : ${value}
                                  </li>`;
        }
    }
};
const json = JSON.stringify(Description);
console.log(json + "\n");

for (let index in Description) {
    console.log(Icon[index]+" " + index + " " + Description[index] + '\n');
}




//console.table(City)
/* export const Tamplate = ({
    el : document.querySelector("section"),
    printF(){
        return this.el.innerHTML += `<ul>
                                        <li><img src="${Description.image}" alt="cover" itemprop="image"></li>
                                        <li><strong><span aria-hidden="true">
                                        <ion-icon name="easel-outline"></ion-icon><span> Description</strong> : ${Description.description}</li>
                                        <li><strong><span aria-hidden="true">
                                        <ion-icon name="partly-sunny-outline"></ion-icon><span> Météo</strong> : ${Description.Météo}</li>
                                        <li><strong><span aria-hidden="true">
                                        <ion-icon name="business-outline"></ion-icon><span> Quartier</strong> : ${Description.Quartier}</li>
                                        <li><strong><span aria-hidden="true">
                                        <ion-icon name="people-circle-outline"></ion-icon><span> Population</strong> : ${Description.Population}</li>
                                        <li><strong><span aria-hidden="true">
                                        <ion-icon name="location-outline"></ion-icon><span> Coordonnées</strong> : ${Description.Coordonnées}</li>
                                        
                                    <ul>`
    }
}) */