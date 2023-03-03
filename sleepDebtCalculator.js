const getSleepHours = (day) =>{
    if (day === 'monday'){
      return 8;
    } else if (day === 'tuesday'){
      return 8;
    } else if (day === 'wednesday'){
      return 8;
    } else if (day === 'thursday'){
      return 8;
    } else if (day === 'friday'){
      return 6;
    } else if (day === 'saturday'){
      return 8;
    } else if (day === 'sunday'){
      return 2;
    } else {
      return 'error';
     }
    };
    
    console.log(getSleepHours('friday'))
    
    const getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
     
    const getIdealSleepHours = () => {
      const idealHours = 8;
      return idealHours * 7;
    }
    console.log(getActualSleepHours());
    console.log(getIdealSleepHours());
    
    const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
      if (actualSleepHours === idealSleepHours){
        return "You got perfect sleep." + difference;
      } else if ( actualSleepHours > idealSleepHours){
        return "User got more sleep than needed.";
      } else if (actualSleepHours < idealSleepHours){
        return "User should get some rest.";
      }
    };
    
    console.log(calculateSleepDebt());
    
    calculateSleepDebt();
    