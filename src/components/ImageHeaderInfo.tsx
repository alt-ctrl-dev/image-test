import useSWR from "swr";

async function fetchImage(request: string) {
    try {
        const response = await fetch(request);
        const contentEncoding = response.headers.get("content-encoding");
        const contentLength = response.headers.get("content-length");
        return [contentEncoding ?? "No encoding", contentLength ?? "No length"];
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

const ImageHeaderInfo = ({ src }: { src: string }) => {
    const { data, error, isLoading } = useSWR(src, fetchImage,  { 
        refreshInterval: 0,
        errorRetryCount: 1, 
        revalidateIfStale: false, 
        revalidateOnFocus: false, 
        revalidateOnReconnect: false
     })
    if (error) return <td colSpan={2}>failed to load</td>
    if (isLoading) return <td colSpan={2}>loading...</td>
    if (!data) return <td colSpan={2}>No data</td>
    return <>{
        data.map((item, index) => {
            return <td key={index}>{item}</td>
        })
    }</>
}

export default ImageHeaderInfo;