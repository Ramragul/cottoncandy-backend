import useData from "./useData";

export interface Category {
    CategoryID : string;
    CategoryName : string;
    CategoryImageURL : string;
}

//const useCatalogueCategory = () => useData <Category>("/api/cc/categories")

const useCatalogueCategory = ( apiPath : string , productType: string | null) => useData <Category>(apiPath,
    {
        params:{
            productType : productType
        }
    },
    [productType]
    );

export default useCatalogueCategory;