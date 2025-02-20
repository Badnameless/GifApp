import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifts';

const GIPHY_API_KEY = 'DkJ0pdOSq3ZooxGBuEhvXYNR4LnNf1hM';
const SERVICE_URL = 'https://api.giphy.com/v1/gifs';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  public gifList: Gif[] = [];

  private _tagHistory: string[] = [];

  constructor(private http:HttpClient) {
    this.loadLocalStorage();
  }

  get tagHistory(){
    return [...this._tagHistory];
  }

  public organizedHistory(tagList:string[], usedTag:string){
    if(tagList.length == 10){ // Si el array pasa de 10 elementos se elimina el ultimo elemento del array.
      this._tagHistory.pop();
    };

    this._tagHistory = this._tagHistory.filter(_tag => _tag.toUpperCase() !== usedTag.toUpperCase()); // Elimina el tag si se llama igual.

    this._tagHistory.unshift(usedTag);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;

    this._tagHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._tagHistory.length === 0) return;

    this.searchTag(this._tagHistory[0]);
  }

  public searchTag(tag:string):void{
    if(tag.length === 0) return;
    this.organizedHistory(this.tagHistory, tag);

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${SERVICE_URL}/search`, {params})
      .subscribe( res => {
        console.log(res);

        this.gifList = res.data;
        console.log(this.gifList);
      });
  }
}
