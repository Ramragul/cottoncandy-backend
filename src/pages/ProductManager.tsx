import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

type Product = {
  ProductID: number;
  ProductName: string;
  ProductBrandName: string;
  ProductPrice: string;
  ProductPurchasePrice: string;
  Remarks: string;
  ProductCategory: string;
  ProductStatus: string;
};

type ProductImage = {
  ImageID: number;
  ProductID: number;
  ImageURL: string;
  DisplayOrder: number;
};

export const ProductManager: React.FC<{ productId: number }> = ({ productId }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [images, setImages] = useState<ProductImage[]>([]);
  const [newFiles, setNewFiles] = useState<FileList | null>(null);
  const toast = useToast();

  // Fetch product details + images
  useEffect(() => {
    fetchProduct();
    fetchImages();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://admee.in:3003/api/products/${productId}`);
      setProduct(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchImages = async () => {
    try {
      const res = await axios.get(`https://admee.in:3003/api/products/${productId}/images`);
      setImages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle product field changes
  const handleChange = (field: keyof Product, value: string) => {
    if (!product) return;
    setProduct({ ...product, [field]: value });
  };

  const saveProduct = async () => {
    try {
      await axios.post(`https://admee.in:3003/api/products/${productId}`, product);
      toast({ title: "Product updated", status: "success" });
    } catch (err) {
      toast({ title: "Error updating product", status: "error" });
    }
  };

  // Upload images
  const uploadImages = async () => {
    if (!newFiles) return;
    const formData = new FormData();
    Array.from(newFiles).forEach((file) => formData.append("photos", file));

    try {
      await axios.post(`https://admee.in:3003/api/products/${productId}/images`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setNewFiles(null);
      fetchImages();
      toast({ title: "Images uploaded", status: "success" });
    } catch (err) {
      toast({ title: "Upload failed", status: "error" });
    }
  };

  // Delete image
  const deleteImage = async (imageId: number) => {
    try {
      await axios.post(`https://admee.in:3003/api/products/${productId}/images/delete`, { imageId });
      fetchImages();
      toast({ title: "Image deleted", status: "info" });
    } catch (err) {
      toast({ title: "Delete failed", status: "error" });
    }
  };

  // Reorder images
  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const reordered = Array.from(images);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);

    // update state
    setImages(reordered);

    // send new order to backend
    try {
      await axios.post(`https://admee.in:3003/api/products/${productId}/images/reorder`, {
        order: reordered.map((img, idx) => ({
          imageId: img.ImageID,
          displayOrder: idx,
        })),
      });
      toast({ title: "Order saved", status: "success" });
    } catch (err) {
      toast({ title: "Reorder failed", status: "error" });
    }
  };

  return (
    <Box p={6}>
      <Tabs>
        <TabList>
          <Tab>Details</Tab>
          <Tab>Images</Tab>
        </TabList>

        <TabPanels>
          {/* ---------- Product Details Tab ---------- */}
          <TabPanel>
            {product && (
              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel>Product Name</FormLabel>
                  <Input
                    value={product.ProductName}
                    onChange={(e) => handleChange("ProductName", e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Brand</FormLabel>
                  <Input
                    value={product.ProductBrandName}
                    onChange={(e) => handleChange("ProductBrandName", e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Price</FormLabel>
                  <Input
                    value={product.ProductPrice}
                    onChange={(e) => handleChange("ProductPrice", e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Purchase Price</FormLabel>
                  <Input
                    value={product.ProductPurchasePrice}
                    onChange={(e) =>
                      handleChange("ProductPurchasePrice", e.target.value)
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Remarks</FormLabel>
                  <Input
                    value={product.Remarks}
                    onChange={(e) => handleChange("Remarks", e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Category</FormLabel>
                  <Input
                    value={product.ProductCategory}
                    onChange={(e) => handleChange("ProductCategory", e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Status</FormLabel>
                  <Input
                    value={product.ProductStatus}
                    onChange={(e) => handleChange("ProductStatus", e.target.value)}
                  />
                </FormControl>

                <Button colorScheme="pink" onClick={saveProduct}>
                  Save
                </Button>
              </VStack>
            )}
          </TabPanel>

          {/* ---------- Product Images Tab ---------- */}
          <TabPanel>
            <VStack align="stretch" spacing={4}>
              <FormControl>
                <FormLabel>Upload New Images</FormLabel>
                <Input
                  type="file"
                  multiple
                  onChange={(e) => setNewFiles(e.target.files)}
                />
              </FormControl>
              <Button onClick={uploadImages} colorScheme="pink">
                Upload
              </Button>

              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="images" direction="horizontal">
                  {(provided) => (
                    <Flex
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      wrap="wrap"
                      gap={4}
                    >
                      {images.map((img, index) => (
                        <Draggable
                          key={img.ImageID}
                          draggableId={img.ImageID.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <Box
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              borderWidth="1px"
                              borderRadius="md"
                              p={2}
                              textAlign="center"
                              width="150px"
                            >
                              <Image
                                src={img.ImageURL}
                                alt={`Product ${img.ImageID}`}
                                boxSize="120px"
                                objectFit="cover"
                                mb={2}
                              />
                              <Flex justify="center" align="center">
                                <Text fontSize="sm">#{index + 1}</Text>
                                <IconButton
                                  aria-label="Delete"
                                  icon={<DeleteIcon />}
                                  size="sm"
                                  ml={2}
                                  onClick={() => deleteImage(img.ImageID)}
                                />
                              </Flex>
                            </Box>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Flex>
                  )}
                </Droppable>
              </DragDropContext>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProductManager;
