function addMore(){
    document.getElementById('error').innerHTML="";

    let name=document.getElementById('name').value;
    if(name==''){
        document.getElementById('error').innerHTML="Enter some value!";
    }else{
        let box=document.getElementById('box');

        let li=document.createElement('li');
        li.textContent=name;

        //delete button
        let a=document.createElement('a');
        a.textContent="x";
        a.href="javascript:void(0)"
        a.className='remove';
        li.appendChild(a);
        

        let pos=box.firstElementChild;
        
        // box.appendChild(li);
        // box.insertBefore(li,pos);

        if(pos==null){        //if there is no value   
            box.appendChild(li);
        }else{                // if there exists some value then the current value will be inserted at the top position
            box.insertBefore(li,pos);
        }

    }
    document.getElementById('name').value="";  //after entering the value the box should be empty
}

// working of delete button 
let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box=document.getElementById('box');
    // console.log(e.target);
    let li=e.target.parentNode;
    box.removeChild(li);
})
