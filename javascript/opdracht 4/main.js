//opdracht1

const myObject = [
    {
    name : 'hasnain',
    lastName : "Hanif",
    hobby : "Gaming",
},
{
    name : 'daim',
    lastName : "Hussain",
    hobby : "Gaming",
}];




const persoon =document.querySelector(".persoon")
for (let i = 0; i < myObject.length; i++) {
    const element = myObject[i];
    persoon.innerHTML += `
    <div class="card">
    <li>${element.name}</li>
    <li>${element.lastName}</li>
    <li>${element.hobby}</li>
    </div>`;
    
}

//opdracht2

const myauto = [
    {
        merk : "Mercedes",
        model : "Gt",
        bouwjaar : "2023",
        prijs : 150000
},
{
    merk : "range rover",
    model : "range rover land rover",
    bouwjaar : "2023",
    prijs : 150000
}];


let total = 0;

const auto =document.querySelector(".auto")
for (let i = 0; i < myauto.length; i++) {
    const element = myauto[i];
    persoon.innerHTML += `
    <div class="card">
    <li>${element.merk}</li>
    <li>${element.model}</li>
    <li>${element.bouwjaar}</li>
    <li>${element.prijs}<li>
    </div>`;
    total += element.prijs;
};

auto.innerHTML += "totaal is" + total;

//opdracht 3
const studie = [
    {
        firstName : "bouchtoui",
        className : "b1n",
        course : "ict",
       
},
{
    firstName : "hennekamp",
    className : "nekpijn",
    course : "ict",
},
{
    firstName : "osama bin ladin",
        className : "b1n",
        course : "ict",
}
];




const studies =document.querySelector(".studies")
for (let i = 0; i < studie.length; i++) {
    const element = studie[i];
    persoon.innerHTML += `
    <div class="card">
    <li>${element.firstName}</li>
    <li>${element.className}</li>
    <li>${element.course}</li>
    </div>`;
    
}

//opdracht 4

const meme = document.querySelector("meme")
fetch("https://meme-api.com/gimme/5")
.then((Response) => Response.json())
.then((data) => {
meme.innerHTML;
});

