 interface AudioPlayer
 {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details ; //objeto
 }
 
 interface Details
 {
    author: string;
    year: string;
 }
 
 //metodo con interface
 const audioPlayer: AudioPlayer = 
 {
     audioVolumen: 90,
     songDuration: 36,
     song: "Mess",
     details: 
     {
         author: "Ed Sheeran",
         year: "2015"
     }
 }
 

 //desestructuracion 
const {
    song : anothersong, 
    songDuration:duration, 
    //details:{author, year} //se puede hacer de esta forma o 
    details
} = audioPlayer;
// otra desestructuracion
const {author, year} = details;

 console.log('La Cancion es: ', anothersong);
 console.log('La Duracion es: ',  duration);
 console.log('El Autor es: ',  author);
 console.log('El Año es: ',  year);


 //Variables
 const dbz: string[] = ['Goku', 'Vegeta', 'Trunk']; // Array
 const Gohan = dbz[3] || 'Personaje no encontrado'; 

 console.error('Personaje 3:', dbz[2]);
 console.warn('Personaje 4:', Gohan);

 //Ejemplo con desestructuracion

 const [p1, p2, p3, Gohann = 'Not Found']: string[] = ['Goku', 'Vegeta', 'Trunk']; // Array
 console.error('Personaje 3:', Gohann);
 export {}