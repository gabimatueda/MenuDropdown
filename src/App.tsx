import { useSearchParams } from "react-router-dom";

export function App(){
    const [searchParams, setSearchParams] = useSearchParams();

    return(
        <header className="w-full py-2 flex items-center justify-center shadow-lg">
            <div className="w-[98%] md:w-[80%] h-full flex items-center justify-between">
                <h1 className="font-bold text-base md:text-2xl">Dropdown Menu</h1>

                <ul className="flex gap-8 text-black">
                    <li className="relative">
                        <button
                            onClick={() => handleMenuDropdown("menu")}
                            className="text-sm md:text-base font-semibold py-2 px-4 focus:outline-none focus:shadow-outline border-b-2 border-b-blue-600 text-black hover:border-b-blue-900"
                        >
                            Menu
                        </button>
                        {searchParams.get("menu") === "menu" && (
                            <div className="absolute right-0 top-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[F2F2F2]">
                                <ul>
                                    <li className="text-sm md:text-sm hover:bg-zinc-200 py-2 px-4 cursor-pointer">
                                        Option 1
                                    </li>
                                    <li className="text-sm md:text-sm hover:bg-zinc-200 py-2 px-4 cursor-pointer">
                                        Option 2
                                    </li>
                                    <li className="text-sm md:text-sm hover:bg-zinc-200 py-2 px-4 cursor-pointer">
                                        Option 3
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li className="flex gap-4 relative">
                        <button
                            onClick={() => handleMenuDropdown("menu2")}
                            className="text-sm md:text-base font-semibold py-2 px-4 focus:outline-none focus:shadow-outline border-b-2 border-b-blue-600 text-black hover:border-b-blue-900"
                        >
                            Menu2
                        </button>
                        {searchParams.get("menu") === "menu2" && (
                            <div className="absolute right-0 top-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[F2F2F2]">
                                <ul>
                                    <li className="text-sm md:text-sm hover:bg-zinc-200 py-2 px-4 cursor-pointer">
                                        Option 1
                                    </li>
                                    <li className="text-sm md:text-sm hover:bg-zinc-200 py-2 px-4 cursor-pointer">
                                        Option 2
                                    </li>
                                    <li className="text-sm md:text-sm hover:bg-zinc-200 py-2 px-4 cursor-pointer">
                                        Option 3
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li className="flex gap-4 relative">
                        <button
                            onClick={() => handleMenuDropdown("menu3")}
                            className="text-sm md:text-base font-semibold py-2 px-4 focus:outline-none focus:shadow-outline border-b-2 border-b-blue-600 text-black hover:border-b-blue-900"
                        >
                            Menu3
                        </button>
                        {searchParams.get("menu") === "menu3" && (
                            <div className="absolute right-0 top-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[F2F2F2]">
                                <ul>
                                    <li className="text-sm md:text-sm hover:bg-zinc-200 py-2 px-4 cursor-pointer">
                                        Option 1
                                    </li>
                                    <li className="text-sm md:text-sm hover:bg-zinc-200 py-2 px-4 cursor-pointer">
                                        Option 2
                                    </li>
                                    <li className="text-sm md:text-sm hover:bg-zinc-200 py-2 px-4 cursor-pointer">
                                        Option 3
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </header>
    );

    function handleMenuDropdown(menuDropdown: string){
        if(searchParams.get("menu") === menuDropdown){
            setSearchParams({ menu: "" })
        }
        else{
            setSearchParams({ menu: menuDropdown });
        }
    }
}