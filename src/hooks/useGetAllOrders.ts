import { CatalogueQuery } from "../App";
import { Category } from "./useCatalogueCategory";
import useData from "./useData";

export interface OrderItem {
    id: string; // Assuming each item has a unique ID
    name: string;
    quantity: number;
    price: number;
    image_url : string;
  }

export interface Orders {
    // total : number;
    order_date : string;
    order_status : string;
    price: number;
    // items : OrderItem[];
}

//const useDesignCatalogue = (catalogueQuery : CatalogueQuery , apiPath : string) => useData <Catalogue>("/api/cc/designcatalogue",
const useGetAllOrders = (apiPath : string) => useData <Orders>(apiPath,
{
},
[]
);

console.log("data received from DB " +JSON.stringify(useGetAllOrders))
export default useGetAllOrders;