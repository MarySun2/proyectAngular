import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

// Otra forma de hacerlo (declarar la API Key directamente aquí, pero es menos seguro)
// const GIPHY_API_KEY = 'beBWg9oYZvJ5MiZFRROV7RASF3Jg49kw';

@Injectable({
  providedIn: 'root' // Esto indica que este servicio estará disponible en toda la aplicación
})
export class GifsService {

  // Lista pública donde se almacenan los GIFs obtenidos de la búsqueda
  public gifList: Gif[] = [];

  // Historial privado de los términos de búsqueda
  private _tagsHistory: string[] = [];

  // Clave API para acceder a Giphy
  private apiKey: string = 'beBWg9oYZvJ5MiZFRROV7RASF3Jg49kw';

  // URL base del servicio de Giphy
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  // Constructor donde inyectamos el servicio HttpClient para hacer peticiones HTTP
  constructor(private http: HttpClient) {
    this.loadLocalStorage(); // Carga el historial almacenado localmente
    console.log('Gifs Service Ready'); // Indica que el servicio está listo
  }

  // Getter para obtener una copia del historial de búsquedas
  get tagsHistory() {
    return [...this._tagsHistory]; // Se devuelve una copia para evitar mutar el original
  }

  // Método para organizar el historial de búsqueda
  private organizeHistory(tag: string) {
    // Si el tag ya existe en el historial, se elimina
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    // Se agrega el nuevo tag al inicio del historial
    this._tagsHistory.unshift(tag);

    // Limita el historial a los 10 últimos tags
    this._tagsHistory = this._tagsHistory.splice(0, 10);

    // Guarda el historial actualizado en el LocalStorage
    this.saveLocalStorage();
  }

  // Guarda el historial en LocalStorage
  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  // Carga el historial desde el LocalStorage
  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return; // Si no hay historial, no hace nada

    // Carga el historial desde LocalStorage
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    // Si no hay tags en el historial, no busca nada
    if (this._tagsHistory.length === 0) return;

    // Realiza una búsqueda con el primer tag del historial
    this.searchTag(this._tagsHistory[0]);
  }

  // Método para buscar un tag específico
  searchTag(tag: string): void {
    if (tag.length === 0) return; // Si el tag está vacío, no hace nada

    // Organiza el historial de búsquedas
    this.organizeHistory(tag);

    console.log(this._tagsHistory);

    // Parámetros para la petición HTTP
    const params = new HttpParams()
      .set('api_key', this.apiKey) // Clave API para acceder a Giphy
      .set('limit', 10)            // Límite de resultados
      .set('q', tag);              // Término de búsqueda

    // Petición HTTP para buscar GIFs en Giphy
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        console.log(resp);

        // Almacena los resultados en gifList
        this.gifList = resp.data;
        console.log({ gifs: this.gifList });
      });

    // Métodos alternativos para hacer la misma búsqueda usando fetch:

    // Primera Forma de hacerlo:
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=beBWg9oYZvJ5MiZFRROV7RASF3Jg49kw&q=valorant&limit=10')
    // .then(resp => resp.json())
    // .then(data => console.log(data));

    // Segunda Forma de hacerlo con async/await:
    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=beBWg9oYZvJ5MiZFRROV7RASF3Jg49kw&q=valorant&limit=10');
    // const data = await resp.json();
    // console.log(data);
  }
}

