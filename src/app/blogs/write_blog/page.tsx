"use client"

import { JSX, useEffect, useState } from "react";
import { User } from "@/types/Posts";
import { refreshToken } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext";
import WriteBlogForm from "@/components/function/write-blog-form";


export default function WriteBlogPage(): JSX.Element {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState<User>(
    {
      id: "",
      username: "",
      email: "",
    }
  );
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(
    () => {
      console.log(user);
      if (user)
        setAuthor(user)
    }, [user]
  )

  async function onHandleSubmit(): Promise<void> {
    event?.preventDefault();

    const postUrl = `${process.env.NEXT_PUBLIC_WRITE_BLOG_ENDPOINT}`;
    try {
      const response = await fetch(
        postUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ title, author, description, body, image_url, tags })
        }
      );

      if (response.status == 401)
        refreshToken();

      if (response.ok)
        alert("Post successful");

    } catch (error) {
      console.log("Network Error", error);
    }
  }

  return (
    <div>
      <WriteBlogForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        body={body}
        setBody={setBody}
        image_url={image_url}
        setImageUrl={setImageUrl}
        tags={tags}
        setTags={setTags}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  )
}
