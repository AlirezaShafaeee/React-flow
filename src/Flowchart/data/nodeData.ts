import { NodeDataTypeInterface } from "../models/models";
import {ReactComponent as DataSenter} from '../../Assets/Datasenter.svg';
import {ReactComponent as Middle} from '../../Assets/Middle.svg';
import {ReactComponent as Cube} from '../../Assets/Cube.svg';
export const nodeData:NodeDataTypeInterface[] = [ 
    {
        label : '1',
        perName : 'سیستم مرکزی جمع آوری داده',
        enName: 'Data Source System',
        active : true,
        iconColor : "success",
        level : 1,
        type: 'extendNode',
        minData: 353,
        accData:65324,
        DataIcon: DataSenter,
    },
    {
        label: '2-1',
        perName : 'هوش مصنوعی',
        enName : 'AI',
        active : true,
        iconColor : 'success',
        level : 2,
    },
    {
        label: '2-2',
        perName : 'تحلیل احساسات',
        enName : 'Sentiment',
        active :false,
        iconColor : 'success',
        level : 2,
        type : 'extend',
        subNumber: 5
    },
    {
        label: '2-3',
        perName : 'تحلیل رفتاری',
        enName : 'Behavior',
        active : false,
        iconColor : 'success',
        level : 2,
        type: 'extend',
        subNumber: 5
    }
    ,{
        label: '2-4',
        perName : 'تحلیل محتوایی',
        enName : 'Topics',
        active : false,
        iconColor : 'success',
        level : 2,
        type: 'extend',
        subNumber: 5
    }
    ,{
        label: '2-5',
        perName : 'تحلیل پیشرفته',
        enName : 'Advance Analyze',
        active :true ,
        iconColor : 'alert',
        level : 2,
    },
    {
        label: '2-6',
        perName : 'شناسایی موجودیت‌ها',
        enName : 'NER',
        active : false,
        iconColor : 'alert',
        level :2 
    },
    {
        label: '2-7',
        perName : 'کلمات کلیدی',
        enName : 'Keywords',
        active :false ,
        iconColor : 'alert',
        level : 2
    },
    {
        label: '2-8',
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
        label: '3-2',
        perName : 'مشابهت متنی',
        enName : 'Textual Similarity',
        active : false,
        iconColor : 'alert',
        level : 3
    },
    {
        label: '3-3',
        perName : 'مشابهت معنایی',
        enName : 'Semantic Similarity',
        active : false,
        iconColor : 'alert',
        level : 3
    },
    {
        label: '3-4',
        perName : 'موقعیت جغرافیایی',
        enName : 'Location Finder',
        active :true,
        iconColor : 'danger',
        level : 3
    },
    {
        label: '3-5',
        perName : 'استخراج اطلاعات مکانی',
        enName : 'Location Extraction',
        active : false,
        iconColor : 'danger',
        level : 3
    },
    {
        label: '3-6',
        perName : 'ارزیابی مکانی',
        enName : 'Geo Analysis',
        active : false,
        iconColor : 'danger',
        level : 3
    },
    {
        label: '3-7',
        perName : 'شناسایی اطلاعات مکانی',
        enName : 'Geo Detection',
        active : false,
        iconColor : 'danger',
        level : 3
    },
    {
        label: '4-1',
        perName: 'استخراج اطلاعات',
        enName : 'Info',
        active : true, 
        iconColor : 'success',
        level : 4
    },
    {
        label: '4-2',
        perName: 'کاربران',
        enName: 'UserName',
        active: false,
        iconColor: 'success',
        level: 4
    },
    {
        label: '4-3',
        perName: 'شماره تلفن ها',
        enName: 'Phoen Numbers',
        active: false,
        iconColor: 'success',
        level: 4
    },
    {
        label: '4-4',
        perName: 'شماره کارت ها',
        enName: 'Card Numbers',
        active: false,
        iconColor: 'success',
        level: 4
    },
    {
        label: '4-5',
        perName: 'لینک ها',
        enName: 'Links',
        active: false,
        iconColor: 'success',
        level: 4
    },
    {
        label: '4-6',
        perName: 'ایمیل ها',
        enName: 'Emails',
        active: false,
        iconColor: 'success',
        level: 4
    }
    ,
    {
        label: '4-7',
        perName: 'ایموجی ها',
        enName: 'Emojis',
        active: false,
        iconColor: 'success',
        level: 4
    }
    ,
    {
        label: '5-1',
        perName: 'تحلیل گراف',
        enName: 'Graph Analyze',
        active: true,
        iconColor: 'success',
        level: 5
    }

    ,
    {
        label: '5-2',
        perName: 'گره ها',
        enName: 'Nodes',
        active: false,
        iconColor: 'success',
        level: 5
    }
    ,
    {
        label: '5-3',
        perName: 'یال ها',
        enName: 'Edges',
        active: false,
        iconColor: 'success',
        level: 5
    },
    {
        label : '6-1',
        perName : 'واسط پیام',
        enName  : 'Message Broker',
        active : true,
        minData : 222,
        accData : 2256324,
        iconColor : "danger",
        level : 6,
        type : 'extendNode',
        DataIcon : Middle,
    },
    {
        label: '7-1',
        perName: 'انبار داده',
        enName: 'Message Broker',
        active: true,
        minData: 222,
        accData: 2256324,
        iconColor: "success",
        level: 7,
        DataIcon : Cube,
        type: 'extendNode',
    },
    {
        label: 'toppanelExpend',
        perName: 'سرویس های جمع آوری',
        enName: 'Collection services',
        active: false,
        level: 10,
        type: 'topicPanel',
    },
    {
        label: 'toppanel',
        perName: 'مرکز داده',
        enName: 'Data Center',
        active: false,
        level: 11,
        type: 'topicPanel',
    },

    {
        label: 'toppanel',
        perName: 'هوش مصنوعی',
        enName: 'AI',
        active: false,
        level: 12,
        type: 'topicPanel',
    },
    {
        label: 'toppanel',
        perName: 'آنالیز',
        enName: 'Analyze',
        active: false,
        level: 13,
        type: 'topicPanel',
    },
    {
        label: 'toppanel',
        perName: 'پردازش متن ها',
        enName: 'Text Proccess',
        active: false,
        level: 14,
        type: 'topicPanel',
    },
    {
        label: 'toppanel',
        perName: 'گراف',
        enName: 'Graph',
        active: false,
        level: 15,
        type: 'topicPanel',
    },
    {
        label: 'toppanel',
        perName: 'واسط پیام',
        enName: 'Message Broker',
        active: false,
        level: 16,
        type: 'topicPanel',
    },
    {
        label: 'toppanel',
        perName: 'انبار داده',
        enName: 'Data Waterhouse',
        active: false,
        level: 17,
        type: 'topicPanel',
    },
    {
        label: 'empBtnPln',
        perName: '',
        enName: '',
        active: true,
        level: 19,
        type: 'bPannelItem',
    },
    {
        label: 'buttomPanne',
        perName: 'قطعی سرویس مرکز جمع آوری داده',
        enName: '',
        active: true,
        level: 20,
        type: 'bPannelItem',
    },
    {
        label: '2p1',
        perName: 'اختلال در سرویس تحلیل پیشرفته',
        enName: '',
        active: true,
        level: 21,
        type: 'bPannelItem',
        iconColor: 'alert'
    },
    {
        label: '2p2',
        perName: 'قطعی سرویس تحلیل پیشرفته',
        enName: '',
        active: false,
        level: 21,
        type: 'bPannelItem',
    },
    {
        label: '3p1',
        perName: 'اختلال در سرویس شناسایی مشابهت',
        enName: '',
        active: true,
        level: 22,
        type: 'bPannelItem',
        iconColor: 'alert'
    },
    {
        label: '3p2',
        perName: 'قطعی سرویس موقعیت جغرافیایی',
        enName: '',
        active: false,
        level: 22,
        type: 'bPannelItem',
    },
    {
        label: 'buttomPanne',
        perName: 'اختلال در سرویس استخراج اطلاعات',
        enName: '',
        active: true,
        level: 23,
        type: 'bPannelItem',
    },
    {
        label: 'buttomPanne',
        perName: 'قطعی سرویس تحلیل گراف',
        enName: '',
        active: true,
        level: 24,
        type: 'bPannelItem',
    },
    {
        label: 'buttomPanne',
        perName: 'قطعی سرویس واسط پیام',
        enName: '',
        active: true,
        level: 25,
        type: 'bPannelItem',
    },
    {
        label: 'buttomPanne',
        perName: 'اختلال در سرویس انبار داده',
        enName: '',
        active: true,
        level: 26,
        type: 'bPannelItem',
        iconColor: 'alert'
    }

]