const fs=require("fs");

let input=process.argv.slice(2);
//console.log(input);
let new1 =[];
let opti=[];
for(let i=0;i<input.length;i++){
    if(input[i].charAt(0)=='-')
    opti.push(input[i]);
    else
    new1.push(input[i]);
}
console.log("the new array we made are"+new1);
console.log("the option array is "+opti);
for(let i=0;i<new1.length;i++){
    let data=fs.existsSync(new1[i]);
    if(!data){
        console.log("doesnt exist");
        break;
    }
}
let content="";
for(let i=0;i<new1.length;i++){
    let dat=fs.readFileSync(new1[i]);
    content=content + dat + "\r\n";
}
console.log(content);
let contenta=content.split("\r\n");
console.log(contenta);
let ispresent=opti.includes("-s");
if(ispresent){
    for(let i=1;i<contenta.length;i++){
        if(contenta[i] =="" && contenta[i-1] ==""){
            contenta[i]=null;
        }
        else if(contenta[i]=="" && contenta[i-1]==null )
        {
            contenta[i]=null;
        }
    }
}
console.log(contenta);
let temparr=[];
for(let i=0;i<contenta.length;i++){
    if(contenta[i]!=null){
        temparr.push(contenta[i]);
    }
}
console.log("data after removing null is"+temparr);
contenta=temparr;
let indexofn=opti.indexOf("-n");
let indexofb=opti.indexOf("-b");
let final="";
if(indexofb!=-1&&indexofn!=-1){
    if(indexofb<indexofn){
        final="-b";
    }
    else{
        final ="-n"
    }
}else{
    if(indexofb!=-1){
        final="-b";
    }
    else if(indexofn!=-1){
       final="-n";
    }
    
}
if(final=="-n"){
   modifyn();
}
else if(final=="-b"){
   modifyb();
} 
function modifyb(){
    let num=1;
    for(let i =0;i<contenta.length;i++){
        if(contenta[i]==null||contenta[i]==""){
          console.log(""+content[i]);
        }
        else{
            console.log(""+num+contenta[i]);
            num++;
        }
    }
}
function modifyn(){
  
    for(let i =0;i<contenta.length;i++)
       {
          contenta[i]=(i+1)+") "+contenta[i];
        }
        
      
}
function modifyb(){
    num=1;
    for(let i=0;i<contenta.length;i++){
        if(contenta[i]!="")
       { contenta[i]=num+") "+contenta[i];
       num++;
    }
    }
}
console.log(contenta);