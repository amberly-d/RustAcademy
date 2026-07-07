export interface Review {
  id: string;
  tutorProfileId: string;
  raterUserId: string;
  rating: number;
  review?: string;
  createdAt: Date;
}

export interface ReputationDetails {
  tutorId: string;
  reputationScore: number;
  averageRating: number;
  totalRatings: number;
  isVerified: boolean;
  coursesCreated: number;
  reviewCount: number;
  breakdown: {
    averageRatingWeight: number;
    ratingCountWeight: number;
    verifiedWeight: number;
    coursesWeight: number;
  };
}
