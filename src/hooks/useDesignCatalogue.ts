import { CatalogueQuery } from "../App";
import { Category } from "./useCatalogueCategory";
import useData from "./useData";

export interface Catalogue {
    ProductID : string;
    ProductName : string;
    ProductImageURL : string;
 


}

const useDesignCatalogue = (catalogueQuery : CatalogueQuery) => useData <Catalogue>("/api/cc/designcatalogue",
{
    params:{
        category:catalogueQuery.category?.CategoryName,
        occasion:catalogueQuery.occasion
    }
},
[catalogueQuery]
);

export default useDesignCatalogue;