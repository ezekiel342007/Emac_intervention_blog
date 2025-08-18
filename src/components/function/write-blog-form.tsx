import { Label } from "@radix-ui/react-label"
import { Card } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Dispatch, JSX, SetStateAction, useEffect, useState } from "react"
import { Button } from "../ui/button"
import { ImageType } from "@/types/Posts"
import Image from "next/image"

interface WriteBlogFormProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  body: string;
  setBody: Dispatch<SetStateAction<string>>;
  onHandleSubmit: () => void;
}

async function getImages(num: number): Promise<ImageType[]> {
  const res = await fetch(`https://picsum.photos/v2/list?page=${num}&limit=12`);
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
    imageUrl,
    setTitle,
    setDescription,
    setBody,
    setImageUrl,
    onHandleSubmit
  }: WriteBlogFormProps): JSX.Element {
  const [pageNum, setPageNum] = useState(1);
  const [images, setImages] = useState<ImageType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      getImages(pageNum)
        .then((data: ImageType[]) => setImages(data))
        .finally(() => setLoading(false))
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
              {(imageUrl == "") ?
                <div>
                  <div className="flex justify-center">
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
                  <div className="flex flex-row justify-center space-x-3">
                    <Button onClick={() => setPageNum(pageNum - 1)}>Previous</Button>
                    <Button onClick={() => setPageNum(pageNum + 1)}>Next</Button>
                  </div>
                </div>
                :
                <div>
                  <div className="flex flex-row space-x-5">
                    <Label htmlFor="imageUrl">Cover image</Label>
                    <Button variant={"outline"} className="flex flex-row" onClick={() => { setImageUrl("") }}>
                      <div className="">
                        <Image
                          src={"/images/reset.png"}
                          alt="reset symbol"
                          width={30}
                          height={30}
                        />
                      </div>
                      Pick again
                    </Button>
                  </div>
                  <Input id="imageUrl" value={imageUrl} disabled />
                </div>
              }
            </Card>
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
