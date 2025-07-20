import { lazy } from "react";
import type { ImageRow } from "./TableRow";

const TableRow = lazy(() => import("./TableRow"));

type TableProps = {
    images: ImageRow[];
    tableKey: string;
}
const Table = ({ images, tableKey }: TableProps) => <table>
    <thead>
        <tr>
            <th scope="col">Image type</th>
            <th scope="col">Image dimension</th>
            <th scope="col">File size (in bytes)</th>
            <th scope="col">Image</th>
            <th scope="col">Fetch Header response</th>
        </tr>
    </thead>
    <tbody>
        {images.map((image,index) => (
            <TableRow key={tableKey+index} {...image}/>
        ))}
    </tbody>
</table>

export default Table;