import { createClient } from "../supabase/server";

export const getBlog = async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.from("blog").select("*")

    if (error) {
        throw new Error("Error fetching blogs!!");
    }

    return data;
}

export async function createBlog(title: string, description: string) {
    const supabase = await createClient();
    const { error } = await supabase.from("blog").insert({
        title: title,
        description: description
    })

    if (error) {
        throw new Error("Error creating Blogs")
    }

    return { success: true };
}

export async function updateBlog(id: string, title: string, description: string) {
    const supabase = await createClient();
    const { error } = await supabase.from("blog").update({
        title: title,
        description: description
    }).eq("id", id);

    if (error) {
        throw new Error("Error creating Blogs")
    }

    return { success: true };
}
