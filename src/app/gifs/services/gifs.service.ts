import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey: string = 'uTBsIVeieDOd1JVagdzqgQHA4OUUE6C1';

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }


  constructor( private http: HttpClient ) {}

  buscarGifs( query: string = '' ) {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=uTBsIVeieDOd1JVagdzqgQHA4OUUE6C1&q=dragon ball z&limit=10').subscribe( resp => {
      console.log(resp);
    });

  }

}
