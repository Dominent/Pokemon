import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockDeclaration } from 'ng-mocks';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { of } from 'rxjs';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonListStoreFacadeService } from './store/pokemon-list-store-facade.service';
describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let router: Router;
  let pokemonListStoreFacadeService: PokemonListStoreFacadeService;

  beforeEach(async () => {
    const routerMock = { navigateByUrl: jasmine.createSpy('navigateByUrl') };

    await TestBed.configureTestingModule({
      declarations: [
        PokemonListComponent,
        MockDeclaration(NzRowDirective),
        MockDeclaration(NzColDirective),
        MockDeclaration(NzCardComponent),
      ],
      providers: [
        { provide: Router, useValue: routerMock },
        {
          provide: PokemonListStoreFacadeService,
          useValue: {
            state: { pokemons$: of([{ url: 'test_url', name: 'Bulbasaur' }]) },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    pokemonListStoreFacadeService = TestBed.inject(
      PokemonListStoreFacadeService
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have pokemons$ observable populated from the store', () => {
    component.pokemons$.subscribe((pokemons) => {
      expect(pokemons).toEqual([{ url: 'test_url', name: 'Bulbasaur' }]);
    });
  });

  it('should navigate to pokemon details when navigateToDetails is called', () => {
    const pokemon = { url: 'test_url', name: 'Bulbasaur' };
    component.navigateToDetails(pokemon);
    expect(router.navigateByUrl).toHaveBeenCalledWith(
      'pokemons/Bulbasaur/details'
    );
  });
});
