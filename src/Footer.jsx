import './footer.css'

function Header() {
    return (
        <div className="footer-div">
            <p className="footer-p">&copy; {new Date().getFullYear()} Danial Hosseintabar</p>
        </div>
    );
}

export default Header