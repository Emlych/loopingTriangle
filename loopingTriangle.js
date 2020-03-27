function loopingTriangle(row) {
    let accu = '';
    for (let i=0; i<row; i++) {
        for (let j=0; j<=i; j++) {
            accu += '#';
        }
        accu += '<br>';
    }
    return accu
}

document.getElementById("value-submit").addEventListener("click", function() {
    let inputVal = document.getElementById("value-field").value;
    //document.getElementById("input-value").innerHTML = inputVal;
    document.getElementById("triangle").innerHTML = loopingTriangle(inputVal);
});