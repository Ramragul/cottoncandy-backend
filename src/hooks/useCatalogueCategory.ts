import useData from "./useData";

export interface Category {
    CategoryID : string;
    CategoryName : string;
    CategoryImageURL : string;


}

const useCatalogueCategory = () => useData <Category>("/api/cc/categories")

export default useCatalogueCategory;