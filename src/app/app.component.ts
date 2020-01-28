import { champion, trait } from './interfaces';
import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable,from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TFT Team Builder';

  champs: Observable<champion[]>;
  traits: Observable<trait[]>;

  localTraits: trait[] = [];

  team: champion[] = [];

  constructor(private http: HttpClient){
    this.getChampions();
    this.getTraits();
  }
  getChampions(){
    console.log("getting champs");
    this.champs = this.http.get<champion[]>('assets/champion.json');
  }
  getTraits(){
    console.log('getting traits');
    this.traits = this.http.get<trait[]>('assets/traits.json');
    this.traits.forEach(x =>{
      for(let trait of x){
        this.localTraits.push(trait)
        trait.count = 0;
      }
    });
  }
  addToTeam(champ:champion){
    console.log('adding ' + champ.champion + ' to team');
    this.team.push(champ);
    this.updateTraits(champ);
  }
  removeFromTeam(champ:champion){
    this.team = this.team.filter(champion => champion !== champ)
  }
  updateTraits(champ:champion){
    for (let champTrait of champ.traits){
      for(let trait of this.localTraits){
        if (trait.name == champTrait){
          trait.count++;
          console.log(trait.name + ': ' + trait.count)
        }
      }
    }
  }

}
