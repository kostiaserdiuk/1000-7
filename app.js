let num = 1007
let text = document.getElementsByTagName('span')
// while (num > 6){
//     num -= 7 
//     console.log(num + '-7')
// }

function ghoul (){
    setTimeout(function (){
        if ( num != 6 ){
            num -= 7 
            document.write(num + '-7' + '<br>')
            if (num > 6){
                ghoul()
            } else {document.write('<h1>DEAD INSIDE</h1>')}
        }
    }, 100)
}

