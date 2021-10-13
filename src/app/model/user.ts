import { Stat } from "./stat";
import { Position } from "./position";
import { Foot } from "./foot";
import { UploadFile } from "./uploadFile";

export class User {
    id: number;
    name: string;
    height: number;
    weight: number;
    backNumber: number;
    stat: Stat;
    position: Position;
    foot: Foot;
    uploadFile: UploadFile;
}