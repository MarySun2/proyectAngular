

export enum Color {
  red, black, blue, green
}


export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
// se exporta para que pueda ser utilizado en order.components.ts
export interface TableColumn {
  field: keyof Hero; // Aquí se asegura que 'field' sea una propiedad válida de la interfaz Hero
  header: string;
}
