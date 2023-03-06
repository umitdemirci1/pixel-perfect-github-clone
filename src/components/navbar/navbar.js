import { NavLink } from "react-router-dom";
import { ReactComponent as GithubIcon } from '../../assets/github-icon.svg'
import { ReactComponent as NavbarSeacrhIcon } from '../../assets/navbar-search-slash.svg'
import { ReactComponent as BellIcon } from '../../assets/bell-icon.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg'
import { IoMdArrowDropdown } from 'react-icons/io'
const Navbar = () => {
    return (
        <>
            <div className="flex flex-row w-full h-[60px] justify-between items-center bg-navbar-background-color px-4 md:px-6 lg:px-8 py-4 flex-nowrap">
                <div className="flex flex-row items-center text-navbar-text-color mr-4 w-[416px]">
                    <NavLink to="/" className="mr-4"><GithubIcon /></NavLink>
                    <span className="
                    h-7 border border-navbar-input-border-color 
                    rounded-md bg-navbar-input-bg-color flex 
                    justify-between items-center lg:min-w-[272px] min-w-[120px] w-full">
                        <input className="
                        min-w-[160px] w-full
                        bg-navbar-input-bg-color rounded-lg 
                        placeholder-gray-300 text-sm h-full
                        outline-none px-3"
                            type="text" placeholder="Search or jump to..." />
                        <NavbarSeacrhIcon className="mr-1" />
                    </span>

                </div>
                <div className="flex flex-row w-full justify-between">
                    <div className="text-navbar-text-color text-sm font-semibold">
                        <NavLink to="/" className="mr-4 ">Pull 
                        <span className="860 hidden lg:inline"> request</span>s</NavLink>

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
                        <div className="w-5 rounded-full bg-black border
                        border-navbar-input-border-color h-full mt-[2px]">
                        </div>
                        <IoMdArrowDropdown className="mt-1 -mr-1 text-white" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;