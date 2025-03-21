import { create } from "zustand";

interface ImageState {
  image: string | null;
  setImage: (image: string | null) => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleClick: () => Promise<void>;
  handleDelete: () => void;
}

export const useImageStore = create<ImageState>((set) => ({
  image: null,
  
  setImage: (image) => set({ image }),

  handleDrop: (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => set({ image: reader.result as string });
      reader.readAsDataURL(file);
    }
  },

  handleClick: async () => {
    try {
      const [fileHandle] = await (window as any).showOpenFilePicker({
        types: [{ description: "Images", accept: { "image/*": [".png", ".jpg", ".jpeg"] } }],
        multiple: false,
      });

      const file = await fileHandle.getFile();
      const reader = new FileReader();
      reader.onload = () => set({ image: reader.result as string });
      reader.readAsDataURL(file);
    } catch (err) {
      console.error("File selection canceled or not supported", err);
    }
  },

  handleDelete: () => set({ image: null }),
}));
