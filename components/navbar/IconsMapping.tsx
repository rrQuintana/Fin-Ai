import { ImageMapping } from "@interfaces/NavBarInterfaces";
import  Home from "@assets/icons/home.svg"
import  Person from "@assets/icons/person.svg"
import  Pin from "@assets/icons/pin.svg"
import  Search from "@assets/icons/search.svg"
import Money from "@assets/icons/money2.svg"


export const imageMapping: ImageMapping = {
  home: <Home width={25} height={25}/>,
  person: <Person width={25} height={25}/>,
  pin: <Pin width={25} height={25} fill="white"/> ,
  search: <Search width={25} height={25}/>,
  money: <Money width={25} height={25} />,
};