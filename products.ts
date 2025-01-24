import type {
  GetProductListParams,
  GetProductParams,
  PostProductParams,
  PatchProductParams,
  DeleteProductParams,
} from "./types";

// GET Product List
const getProductList = async (params: GetProductListParams) => {
  const url = new URL(`https://sprint-mission-api.vercel.app/api/products`);

  url.searchParams.append("page", params.page.toString());
  url.searchParams.append("pageSize", params.pageSize.toString());
  url.searchParams.append("keyword", params.keyword);

  const response = await fetch(url, {
    method: "GET",
  });

  return response;
};

// GET Product/:id
const getProduct = async (params: GetProductParams) => {
  const url = new URL(
    `https://sprint-mission-api.vercel.app/api/products/${params.id}`
  );
  const response = await fetch(url, {
    method: "GET",
  });
  return response;
};

// POST Product
const postProduct = async (params: PostProductParams) => {
  const url = new URL(`https://sprint-mission-api.vercel.app/api/products`);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: params.name,
      description: params.description,
      price: params.price,
      tags: params.tags,
      images: params.img,
    }),
  });
  return response;
};

// PATCH Product
const patchProduct = async (params: PatchProductParams) => {
  const url = new URL(
    `https://sprint-mission-api.vercel.app/api/products/${params.id}`
  );
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: params.id,
      name: params.name,
      description: params.description,
      price: params.price,
      tags: params.tags,
      images: params.img,
    }),
  });
  return response;
};

// DELETE Product
const deleteProduct = async (params: DeleteProductParams) => {
  const url = new URL(
    `https://sprint-mission-api.vercel.app/api/products/${params.id}`
  );
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: params.id,
    }),
  });
  return response;
};

export default {
  getProduct,
  getProductList,
  postProduct,
  patchProduct,
  deleteProduct,
};
