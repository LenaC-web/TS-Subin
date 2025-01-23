import type {
  ArticleListParams,
  ArticleParams,
  PostArticleParams,
  PatchArticleParams,
  DeleteArticleParams,
} from "./types";

// GET Article List
const getArticleList = async (params: ArticleListParams) => {
  const url = new URL(`https://sprint-mission-api.vercel.app/api/articles`);
  url.searchParams.append("page", params.page.toString());
  url.searchParams.append("pageSize", params.pageSize.toString());
  url.searchParams.append("keyword", params.keyword);

  const response = await fetch(url, {
    method: "GET",
  });

  return response;
};

// GET Article/:id
const getArticle = async (params: ArticleParams) => {
  const url = new URL(
    `https://sprint-mission-api.vercel.app/api/articles/${params.id}`
  );
  const response = await fetch(url, {
    method: "GET",
  });

  return response;
};

// POST Article
const createArticle = async (params: PostArticleParams) => {
  const response = await fetch(
    "https://sprint-mission-api.vercel.app/api/articles",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: params.title,
        content: params.content,
        image: params.img,
      }),
    }
  );
  return response;
};

// PATCH Articles
const patchArticle = async (params: PatchArticleParams) => {
  const url = new URL(
    `https://sprint-mission-api.vercel.app/api/articles/${params.id}`
  );
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: params.id,
      title: params.title,
      content: params.content,
      image: params.img,
    }),
  });
  return response;
};

// DELETE Article
const deleteArticle = async (params: DeleteArticleParams) => {
  const url = new URL(
    `https://sprint-mission-api.vercel.app/api/articles/${params.id}`
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
  getArticle,
  getArticleList,
  createArticle,
  patchArticle,
  deleteArticle,
};
