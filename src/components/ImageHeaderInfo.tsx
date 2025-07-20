import useSWR from "swr";

async function fetchImage(request: string) {
    try {
        const response = await fetch(request);
        response.headers.forEach((value, key) => {
            if(key.toLowerCase() === "content-encoding") 
            console.log(`${key}: ${value}`);
        })
        const contentEncoding = response.headers.get("content-encoding");
        const contentLength = response.headers.get("content-length");
        return [contentEncoding??"No encoding", contentLength??"No length"].join(" | ");
    } catch (error) {
        console.error("Error:", error);
        return "Error";
    }
}

const ImageHeaderInfo = ({src}:{src:string}) =>{
    const { data, error, isLoading } = useSWR(src, fetchImage)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <div>{data}</div>
}

export default ImageHeaderInfo;