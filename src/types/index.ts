// ====== USER Interface
export type IUser = {
    _id: number;
    username: string;
    email: string;
    password: string;
    imgUrl: string;
}

export type CreateUserParams = {
    username: string
    email: string
    password: string
    imgUrl: string
  }

  export type Post = {
    _id: string
    content: string
    imageUrl: string
    startDateTime: Date
    likes: string[]
    comments: Comment[]
    user: string;
  }

  export type Comment = {
    _id: string;
    user: string;
    content: string;
  }
   
  export type UpdateUserParams = {
    username: string
    photo: string
    private: boolean;
  }
  
  // ====== EVENT PARAMS
  export type CreatePost = {
    userId: string
    post: {
      post: string
      imageUrl: string
      startDateTime: Date
    }
  }
  
  export type UpdatePost = {
    userId: string
    post: {
      _id: string
      content: string
      imageUrl: string
    }
  }
  
  export type DeletePost = {
    postId: string
  }
  
  export type GetAllPosts = {
    query: string
    limit: number
    page: number
  }
  
  export type GetPostsByUser = {
    userId: string
    limit?: number
    page: number
  }