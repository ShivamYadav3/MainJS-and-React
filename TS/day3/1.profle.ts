
/**
 * @description {Har mard ki success ke peche ek awrat ka hath rehta hai. TS is that Awrat}
 */
interface UserProfile {
    name: string;
    city: string;
    pincode: number;
    isUserActive: boolean;
    isValid: "Yes" | "No";
    country?: string;
  }
  const userProfileObj: UserProfile = {
    name: "Sumit",
    city: "Pune",
    pincode: 411057,
    isUserActive: true,
    isValid: "Yes",
  };
  
  const userProfileArr: UserProfile[] = [
    {
      name: "Sumit",
      city: "Pune",
      pincode: 411057,
      isUserActive: true,
      isValid: "Yes",
    },
    {
      name: "Rahul",
      city: "Pune",
      pincode: 411057,
      isUserActive: true,
      isValid: "Yes",
      country: "Bharat",
    },
    {
      name: "Vishal",
      city: "Pune",
      pincode: 411057,
      isUserActive: true,
      isValid: "Yes",
    },
  ];
  