export class champion{
    // id: number
    champion: string;
    cost: number;
    traits: string[];
    src: string;
}  

export class trait{
  name: string;         //name of triat
  description: string;  //description of triat
  innate: string;       //inate ability of 
  count: number = 0;    //number of team members with this 
  activeTier: number;   //current activated tier
  sets: number[];       //breakpoints for  activations
  levels: number[];     //medals for each  breakpoint
  src: string;          //path to  icon
  champions: string[];

  gold: string = "/assets/medals/GoldMedal.png";
  silver: string = "/assets/medals/SilverMedal.png";
  bronze: string = "/assets/medals/BronzeMedal.png";
  activeMedal: string = "";

  add(champion: string) {
    this.champions.push(champion);
    var x = 0;
    for(let i = 0; i <this.champions.length;i++)
    {
      if(this.champions[i]===champion)
      {
        x++;
      }
    }
    if(x===0)
    {
      this.count++;
    }
    console.log(this.count + this.name);
    // this.count++;
    this.setActiveTier();
  }
  remove(champion: string){
    var x = 0;
    for(let i = 0; i <this.champions.length;i++)
    {
      if(this.champions[i]===champion)
      {
        x ++;
        if(x == 1)
        {
          this.champions = this.champions.splice(i,1);
          this.count--;
        }
      }
    }
    console.log(this.count + this.name);
    // this.count--;
    this.setActiveTier();
  }
  setActiveTier(){
    for(let i = 0; i < this.sets.length;i++){
      if(this.count >= this.sets[i])
      {
        this.activeTier = this.levels[i];
      }
    }
    if(this.activeTier === 0){
      this.activeMedal = "";
    }else if (this.activeTier === 1){
      this.activeMedal = this.bronze;
    }else if(this.activeTier === 2){
      this.activeMedal = this.silver;
    }else if(this.activeTier === 3){
      this.activeMedal = this.gold;
    }
  }
}