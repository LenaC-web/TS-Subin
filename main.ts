import articleAPI from "./article";
import productAPI from "./products";
import type { PostProductParams, PatchProductParams } from "./types";

// 게시글 목록을 가져오고 상태 코드가 2XX가 아닐 경우 오류를 처리.
async function getArticleList() {
  try {
    const response = await articleAPI.getArticleList({
      page: 1,
      pageSize: 10,
      keyword: "example",
    });
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log("Article List:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to get list: ", error.message);
    }
    console.error("Failed to get list generic error", error);
    throw error;
  }
}

// ID로 특정 게시글을 가져오고 상태 코드가 2XX가 아닐 경우 오류를 처리.
async function getArticle(id: string) {
  try {
    const response = await articleAPI.getArticle({ id });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Article: ", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to get article: ", error.message);
    }
    console.error("Failed to get generic error");
  }
}

// ID로 게시글을 삭제하고 상태 코드가 2XX가 아닐 경우 오류를 처리.
async function deleteArticle(id: string) {
  try {
    const response = await articleAPI.deleteArticle({ id });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Delete article: ", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to delete article: ", error.message);
    }
  }
}

// 상품 목록을 가져오고 데이터를 로그로 출력하거나 오류가 발생하면 처리
async function fetchProductList() {
  try {
    const params = { page: 1, pageSize: 10, keyword: "example" };
    // 상품 목록 가져오기
    const response = await productAPI.getProductList(params);
    // 가져온 상품 데이터를 로그로 출력
    console.log("Product List:", response);
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("Product List:", data);
    return data;
  } catch (error) {
    // 오류 처리 및 오류 메시지 출력
    if (error instanceof Error) {
      console.error("Failed to fetch product list:", error.message);
    }
    throw error;
  }
}
// try/catch를 사용하여 ID로 특정 상품 가져오기
// ID로 특정 상품을 가져오고 데이터를 로그로 출력하거나 오류가 발생하면 처리
async function fetchProduct(id: string) {
  try {
    const response = await productAPI.getProduct({ id });
    // 가져온 상품 데이터를 로그로 출력
    console.log("Product:", response);

    if (!response.ok) {
      throw new Error(
        `Error status: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log("Product: ", data);
    return data;
  } catch (error) {
    // 오류 처리 및 오류 메시지 출력
    if (error instanceof Error) {
      console.error("Failed to fetch product:", error.message);
    }
  }
}

// try/catch를 사용하여 상품 생성하기
// 새로운 상품을 생성하고 결과를 로그로 출력하거나 오류가 발생하면 처리
async function createNewProduct() {
  try {
    const params: PostProductParams = {
      id: "1",
      name: "New Product",
      description: "This is a new product",
      price: 100,
      tags: ["tag1", "tag2"],
      img: ["image1.jpg", "image2.jpg"],
    };
    // 상품 생성
    const response = await productAPI.postProduct(params);
    // 생성된 상품 데이터를 로그로 출력
    console.log("Posted Product:", response);
    if (!response.ok) {
      throw new Error(
        `HTTP Error! status: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("New Product", data);
    return data;
  } catch (error) {
    // 오류 처리 및 오류 메시지 출력
    if (error instanceof Error) {
      console.error("Failed to create product:", error.message);
    }
  }
}

// try/catch를 사용하여 상품 수정하기
// ID로 특정 상품을 수정하고 결과를 로그로 출력하거나 오류가 발생하면 처리
async function updateProduct(id: string) {
  try {
    const params: PatchProductParams = {
      id,
      name: "Updated Product",
      description: "This is an updated product",
      price: 120,
      tags: ["updatedTag1", "updatedTag2"],
      img: ["updatedImage1.jpg"],
    };
    // 상품 수정
    const response = await productAPI.patchProduct(params);
    // 수정된 상품 데이터를 로그로 출력
    console.log("Updated Product:", response);
    if (!response.ok) {
      throw new Error(
        `HTTP Error! status: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("Update Product:", data);
    return data;
  } catch (error) {
    // 오류 처리 및 오류 메시지 출력
    if (error instanceof Error) {
      console.error("Failed to update product:", error.message);
    }
  }
  // try/catch를 사용하여 상품 삭제하기
  // ID로 특정 상품을 삭제하고 결과를 로그로 출력하거나 오류가 발생하면 처리
  const deleteExistingProduct = async (id: string) => {
    try {
      // 상품 삭제
      const response = await productAPI.deleteProduct({ id });
      // 삭제된 상품 데이터를 로그로 출력
      console.log("Deleted Product:", response);
    } catch (error) {
      // 오류 처리 및 오류 메시지 출력
      if (error instanceof Error) {
        console.error("Failed to delete product:", error.message);
      }
    }
  };
}
