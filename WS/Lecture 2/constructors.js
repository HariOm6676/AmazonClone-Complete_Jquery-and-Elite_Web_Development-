function PartyANimal(nam)
{
    this.x=0;
    this.name=nam;
    console.log("Built",nam);
    this.party=function()
    {
        this.x=this.x=1;
        console.log(nam+"="+this.x);
    }
}
x=new PartyANimal("Jim");
x.party();