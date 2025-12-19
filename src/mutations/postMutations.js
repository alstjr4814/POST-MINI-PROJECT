import { useMutation } from "@tanstack/react-query";
import { create } from "zustand";
import { createPost } from "../apis/posts/postsApi";

export const usecreatePostMutation = () => useMutation({
    mutationKey: ["createPost"],
    mutationFn: async (data) => {
        return await createPost(data);
    }
}); 