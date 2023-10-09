import CardInterface from "../interfaces/Card.interface";

function randomNumber(){
    return Math.trunc((Math.random() * 1000) +1)
}

export const GameList = 
[
    {id: randomNumber(), img: '../img/games/new-spider-man-2-images-v0-62s0ml5e1gmb1.jpg', title: "Marvel's Spider-Man 2", platform: 'PS5', price: '199'},
    {id: randomNumber(), img: '../img/games/dfxemr0-843a931b-f430-4719-86c7-75f126a77340 (1).png', title: "Mortal Kombat 1", platform: 'PS5 | Xbox Series X/S', price: '199'},
    {id: randomNumber(), img: '../img/games/Final_Fantasy_XVI_Key_Art.png', title: 'Final Fantasy 16', platform: 'PS5', price: '190'},
    {id: randomNumber(), img: '../img/games/gofWarRagnarok.jpg', title: 'God of War: Ragnarok', platform: 'PS5', price: '120'},
    {id: randomNumber(), img: '../img/games/starfield_23ps.jpg', title: 'Starfield', platform: 'Xbox Series S/X', price: '200'},
    {id: randomNumber(), img: '../img/games/zelda-tears-of-the-kingdom-button-2k-1663127818777.jpg', title: 'Zelda : Tears of the Kingdom', platform: 'Nintendo Switch', price: '150'},
    {id: randomNumber(), img: '../img/games/phwiQjbJddEg979YucUoP3Vr.webp', title: 'Assassins Creed Mirage ', platform: 'PS5 | Xbox Series X/S', price: '200'},
    {id: randomNumber(), img: '../img/games/Horizon_Call_of_the_Mountain_cover_art.jpg', title: 'Horizon Call of the Mountain', platform: 'PS5 VR2', price: '100'},
    {id: randomNumber(), img: '../img/games/Star_Wars_Jedi_Survivor.jpeg', title: 'Star Wars Jedi Survivor', platform: 'Xbox Series S/X', price: '170'},
    {id: randomNumber(), img: '../img/games/Resident_Evil_4_remake_cover_art.jpg', title: 'Resident Evil 4 Remake', platform: 'PS5 | Xbox Series X/S', price: '150'},
    {id: randomNumber(), img: '../img/games/oVxOoP4w_400x400.jpg', title: 'Lies Of P', platform: 'PS5 | Xbox Series X/S', price: '199'},
    {id: randomNumber(), img: '../img/games/RedDeadRedemption.jpg', title: 'Red Dead Redemption', platform: 'Nintendo Switch', price: '100'},
    {id: randomNumber(), img: '../img/games/ff7-remake.jpg', title: 'Final Fantasy 7 Remake', platform: 'PS4', price: '100'},

]



export const AccessoriesList = 
[
    {id: randomNumber(), img: '../img/accessories/1-800x800.jpg', title: 'HyperX Cloud II Wireless Gaming Headset Black/Red', brand: 'HyperX', price: '399'},
    {id: randomNumber(), img: '../img/accessories/ornata-v3-2022-render-01-1300x1300x72.600x800.jpg', title: 'Razer Ornata V3 X Gaming RGB Keyboard Black', brand: 'Razer', price: '139'},
    {id: randomNumber(), img: '../img/accessories/-razer-rz06-02610400-r3g1-raiju-gaming-controller-for-playstation-4-bt-black-3.600x800.jpg', title: 'Razer Gamepad Raiju Tournament', brand: 'Razer', price: '309'},
    {id: randomNumber(), img: '../img/accessories/63fa48552b500.png', title: 'Trust GXT 606 JAVV 2.0 Speaker RGB', brand: 'Trust', price: '70'},
    {id: randomNumber(), img: '../img/accessories/1_g1p4-4q.png', title: '2E Gaming Mouse Pad PRO Speed XL Black', brand: '2E', price: '39'}
    
]



export const TabsContent = 
[
    {id: randomNumber(), img: '../img/accessories/dualsense-controller-product-thumbnail-01-en-14sep21.webp', title: 'DualSense™ Wireless Controller', descr: 'Immerse yourself in the gaming experience with a controller the supports responsive haptic feedback and dynamic trigger effects.'},
    {id: randomNumber(), img: '../img/accessories/sony-playstation-5.png', title: 'PlayStation 5 Console', descr: 'Experience an all-new generation of incredible PlayStation games. PS5 consoles are currently in stock.'},
    {id: randomNumber(), img: '../img/accessories/3d-pulse-headset-product-thumbnail-01-en-14sep21.webp', title: 'PULSE 3D™ Wireless Headset', descr: 'Enjoy a seamless wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles.'},
    {id: randomNumber(), img: '../img/accessories/kamera-sony-playstation-5-hd-camera-5920-940x480.jpg', title: 'Playstation HD Camera', descr: 'Add yourself to your gameplay videos and broadcasts with smooth, sharp, full-HD capture.'},
]


export const slides = 
[
    {url: "../img/spider.png", title: "Save New York from Kraven and explore new feautures with symbiote suit in Marvel's Spider-Man 2"},
    {url: "../img/mk.png", title: "Mortal Kombat 1 already available on our store"},
    {url: "../img/star.png", title: "Explore and defy destiny of the galaxy in Starfield"},
    {url: "../img/final.png", title: "Final Fantasy 16 already available on our store"}
]



