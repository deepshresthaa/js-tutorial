# Projects related to DOM
## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# solution code
## project 1
``` javascript
const body=document.querySelector("body");
const buttons=document.querySelectorAll(".button");
buttons.forEach((button)=>{
  button.addEventListener("click",function(e){
    if(this.id==='grey')
    {
      body.style.backgroundColor=this.id;
      body.style.color="white";
    }
    if(e.target.id==='white')
    {
      body.style.backgroundColor=e.target.id;
    }
    if(this.id==='blue')
    {
      body.style.backgroundColor=this.id;
    }
    if(this.id==='yellow')
    {
      body.style.backgroundColor=this.id;
    }
  })
})

```