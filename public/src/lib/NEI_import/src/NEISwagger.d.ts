/**
 * Created by abnerzheng on 2017/10/26.
 */
import { Datatype, NEIInterfaceBean } from "./NEIInterfaceBean";
export default function processSwagger(content: any): Promise<{
    datatypes: Datatype[];
    interfaces: NEIInterfaceBean[];
}>;
