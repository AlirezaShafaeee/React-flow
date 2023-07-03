import { NodeDataTypeInterface } from "../models/models";

export const nodeData:NodeDataTypeInterface[] = [
    
    {
        label : '1',
        perName : 'سیستم مرکزی جمع آوری داده',
        enName: 'Data Source System',
        active : true,
        iconColor : "success",
        level : 1
    },
    {
        label: '2-1',
        perName : 'هوش مصنوعی',
        enName : 'AI',
        active : true,
        iconColor : 'success',
        level : 2
    },
    {
        label: '2-1',
        perName : 'تحلیل احساسات',
        enName : 'Sentiment',
        active :false,
        iconColor : 'success',
        level : 2,
        type : 'extend'
    },
    {
        label: '2-1',
        perName : 'تحلیل رفتاری',
        enName : 'Behavior',
        active : false,
        iconColor : 'success',
        level : 2,
        type : 'extend'
    }
    ,{
        label: '2-1',
        perName : 'تحلیل محتوایی',
        enName : 'Topics',
        active : false,
        iconColor : 'success',
        level : 2,
        type: 'extend'
    }
    ,{
        label: '2-2',
        perName : 'تحلیل پیشرفته',
        enName : 'Advance Analyze',
        active :true ,
        iconColor : 'alert',
        level : 2,
    },
    {
        label: '2-2',
        perName : 'شناسایی موجودیت‌ها',
        enName : 'NER',
        active : false,
        iconColor : 'alert',
        level :2 
    },
    {
        label: '2-2',
        perName : 'کلمات کلیدی',
        enName : 'Keywords',
        active :false ,
        iconColor : 'alert',
        level : 2
    },
    {
        label: '2-2',
        perName : 'هشتگ‌ها',
        enName : 'Hashtags',
        active : false,
        iconColor : 'alert',
        level : 2
    },
    {
        label: '3-1',
        perName : 'شناسایی مشابهت',
        enName : 'Similarity',
        active : true,
        iconColor : 'alert',
        level : 3
    },
    {
        label: '3-1',
        perName : 'مشابهت متنی',
        enName : 'Textual Similarity',
        active : false,
        iconColor : 'alert',
        level : 3
    },
    {
        label: '3-1',
        perName : 'مشابهت معنایی',
        enName : 'Semantic Similarity',
        active : false,
        iconColor : 'alert',
        level : 3
    },
    {
        label: '3-2',
        perName : 'موقعیت جغرافیایی',
        enName : 'Location Finder',
        active :true,
        iconColor : 'danger',
        level : 3
    },
    {
        label: '3-2',
        perName : 'استخراج اطلاعات مکانی',
        enName : 'Location Extraction',
        active : false,
        iconColor : 'danger',
        level : 3
    },
    {
        label: '3-2',
        perName : 'ارزیابی مکانی',
        enName : 'Geo Analysis',
        active : false,
        iconColor : 'danger',
        level : 3
    },
    {
        label: '3-2',
        perName : 'شناسایی اطلاعات مکانی',
        enName : 'Geo Detection',
        active : false,
        iconColor : 'danger',
        level : 3
    },
    
]