// import useData from "./useData";



// //const useDesignCatalogue = (catalogueQuery : CatalogueQuery , apiPath : string) => useData <Catalogue>("/api/cc/designcatalogue",
// const useGetData = ( apiPath : string,userId?: string | undefined) => useData(apiPath,
// {

// },
// []
// );

// console.log("data received from DB " +JSON.stringify(useGetData))
// export default useGetData;


// version 2 

import useData from "./useData";

const useGetData = (apiPath: string, userId?: string | undefined) => {
    return useData(apiPath, {}, []); // Ensure it returns the actual response
  };
  export default useGetData;