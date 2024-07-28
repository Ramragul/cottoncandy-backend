import { CatalogueQuery } from "../App";
import { Category } from "./useCatalogueCategory";
import useData from "./useData";

export interface Catalogue {
    ProductID : string;
    ProductName : string;
    ProductImageURL : string;
    ProductPrice : string;
 


}

//const useDesignCatalogue = (catalogueQuery : CatalogueQuery , apiPath : string) => useData <Catalogue>("/api/cc/designcatalogue",
const useDesignCatalogue = (catalogueQuery : CatalogueQuery , apiPath : string) => useData <Catalogue>(apiPath,
{
    params:{
        category:catalogueQuery.category?.CategoryName,
        occasion:catalogueQuery.occasion
    }
},
[catalogueQuery]
);

export default useDesignCatalogue;