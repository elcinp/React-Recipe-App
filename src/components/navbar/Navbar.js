import React,{useState} from 'react';



const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <Nav>
            <Logo to="/" >
                <i>{'<CLRSWY/>'}</i> <span>recipe</span>
            </Logo>
        </Nav>
    )
}
export default Navbar;