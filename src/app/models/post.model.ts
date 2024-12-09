// post.model.ts
export interface Post {
    id: number;
    user_id: number;          
    image_url: string;        
    description: string;      
    category: 'nature' | 'animals' | 'technology' | 'sports' | 'art';  
    created_at: Date;         
  }
  