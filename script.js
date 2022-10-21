const createGameCanvas = () => 
{
  let numID = 1;
  for (let i = 0; i<20; i++)
    for (let j = 1; j<200; j++)
    {
      const char = document.createElement("p");
      const br = document.createElement("br");
      char.setAttribute("id", numID);
      const charID = document.getElementById(numID);
      charID.innerHTML = "#";
      document.body.appendChild(charID);
      document.body.appendChild(br);
      
      numID++;
    }
  }
}

createGameCanvas();
