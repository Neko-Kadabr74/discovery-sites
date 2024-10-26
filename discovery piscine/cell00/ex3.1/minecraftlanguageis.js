const balloon = document.getElementById('balloon');
let size = 210;
let colors = ['red', 'blue', 'green', 'pink'];
let colorIndex = 0;

balloon.addEventListener('click', () => {
    size += 10;
    if (size > 620) size = 210;
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];
});

balloon.addEventListener('mouseover', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];
    size += 5;
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
});

balloon.addEventListener('mouseout', () => {
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];
    size -= 5;
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
});