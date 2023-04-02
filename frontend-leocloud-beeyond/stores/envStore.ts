import { Template } from "@models/template";
import create from "zustand";

interface EnvStore {
    apiURL: string;
    basePath: string;
    setApiURL: (apiURL: string) => void;
    setBasePath: (basePath: string) => void;
}

const useEnvStore = create<EnvStore>((set) => ({
    apiURL: "",
    basePath: "",
    setApiURL: (apiURL: string) => set(() => ({ apiURL: apiURL })),
    setBasePath: (basePath: string) => set(() => ({ basePath: basePath })),
}));

export default useEnvStore;
