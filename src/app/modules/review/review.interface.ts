export interface IReview {
  id?: string;               
  rating: number;            
  comment: string;           
  reviewerId: string;        
  travelPlanId: string;      
  createdAt?: Date;          
  updatedAt?: Date;          
}
