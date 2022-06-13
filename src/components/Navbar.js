import '../styles/navbar.scss';
class Navbar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    style(){
        return `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                position: relative;
                width: 100%;
            }
        `;
    }

    render(){
        this.innerHTML = `
            <a href="#">
                <img src="images/alamrohmangarden.png" alt="Alam Rohman Garden" />
            </a>
            <ul>
                <li>
                    <a href="#">Jasa</a>
                </li>
                <li>
                    <a href="#">Artikel</a>
                </li>
                <li>
                    <a href="#">Kontak Kami</a>
                </li>
            </ul>
            <a href="#">
                Login
            </a>
            
        `;
    }
}

customElements.define('nav-bar', Navbar);
export default Navbar;