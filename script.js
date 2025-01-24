const inputField = document.getElementById('inputValue');
const lengthEl = document.getElementById('length-conversion');
const volumeEl = document.getElementById('volume-conversion');
const massEl = document.getElementById('mass-conversion');
const temperatureEl = document.getElementById('temperature-conversion');


inputField.addEventListener('input', (e) => {
  const userInput = e.target.value;
  const isValidNumber = !isNaN(parseFloat(userInput));

  //Lites-Meters
  const metersToFeet=function(value){
    return (value*3.281).toFixed(3); 
  }
  const feetToMeters=function(value){
    return (value/3.281).toFixed(3);
  }   

  //Liters-Gallons
  const litersToGallons=function(value){
    return (value*0.264).toFixed(3);
  }
  const gallonsToLiters=function(value){
    return (value*3.785).toFixed(3);
  }

  //Kilograms-Pounds
  const kilogramsToPounds=function(value){
    return (value*2.205).toFixed(3);
  }
  const poundsToKilograms=function(value){
    return (value/2.205).toFixed(3);
  }

  //Celcius-Fahrenheit
  const celciusToFahrenheit=function(value){
    return ((value*9/5) + 32).toFixed(3);
  }

  const fahrenheitToCelcius=function(value){
    return ((value-32)*5/9).toFixed(3);
  }

  if (isValidNumber) {
    // Perform calculations here
    const feet = metersToFeet(userInput);
    const meters = feetToMeters(userInput);
    const liters=gallonsToLiters(userInput);
    const gallons=litersToGallons(userInput);
    const kilograms=poundsToKilograms(userInput)
    const pounds=kilogramsToPounds(userInput)
    const fahrenheit=celciusToFahrenheit(userInput)
    const celcius=fahrenheitToCelcius(userInput)

    lengthEl.innerHTML = `
       ${userInput} <strong>m</strong> = ${feet} <strong>ft</strong> |
       ${userInput} <strong>ft</strong> = ${meters} <strong>m</strong> 
    `;

    volumeEl.innerHTML = `
       ${userInput} <strong>ℓ</strong> = ${gallons} <strong>L</strong> |
       ${userInput} <strong>L</strong> = ${liters} <strong>ℓ</strong> 
    `;

    massEl.innerHTML=`
       ${userInput} <strong>kg</strong> = ${pounds} <strong>lbs</strong> |
       ${userInput} <strong>lbs</strong> = ${kilograms} <strong>kg</strong>
    `
    temperatureEl.innerHTML=`
       ${userInput} <strong>°C</strong> = ${fahrenheit} <strong>°F</strong>  |
       ${userInput} <strong>°F</strong>  = ${celcius} <strong>°C</strong>
    `
  } else {
    lengthEl.innerHTML  = `1 <strong>m</strong> = 3.281 <strong>ft</strong> | 1 <strong>ft</strong> = 0.301 <strong>m</strong>`;
    volumeEl.innerHTML  = ` 1 <strong>ℓ</strong> = 0.264 <strong>L</strong> | 1 <strong>L</strong> = 3.785 <strong>ℓ</strong> `;
    massEl.innerHTML  = ` 1 <strong>kg</strong> = 2.205 <strong>lbs</strong> | 1 <strong>lbs</strong> = 0.454 <strong>kg</strong>`;
    temperatureEl.innerHTML=` 1 <strong>°C</strong> = 33.8 <strong>°F</strong>  | 1 <strong>°F</strong>  = -17.222 <strong>°C</strong>`
  }
});

