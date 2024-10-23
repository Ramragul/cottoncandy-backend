import { CatalogueQuery } from "../App";
import { Category } from "./useCatalogueCategory";
import useData from "./useData";

export interface Catalogue {
    ProductID : string;
    ProductName : string;
    ProductImageURL : string;
    ProductPrice : string;
    ProductCategory : string;
    OwningAuthority : string;
    ProductStatus : string;
 


}

//const useDesignCatalogue = (catalogueQuery : CatalogueQuery , apiPath : string) => useData <Catalogue>("/api/cc/designcatalogue",
const useDesignCatalogue = (catalogueQuery : CatalogueQuery , apiPath : string , productType: string | null) => useData <Catalogue>(apiPath,
{
    params:{
        category:catalogueQuery.category?.CategoryName,
        occasion:catalogueQuery.occasion,
        productType : productType
    }
},
[catalogueQuery]
);

export default useDesignCatalogue;