let skills =['Bash', 'Counter', 'Healing', true, 123]; // aca typescript intuye

const skillss: string[] =['Bash', 'Counter', 'Healing']; // de esta forma lo fuerza a que es string


//Creamos la interfaz
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // que aparesca o ni diferente 
}

//
const strider: Character =
{
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

strider.hometown = 'Rivendell';

console.table(strider);

export {};