import { Position } from "./position";
import { Stat } from "./stat";
import { UploadFile } from "./uploadFile";
import { User } from "./user";

export class Paging {
    id: number;
    name: string;
    height: number;
    weight: number;
    backNumber: number;
    stat: Stat;
    position: Position;
}