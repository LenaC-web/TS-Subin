//Article type

export type ArticleListParams = {
  page: number;
  pageSize: number;
  keyword: string;
};

export type ArticleParams = {
  id: string;
};

export type PostArticleParams = {
  title: string;
  content: string;
  img: string;
};

export type PatchArticleParams = {
  id: string;
  title: string;
  content: string;
  img: string;
};

export type DeleteArticleParams = {
  id: string;
};

//Product type

export type GetProductListParams = {
  page: number;
  pageSize: number;
  keyword: string;
};

export type GetProductParams = {
  id: string;
};

export type PostProductParams = {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  img: string[];
};

export type PatchProductParams = {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  img: string[];
};

export type DeleteProductParams = {
  id: string;
};
