window.onload = gameCanvas;
const gameCanvas () 
{
   const textSize = "20";
   const width = Math.ceil(window.innerWidth/textSize);
   const height = Math.ceil(window.innerHeight/textSize);

   for (let y = 1; y<height; y++)
   {
     for (x = 1; x<width; x++)
     {
       const ptxt = document.createElement("p");
       ptxt.setAttribute("id", "p);
       ptxt.setAttribute("class", "box");
     }
   }
}
