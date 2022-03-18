function newImage(path, left, bottom) {
    let image = document.createElement('img');
    image.src = path;
    image.style.position = 'fixed';
    image.style.left = left;
    image.style.bottom = bottom;
    document.body.append(image);
    if (path === 'assets/sword.png' || path === 'assets/sheild.png' || path === 'assets/staff.png') {
        image.addEventListener('dblclick', function(){
            image.remove();
        })
    }
}

var y = 0;
for (let x = 0; y <= window.innerHeight; x+=100){
    if (x >= window.innerWidth) {
        y = y + 100;
        x = 0;
    }
    let xposition = `${x}px`;
    let yposition = `${y}px`;
    if (y <= .5 * window.innerHeight) {
        newImage('assets/grass.png', xposition, yposition);
    }
    if (y > .5 * window.innerHeight) {
        newImage('assets/sky.png', xposition, yposition);
    }
}

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');
newImage('assets/sword.png', '500px', '405px');
newImage('assets/sheild.png', '165px', '185px');
newImage('assets/staff.png', '600px', '100px');

