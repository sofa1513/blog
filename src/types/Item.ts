export interface Author {
    username: string;
    image: string;
  }
  
  export interface ItemProps {
    slug: string;
    author: Author;
    createdAt: string;
    description: string;
    tagList: string[];
    title: string;
    favoritesCount: number;
    favorited?: boolean;
  }
  
  export interface AvatarProps {
    imageUrl: string;
  }
  
  export interface TagsProps {
    tags: string[];
  }
  