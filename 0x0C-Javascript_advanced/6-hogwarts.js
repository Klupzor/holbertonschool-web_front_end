function studentHogwarts()
{
      let privateScore = 0;
      let name = null;
  
    var changeScoreBy = function (points){
      privateScore += points
    }
  
    this.setName = (newName)=>{
      name = newName
    }
  
    this.rewardStudent = ()=>{
      changeScoreBy(1)
    }
  
    this.penalizeStudent = ()=>{
      changeScoreBy(-1)
    }
  
    this.getScore = ()=>{
      return `${name}: ${privateScore}`
    }
  }
  
  var harry = new studentHogwarts()
  harry.setName("Harry")
  for (let i = 0; i < 4; i++) harry.rewardStudent()
  console.log(harry.getScore())
  
  var draco = new studentHogwarts()
  draco.setName("Draco")
  draco.rewardStudent()
  for (let i = 0; i < 3; i++) draco.penalizeStudent()
  console.log(draco.getScore())