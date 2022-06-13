import 'regenerator-runtime';
import Navbar from './components/Navbar';
import './styles/body.scss';
// import Button from './components/Button';

console.log('Hello World!');

window.addEventListener('load', () => {
    const app = document.querySelector('#app');
    app.appendChild(new Navbar());
    // app.appendChild(new Button());
});