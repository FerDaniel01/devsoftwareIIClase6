import { Injectable, signal,inject } from '@angular/core';
import { Gif } from '../interfaces/gif.interfaces';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/git.mapper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsSearchedServices {
  private http= inject(HttpClient);
  searchedGifs=signal<Gif[]>([])

searchTerm=signal<string>('')

constructor(){
  
  this.loadSearchGifs('');
}

loadSearchGifs(searchTerm: string){
 
    this.http.get<GiphyResponse>(`${environment.urlBase}/gifs/search`,{
      params: {
        api_key: environment.apikey,
        q: searchTerm,
        limit:25
      }
    }).subscribe((response)=>{
      console.log(response.data)
      const gifs= GifMapper.mapGiphyItemsToGifArray(response.data)
       console.log(gifs);
      this.searchedGifs.set(gifs);
    });
    
  }

}
