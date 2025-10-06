import { Component, inject } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';

import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';
import { GifsSearchedServices } from '../../services/gifs-searched.services';
import { GifList } from '../../components/gif-list/gif-list';

@Component({
  selector: 'app-search-page',
  imports: [FormsModule,CommonModule, GifList ],
  templateUrl: './search-page.html',
  styles: ``
})
export default class SearchPageComponent  {
   gifList: Gif[] = [];
  gifSearchedService = inject(GifsSearchedServices)


}
