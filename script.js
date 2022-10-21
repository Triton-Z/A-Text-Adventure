const createGameCanvas = () => 
{
  for (let i = 1; i<200; i++)
  {
    const char = document.createElement("p");
    char.setAttribute("id", i);
    document.getELementById(i).innerHTML = "#"
  }
}
