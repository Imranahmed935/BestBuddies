import { prisma } from "../../shared/prisma";
import { IReview } from "./review.interface";



const createReview = async (payload: any) => {
  const result = await prisma.review.create({
    data: payload,
  });
  return result;
};


const getAllReview = async (id:string) => {
  const result = await prisma.review.findMany({
    where:{reviewerId:id},
    include:{
      reviewer:true
    }
  })
  return result;
};


const getAllTestimonial = async () => {
  const result = await prisma.review.findMany({
    include:{
      reviewer:true
    }
  })
  return result;
};


const getReviewById = async (id:string) => {
  const result = await prisma.review.findUnique({
    where:{
        id:id
    },
    include:{
      reviewer:true
    }
  })
  return result;
};


const updateReview = async (payload:IReview ,id:string) => {
  const result = await prisma.review.update({
    where:{
        id:id
    },
    data:payload
  })
  return result;
};


const deleteReview = async (id:string) => {
  const result = await prisma.review.delete({
    where:{
        id:id
    },
  })
  return result;
};


export const reviewsService = {
    createReview,
    getAllReview,
    getReviewById,
    updateReview,
    deleteReview,
    getAllTestimonial
}