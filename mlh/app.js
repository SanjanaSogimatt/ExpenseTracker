let expenditure=[];
const form=document.querySelector('form');
const budget=document.querySelector('#budget');
const desc=document.querySelector('#desc');
const expense=document.querySelector('#expense')
const amount=document.querySelector('#amount')
const Description=document.querySelector('#Description')
const BX =document.querySelector('#budget1')
form.addEventListener('submit',function(e){
    e.preventDefault();
    budgetEXP();
    
         func();
    
    

    const newLi=document.createElement('li');
    const description=desc.value;
    // console.log(value);
    newLi.innerText=description;
    Description.append(newLi);
    desc.value=''
    
    
})
function func(){
    
    const NEWLI=document.createElement('li');
    const value=expense.value;
    NEWLI.innerText=value;
    amount.append(NEWLI);
    expense.value='';
}
function budgetEXP(){
    const li=document.createElement('li');
    const bg=budget.value;
    li.innerText=bg;
    BX.append(li);
    budget.value=''
}