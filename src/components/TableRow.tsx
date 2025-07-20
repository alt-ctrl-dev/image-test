export type ImageRow = {
    type: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    fileSizeInByte: number;
}

type TableRowProps = {
    image: ImageRow;
}
const TableRow = ({ image }: TableRowProps) => {
    return  <tr>
        <th scope="row">{image.type}</th>
        <td>{image.width}x{image.height}</td>
        <td>{image.fileSizeInByte}</td>
        <td>
            <img src={image.src} alt={image.alt} height={image.height} width={image.width} loading="lazy" />
        </td>
    </tr>
}

export default TableRow;