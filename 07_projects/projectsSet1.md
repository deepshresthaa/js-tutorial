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
# Project 2 solution code
```javascript
const form=document.querySelector("form");
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector("#height").value);
  const weight=parseInt(document.querySelector("#weight").value);
  const results=document.querySelector("#results");
  if(height==="" || height< 0|| isNaN(height))
  {
    results.innerHTML=`please Enter valid height`;
  }
  else if(weight==="" || weight< 0|| isNaN(weight))
  {
    results.innerHTML="please Enter valid weight"
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`;
  }
})
```
# Project 3 solution code
```javascript
const clock=document.querySelector("#clock");
setInterval(function(){
  const date=new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
},1000)
```

# Project 4 solution code
```javascript

```