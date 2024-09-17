/* export interface Author {
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
   */

  // Интерфейс для автора
export interface Author {
  username: string;
  image?: string;  // Сделаем изображение опциональным
}

// Интерфейс для элемента (например, статьи)
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

// Интерфейс для аватара
export interface AvatarProps {
  imageUrl?: string;  // Сделаем URL изображения опциональным
}

// Интерфейс для тегов
export interface TagsProps {
  tags: string[];
  // Дополнительно можно добавить свойства для фильтрации или сортировки
}
