class Rope {
    constructor(bodyA,pointB){
       var option={
           bodyA : bodyA,
           pointB: pointB,
           stiffness:1,
           length:0
   
       }
       this.rope=Constraint.create(option)
       World.add(world,this.rope)
       this.pointB = pointB
       
    }
      display(){
         if(this.rope.bodyA){
           var pointA=this.rope.bodyA.position
           var pointB=this.pointB
           strokeWeight(4)
             line(pointA.x,pointA.y,pointB.x,pointB.y)
         }
          
      }
     
}