import CardInterface from "../interfaces/Card.interface";

function randomNumber(){
    return Math.trunc((Math.random() * 1000) +1)
}

export const GameList = 
[
    {id: randomNumber(), img: '../img/Final_Fantasy_XVI_Key_Art.png', title: 'Final Fantasy 16', platform: 'PS5', price: '190₾'},
    {id: randomNumber(), img: '../img/gofWarRagnarok.jpg', title: 'God of War: Ragnarok', platform: 'PS5', price: '120₾'},
    {id: randomNumber(), img: '../img/starfield_23ps.jpg', title: 'Starfield', platform: 'Xbox Series S/X', price: '200₾'},
    {id: randomNumber(), img: '../img/zelda-tears-of-the-kingdom-button-2k-1663127818777.jpg', title: 'Zelda: Tears of the Kingdom', platform: 'Nintendo Switch', price: '150₾'},
    {id: randomNumber(), img: '../img/phwiQjbJddEg979YucUoP3Vr.webp', title: 'Assassins Creed Mirage ', platform: 'PS5 | Xbox Series X/S', price: '200₾'},
    {id: randomNumber(), img: '../img/Horizon_Call_of_the_Mountain_cover_art.jpg', title: 'Horizon Call of the Mountain', platform: 'PS5 VR2', price: '100₾'},
    {id: randomNumber(), img: '../img/Star_Wars_Jedi_Survivor.jpeg', title: 'Star Wars Jedi Survivor', platform: 'Xbox Series S/X', price: '170₾'},
    {id: randomNumber(), img: '../img/Resident_Evil_4_remake_cover_art.jpg', title: 'Resident Evil 4 Remake', platform: 'PS5 | Xbox Series X/S', price: '150₾'},
    {id: randomNumber(), img: '../img/Dead_Space_2022_Teaser_Art.jpg', title: 'Dead Space Remake', platform: 'PS5', price: '160'},
    {id: randomNumber(), img: '../img/RedDeadRedemption.jpg', title: 'Red Dead Redemption', platform: 'Nintendo Switch', price: '100₾'},
    {id: randomNumber(), img: '../img/ff7-remake.jpg', title: 'Final Fantasy 7 Remake', platform: 'PS4', price: '100'},

]





