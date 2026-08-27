console.log ("hello world")

const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2', {style:{color: 'blue'}}, "Name: SWIKRITI SINGH");
const h21 = React.createElement('h2', {style:{color: 'blue'}}, "Roll No: 2400321530203");
const h1 = React.createElement('h1', {style:{color: 'black'}}, "ABES ENGINEERING COLLEGE" );
const Image = React.createElement('img', {src: 'https://i.pinimg.com/1200x/be/dd/b8/beddb8c8c3c4c967cb821aae0cb796e3.jpg', style:{width: '200px', height: '200px'}});
const div = React.createElement('div', {style: {border: '4px solid orange', textAlign: 'center'}},Image, h1, h2, h21);
root.render(div);

