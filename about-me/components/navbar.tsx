interface NavbarInterface {
    className: string
}

const Navbar = ({ className }: NavbarInterface): JSX.Element => {
    return <div className={className}>Navbar</div>;
}

export default Navbar;