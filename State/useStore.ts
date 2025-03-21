import { create } from "zustand";
import { useImageStore } from "./useStoreImg";

interface FormState {
  name: string;
  setName: (name: string) => void;
  submitForm: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  name: "",
  setName: (name) => set({ name }),
  submitForm: () => {
    const { name } = useFormStore.getState(); // Get form data
    const { image } = useImageStore.getState(); // Get image from Image Store
    console.log("Submitting Data:", { name, image });
    // Ye can replace this with an API call or other logic
  },
}));
