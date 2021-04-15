import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/service/pokemon.service';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons: any[] = [];
  private home:any;
  page = 1;
  totalPokemons:number;

  constructor(private pokemonService: PokemonService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
   
  }
  ngOnDestroy(): void {
    this.home.unsubscribe()
    console.log('sal')
    
  }
  getPokemons(){
 
    this.home =this.pokemonService.getPokemons(20,(this.page - 1) * 20)
    .subscribe((response: any) =>{
    this.totalPokemons = response.count;
      response.results.forEach(pokemon => {
        this.pokemonService.getDetailPokemon(pokemon.name)
          .subscribe((detail: any) => {
            this.pokemons.push(detail)
          
            console.log(this.pokemons);
          })
      })
  })
  }

  getDetail(id: string) {    
    this.router.navigateByUrl(`detail/${id}`);
  }

}
