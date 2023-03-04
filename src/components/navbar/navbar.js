import { NavLink } from "react-router-dom";
import { ReactComponent as GithubIcon } from '../../assets/github-icon.svg'
import { ReactComponent as NavbarSeacrhIcon } from '../../assets/navbar-search-slash.svg'
import { ReactComponent as BellIcon } from '../../assets/bell-icon.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg'
import { IoMdArrowDropdown } from 'react-icons/io'
const Navbar = () => {
    return (
        <>
            <div className="flex flex-row w-full h-[60px] items-center bg-navbar-background-color px-8 py-4">
                <div className="flex flex-row items-center text-navbar-text-color mr-4">
                    <NavLink to="/" className="mr-4"><GithubIcon /></NavLink>
                    <label className="
                    w-[272px] h-7 border border-navbar-input-border-color 
                    rounded-md bg-navbar-input-bg-color flex flex-row 
                    justify-between items-center">
                        <input className="
                        bg-navbar-input-bg-color rounded-lg 
                        placeholder-gray-300 text-sm h-full
                        outline-none px-3"
                            type="text" placeholder="Search or jump to..." />
                        <NavbarSeacrhIcon className="mr-[2px]" />
                    </label>
                </div>
                <div className="flex flex-row justify-between w-full mt-[2px]">
                    <div className="text-navbar-text-color text-sm font-semibold">
                        <NavLink to="/" className="mr-4">Pull requests</NavLink>
                        <NavLink to="/" className="mr-4">Issues</NavLink>
                        <NavLink to="/" className="mr-4">Codespaces</NavLink>
                        <NavLink to="/" className="mr-4">Marketplace</NavLink>
                        <NavLink to="/" className="mr-4">Explore</NavLink>
                    </div>
                    <div className="flex flex-row items-center">
                        <BellIcon className="mr-4 hover:cursor-pointer" />
                        <label className="flex flex-row mr-4 items-center">
                            <PlusIcon className=" hover:cursor-pointer" />
                            <IoMdArrowDropdown className="mt-[5px] text-white" />
                        </label>
                        User
                    </div>
                </div>

            </div>


        </>
    );
}

export default Navbar;