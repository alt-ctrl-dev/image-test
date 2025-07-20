export type ImageRow = {
    type: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    fileSizeInByte: number;
}

type TableRowProps = ImageRow

const TableRow = ({ alt, fileSizeInByte, height, src, type, width }: TableRowProps) => {
    return <tr>
        <th scope="row">{type}</th>
        <td>{width}x{height}</td>
        <td>{fileSizeInByte}</td>
        <td>
            <img src={src} alt={alt} height={height} width={width} loading="lazy" />
        </td>
        <td>{fileSizeInByte}</td>
    </tr>
}

export default TableRow;