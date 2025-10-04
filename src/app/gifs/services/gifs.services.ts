import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/git.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifsServices {

private http= inject(HttpClient);

trendingGifs=signal<Gif[]>([])

constructor(){
  this.loadTrendingGifs();
}

   
  loadTrendingGifs(){

      // this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=0dU3SqAi3Ofjixpww776MFkVeaUYfqre&limit=25');

      
      this.http.get<GiphyResponse>(`${environment.urlBase}/gifs/trending`,{
        params: {
          api_key: environment.apikey,
          limit: 40
        }
      }).subscribe((response)=>{
        const gifs= GifMapper.mapGiphyItemsToGifArray(response.data)
         console.log(gifs);
        this.trendingGifs.set(gifs);
      });
  }


  
}
