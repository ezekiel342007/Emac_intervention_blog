import { Label } from "@radix-ui/react-label"
import { Card } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Dispatch, JSX, SetStateAction, useEffect, useState } from "react"
import { Button } from "../ui/button"
import { ImageType, Tag } from "@/types/Posts"
import Image from "next/image"

interface WriteBlogFormProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  image_url: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  body: string;
  setBody: Dispatch<SetStateAction<string>>;
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
  onHandleSubmit: () => void;
}


async function getImages(num: number): Promise<ImageType[]> {
  const res = await fetch(`https://picsum.photos/v2/list?page=${num}&limit=12`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

async function getTags(): Promise<Tag[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_TAGS_ENDPOINT}`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default function WriteBlogForm(
  {
    title,
    description,
    body,
    image_url,
    tags,
    setTitle,
    setDescription,
    setBody,
    setImageUrl,
    setTags,
    onHandleSubmit
  }: WriteBlogFormProps): JSX.Element {
  const [pageNum, setPageNum] = useState(1);
  const [images, setImages] = useState<ImageType[] | null>(null);
  const [blogTags, setBlogTags] = useState<Tag[]>([]);


  function toggleTag(tag: string): void {
    if (tags.includes(tag))
      setTags(tags.filter((t: string): boolean => t !== tag));
    else
      setTags([...tags, tag]);
  }

  useEffect(
    () => {
      getTags()
        .then((tagList: Tag[]): void => { setBlogTags([...tagList]) });
      console.log(blogTags);
      getImages(pageNum)
        .then((data: ImageType[]) => setImages(data))
    }, [pageNum]
  );

  return (
    <div>
      <Card className="px-4">
        <form className="flex flex-col gap-3" onSubmit={onHandleSubmit}>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input value={title} id="title" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input value={description} id="description" onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div>
            <Card className="px-2">
              {(image_url == "") ?
                <div>
                  <div className="flex justify-center mb-3">
                    <h3>Pick a cover image</h3>
                  </div>
                  <div className="grid grid-cols-4">
                    {
                      images?.map((image: ImageType): JSX.Element => {
                        return (
                          <div key={image.id} className="w-fit m-2" onClick={() => { setImageUrl(image.download_url) }}>
                            <Image
                              className="rounded-2xl hover:blur-xs"
                              src={image.download_url}
                              alt={image.id}
                              width={270}
                              height={270}
                            />
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="flex flex-row justify-center mt-3 space-x-3">
                    <Button onClick={() => setPageNum(pageNum - 1)}>Previous</Button>
                    <Button onClick={() => setPageNum(pageNum + 1)}>Next</Button>
                  </div>
                </div>
                :
                <div>
                  <div className="flex flex-row justify-between">
                    <Label htmlFor="imageUrl">Cover image</Label>
                    <div className="pb-3">
                      <Button variant={"outline"} className="flex flex-row mb-3" onClick={() => { setImageUrl("") }}>
                        <Image
                          src={"/images/reset.png"}
                          alt="reset symbol"
                          width={25}
                          height={25}
                        />
                        Pick again
                      </Button>
                    </div>
                  </div>
                  <Input id="imageUrl" value={image_url} disabled />
                </div>
              }
            </Card>
          </div>
          <div className="mt-5">
            <Label>Tags</Label>
            <div className="mt-3 space-x-3">
              {
                blogTags.map(
                  (tag: Tag): JSX.Element => {
                    return (<Button variant={tags.includes(tag.id) ? "default" : "outline"} key={tag.id} onClick={() => toggleTag(tag.id)}>{tag.name}</Button>);
                  })
              }
            </div>
          </div>

          <div>
            <Label htmlFor="body">Body</Label>
            <Textarea value={body} id="body" onChange={(e) => setBody(e.target.value)} />
          </div>

          <Button className="mt-2 w-fit" type="submit">Post</Button>
        </form >
      </Card >
    </div >
  )
}
