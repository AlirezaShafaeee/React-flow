export interface PayamProps{
    topic : string ,
    avatart : string,
    body : string,
    likes?: number,
    forwards? : number,
    comments? : number,
    social : string,
    type? : 'کانال'|'گروه'
    channelId : string,
    date?: Date,
    pictures?: string[],
    keywords ? :string[],
    ner ?:string[],
    watchFull? :boolean,
    feel?:boolean,
    emotions ?:string[],
    behaviour?:string[],
    content ?:string[],
    reference ?:boolean,
    madeDate?:Date,
    bolton?:boolean
}