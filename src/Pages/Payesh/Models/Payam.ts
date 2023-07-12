export interface Payam{
    topic : string ,
    avatart : string,
    body : string,
    likes?: number,
    forwards? : number,
    comments? : number,
    social : string,
    type? : 'channel'|'group'
    channelId : string,
    date?: Date,
    pictures?: string[],
    keywords ? :string[],
    ner ?:string[],
    watchFull? :boolean,
    feel?:boolean,
    emotions ?:string[],
    behaviour?:string[],
    contentAnalysis ?:boolean,
    reference ?:boolean,
    madeDate?:Date,
    
}