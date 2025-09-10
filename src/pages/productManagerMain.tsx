// ProductList.tsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Spinner,
  Button,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Product = {
  ProductID: number;
  ProductName: string;
  ProductBrandName: string;
  ProductPrice: string;
  ProductCategory: string;
  ProductStatus: string;
  ProductThumbnail?: string; // optional thumbnail column if exists
};

export const ProductManagerMain: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://admee.in:3003/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" py={20}>
        <Spinner size="xl" color="pink.400" />
        <Text mt={4} fontSize="lg">Loading products...</Text>
      </Box>
    );
  }

  return (
    <Box p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={6} color="pink.500">
        Product Catalogue
      </Text>

      {products.length === 0 ? (
        <Text>No products available</Text>
      ) : (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
          {products.map((product) => (
            <Box
              key={product.ProductID}
              borderWidth="1px"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="md"
              _hover={{ transform: "scale(1.03)", transition: "0.3s" }}
              bg={useColorModeValue("white", "gray.800")}
              cursor="pointer"
              onClick={() => navigate(`/products/${product.ProductID}`)}
            >
              <Image
                src={product.ProductImageURL || "https://via.placeholder.com/300x200?text=No+Image"}
                alt={product.ProductName}
                objectFit="cover"
                w="100%"
                h="180px"
              />

              <VStack align="start" spacing={2} p={4}>
                <Text fontWeight="bold" fontSize="lg" noOfLines={1}>
                  {product.ProductName}
                </Text>
                <Text fontSize="sm" color="gray.500" noOfLines={1}>
                  {product.ProductBrandName}
                </Text>
                <Text color="pink.500" fontWeight="semibold">
                  ₹{product.ProductPrice}
                </Text>

                <Button
                  size="sm"
                  colorScheme="pink"
                  alignSelf="stretch"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/products/${product.ProductID}`);
                  }}
                >
                  Manage
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default ProductManagerMain;
