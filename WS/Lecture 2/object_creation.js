function PartyANimal(){
    this.x=0;
    this.party=function(){
        this.x=this.x+1;
        console.log("So far  "+this.x);
    }
}
an=new PartyANimal();
an.party();
an.party();
an.party();
