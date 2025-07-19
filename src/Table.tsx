export type ImageRow = {
    type: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    fileSize: string;
}

type TableProps = {
    images: ImageRow[];
    tableKey: string;
}
const Table = ({ images, tableKey }: TableProps) => <table>
    <thead>
        <tr>
            <th scope="col">Image type</th>
            <th scope="col">Image dimension</th>
            <th scope="col">File size</th>
            <th scope="col">Image</th>
        </tr>
    </thead>
    <tbody>
        {images.map((image, index) => (
            <tr key={tableKey+"-"+index}>
                <th scope="row">{image.type}</th>
                <td>{image.width}x{image.height}</td>
                <td>{image.fileSize}</td>
                <td>
                    <img src={image.src} alt={image.alt} height={image.height} width={image.width} loading="lazy" />
                </td>
            </tr>
        ))}
    </tbody>
</table>

export default Table;