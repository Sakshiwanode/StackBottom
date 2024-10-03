// src/types/navigation.ts

export type RootStackParamList = {
    Home: undefined;
    Result: {
      formData: {
        firstName: string;
        lastName: string;
        email: string;
        mobile: string;
        pincode: string;
        city: string;
      };
    };
  };
  