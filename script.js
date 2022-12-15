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
       const ctxt = document.createElement("p");
       const cdiv = document.createElement("div");
       ctxt.setAttribute("id", x+"."+y);
       ctxt.setAttribute("class", "box");
       cdiv.style.width = textSize;
       cdiv.style.height = textSize;
       document.cdiv.appendChild(ctxt);
     }
      const br = document.createElement("br");
      document.body.appendChild(br);
   }
}
