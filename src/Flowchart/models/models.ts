export interface NodeDataTypeInterface {
    label : string,
    enName : string , 
    perName : string , 
    active : boolean,
    handleColor?:string,
    iconColor: 'danger' | 'success' | 'alert',
    type?: 'extend' | 'activeExtend',    
    level : number,
    
}
export interface EdgeDataTypeInterface {
    source : string,
    target : string,
    animated : boolean,

}