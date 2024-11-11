import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
  id:                 new FormControl<string>(''),
  superhero:          new FormControl<string>('', {nonNullable: true}),
  publisher:          new FormControl<Publisher>(Publisher.DCComics),
  alter_ego:          new FormControl(''),
  first_appearance:   new FormControl(''),
  characters:         new FormControl(''),
  alt_imag:           new FormControl(''),
  });

  //Propiedad
  public publishers = [
    {id: 'DC Comics', desc: 'Dc - Comics' },
    {id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  //Constructor
  constructor(
    private heroesService : HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
  ) {}

  get currentHero() : Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  ngOnInit(): void {

    if ( !this.router.url.includes('edit')) return;

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroById( id ) ),
    ).subscribe( hero => {

      if ( !hero ) return this.router.navigateByUrl('/');

      this.heroForm.reset( hero );
      return;
    });

  }

  //Metodo
  onSubmit():void {
    // console.log({
    //   formIsValid: this.heroForm.valid,
    //   value: this.heroForm.value,
    // })

    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero)
      .subscribe( hero =>{
        this.showSnackbar(`$ { hero.superhero } Updated!`);
      });

      return;
    }

    this.heroesService.addHero(this.currentHero)
    .subscribe(hero =>{
      this.router.navigate(['/heroes', hero.id]);
      this.showSnackbar(`$ { hero.superhero } Created!`);
    });
  }

  // Método
showSnackbar(message: string): void {
  this.snackbar.open(message, 'done', {
    duration: 2500,
  })
}


}
