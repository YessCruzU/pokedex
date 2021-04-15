import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/shared/service/pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
detailPokemon: any = '';
detail:any;
  constructor(private pokemonService : PokemonService,
    private activateRouter: ActivatedRoute,
    private router: Router

    ) {
      this.activateRouter.params.subscribe(
        params =>{
          this.getPokemon(params['id'])
        }
      )
     }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.detail.unsubscribe()
    console.log('sal')
    
  }

  getPokemon(id){
    this.detail = this.pokemonService.getDetailPokemon(id).subscribe(
      response =>{
      this.detailPokemon = response
      console.log(this.detailPokemon)
      }
    )

  }
  routerPage(route: string ) {
    this.router.navigateByUrl('/'+route);
}

}
