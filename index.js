const bt=document.getElementById("bt");
const vowels="aeiouAEIOU";
function cal() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const result = document.getElementById("p");
    if (!name1 && !name2) {
        window.alert("Enter names for calculation otherwise not possible");
    } else if (!name1) {
        window.alert( "please enter 1st person name!");
    } else if (!name2) {
        window.alert("please enter 2nd person name!");
    } else {
        let a=`${name1}`.length;
        let b=`${name2}`.length;
        let c=0,e=0;
        let d=a+b;
        for (let char of `${name1}`) {
            if (vowels.includes(char)) {
                c=c+1;
            }
        }
        for (let char of `${name2}`) {
            if (vowels.includes(char)) {
                e=e+1;
            }
        }
        let s=d-(c+e);
        let f=a+b;
        let z=(s/f)*100;
        result.textContent = z+"%";
        result.style.color = "green";
        
    }
        
}
