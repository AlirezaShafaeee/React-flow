export interface NodeDataTypeInterface {
    label : string,
    enName : string , 
    perName : string , 
    active : boolean,
    handleColor?:string,
    iconColor?: 'danger' | 'success' | 'alert',
    type?: 'extend' | 'extendNode' |'topicPanel',    
    level : number,
    extend ? :boolean,
    SubNumber? :number,
    minData?: number, 
    accData?: number,
    DataIcon?: any
}
export interface EdgeDataTypeInterface {
    source : string,
    target : string,
    animated : boolean,
}
export interface TopicProp {
    topic: string,
    data: number,
    lag: number
}
export interface CustomNodeProps {
    data:
    {
        enName: string,
        perName: string,
        active: boolean,
        handleColor: string,
        extend?: boolean,
        SubNumber?: number,
        iconColor: 'danger' | 'success' | 'alert'
    }
    isConnectable: boolean
}
