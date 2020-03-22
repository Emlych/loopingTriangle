function loopingTriangle(row) {
    for (let i=0; i<row; i++) {
        for (let j=i; j<=i; j++) {
            document.write('#');
        }
        return document.write('<br/>');
    }
}

let elt = document.getElementsByClassName('triangle');
elt.innerHTML = "loopingTriangle(10)";