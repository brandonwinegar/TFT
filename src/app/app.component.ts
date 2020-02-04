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
  champs: champion[];
  traits: trait[];
  team: champion[] = [];
  goldPath: string = "/assets/medals/GoldMedal.png"
  silverPath: string = "/assets/medals/SilverMedal.png"
  bronzePath: string = "/assets/medals/BronzeMedal.png"

  constructor(private http: HttpClient){
    this.getChampions();
    this.getTraits();
  }
  getChampions(){
    console.log("getting champs");
    return this.http.get<champion[]>('assets/champion.json')
    .subscribe(response =>{
      this.champs = response
      console.log("got champs")
    });
  }
  getTraits(){
    console.log("getting traits")
    return this.http.get<trait[]>('assets/traits.json')
    .subscribe(res => {
      this.traits = res.map(x => Object.assign(new trait(),x))
      this.traits.forEach(x=>{
        x.count=0;
        x.activeTier=0;
        console.log("got traits")
      })
    })
  }
  addToTeam(champ:champion){
    console.log('adding ' + champ.champion + ' to team');
    this.team.push(champ);
    champ.traits.forEach(x =>{
      for(let trait of this.traits){
        if(x == trait.name){{
          trait.add(champ.champion);
          console.log("adding")
          }
          console.log(trait.name + ': ' + trait.count)
        }
      }
    })
  }
  removeFromTeam(champ:champion){
    console.log('removing ' + champ.champion + ' from team');
    this.team = this.team.filter(champion => champion !== champ);
    champ.traits.forEach(x =>{
      for(let trait of this.traits){
        if(x == trait.name){{
          trait.remove(champ.champion);
          }
          console.log(trait.name + ': ' + trait.count)
        }
      }
    })
  }
}
