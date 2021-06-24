let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){

    let wd = document.getElementById('wd').value;
    let maths=document.getElementById('maths').value;
    let comp=document.getElementById('comp').value;
    let java=document.getElementById('java').value;
    let grades="";

    let total=parseFloat(wd)+parseFloat(maths)+parseFloat(comp)+parseFloat(java);
    
    let perc=(total/400)*100;
    console.log(total);
    console.log(perc);

    if(perc<=100 && perc>=80){
        grades='A';
    }
    else if(perc<=79 && perc>=60){
        grades='B';
    }
    else if(perc<=59 && perc>=40){
        grades='C';
    }
    else{
        grades='F'
    }
    console.log(grades);
    if (wd.length<1 || maths.length<1 ||comp.length<1 ||java.length<1){
        document.getElementById('showData').innerHTML=`Please enter all values`; 
        
    }

    else{
        if(perc>=39.5){
            document.getElementById('showData').innerHTML=`Out of 400 your Total is ${total} and Percentange is ${perc}%.<br> your Grade is ${grades}. You are Pass.`;
        }
        else{
            document.getElementById('showData').innerHTML=`Out of 400 your Total is ${total} and Percentange is ${perc}%.<br> your Grade is ${grades}.You are Fail.`;

        }
    }
    e.preventDefault();
    // console.log('abhijit boys')
   
}