import { CustomNodeProps } from "./Components/CustomNode";
import { Edge, Node } from "reactflow";
const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';
export const initialNodes:Node[] = [
  {
    id: '1-1',
    data: { label: '1',
        enName :'Data Source' ,
        active:true, 
        perName : 'مخزن داده',
        iconColor : 'success'},
    position,
  },
  {
    id: '2-1',
    data: { label: '2',
    handleColor:'#FB1A43',
    enName :'AI' ,
    active:true, 
    perName : 'هوش مصنوعی',
    iconColor : 'danger'
     },
    position,
  },
  {
    id: '2-2',
    data: { 
        label: '2',
        enName :'Sentiment' ,
        active:false, 
        perName : 'تحلیل احساسات',
        iconColor : 'alarm' },
    position,
  },
  {
    id: '2-3',
    data: { 
        label: '2',
        enName :'Behavior' ,
        active:false, 
        perName : 'تحلیل رفتاری',
        iconColor : 'alarm' },
    position,
  },
  {
    id: '2-4',
    data: { 
        label: '2',
        enName :'Topics' ,
        active:false, 
        perName : 'تحلیل محتوایی',
        iconColor : 'success' },
    position,
  },
  {
    id: '3-1',
    data: { 
        label: '3',
        enName :'Advanced Analyze' ,
        active:true, 
        perName : 'تحلیل پیشرفته',
        iconColor : 'success'
     },
    position,
  },
  {
    id: '3-2',
    data: { label: '3', 
        enName :'NER' ,
        active:false, 
        perName : 'شناسایی موجودیت‌ها',
        iconColor : 'success'
        },
    position,
  },
  {
    id: '3-3',
    data: { 
        label: '3',
        enName :'Keywords' ,
        active:false, 
        perName : 'کلمات کلیدی',
        iconColor : 'success'
     },
    position,
  },
  {
    id: '3-4',
    data: { label: '3' , 
        enName :'Hashtags' ,
        active:false, 
        perName : 'هشتگ‌ها',
        iconColor : 'success'},
    position,
  },
  {
    id: '4-1',
    data: { 
        label: '4' ,
        enName :'Location Finder' ,
        active:true, 
        perName : 'موقعیت جغرافیایی',
        iconColor : 'success'},
    position,
  },
  { id: '4-2', 
    data: { 
      label:'4',
      enName :'Finder' ,
      active:false, 
      perName : 'شناسایی موقعیت جغرافیایی‌',
      iconColor : 'success'
      },
      position, 
    },
   { id: '4-3', 
    position, 
    data: { 
      label:'4',
      enName :'Minhash' ,
      active:true, 
      perName : 'شناسایی مشابهت',
      iconColor : 'success'
      }
    },
    { 
    id: '4-4', 
    position, 
    type: 'activeNode',
    data: { 
      label:'4',
      enName :'Minhash' ,
      active:false, 
      perName : 'سرویس مشابهت متن‌ها',
      iconColor : 'success'
      }
    },
    { 
        id: '5-1', 
        position, 
        type: 'activeNode',
        data: { 
          label:'5',
          enName :'Meta Data' ,
          active:true, 
          perName : 'متا دیتا',
          iconColor : 'alarm'
          }
    },    
    { 
        id: '5-2', 
        position, 
        type: 'activeNode',
        data: { 
          label:'5',
          enName :'Card Number' ,
          active:false, 
          perName : 'شماره کارت‌ها',
          iconColor : 'alarm'
        }
    },
    { 
        id: '5-3', 
        position, 
        type: 'activeNode',
        data: { 
          label:'5',
          enName :'Emails' ,
          active:false, 
          perName : 'ایمیل‌ها',
          iconColor : 'alarm'
        }
    },
    { 
        id: '5-4', 
        position, 
        type: 'activeNode',
        data: { 
          label:'5',
          enName :'Emojis' ,
          active:false, 
          perName : 'ایموجی‌ها',
          iconColor : 'alarm'
        }
    },
    {
      id: '5-5',
      data: { 
          label: '5' ,
          enName :' Info' ,
          active:true, 
          perName : 'استخراج اطلاعات',
          iconColor : 'danger'},
      position,
    },
    { id: '5-6', 
      data: { 
        label:'5',
        enName :'UserName' ,
        active:false, 
        perName : 'کاربران',
        iconColor : 'danger'
        },
        position, 
      },
     { id: '5-7', 
      position, 
      data: { 
        label:'5',
        enName :'Phones Number' ,
        active:false, 
        perName : 'شماره تلفن‌ها',
        iconColor : 'danger'
        }
      },
      { 
      id: '5-8', 
      position, 
      data: { 
        label:'5',
        enName :'Links' ,
        active:false, 
        perName : 'لینک‌ها',
        iconColor : 'danger'
        }
      },
      { id: '6-1', 
        data: { 
          label:'6',
          enName :'Graph Analyze' ,
          active:true, 
          perName : 'تحلیل گراف',
          iconColor : 'success'
          },
          position, 
        },
       { id: '6-2', 
        position, 
        data: { 
          label:'6',
          enName :'Nodes' ,
          active:false, 
          perName : 'گره‌ها',
          iconColor : 'success'
          }
        },
        { 
        id: '6-3', 
        position, 
        type: 'Edges',
        data: { 
          label:'6',
          enName :'Minhash' ,
          active:false, 
          perName : 'یال‌ها',
          iconColor : 'success'
          }
        },
];

export const initialEdges:Edge[] = [
  { id: 'e12', source: '1-1',sourceHandle:'r',target: '2-1', type: edgeType,animated:true,style:{stroke:'#FB1A43',strokeWidth:'2px'}},
  { id: '2-2-1', source: '2-2', target: '2-1', type: edgeType,style:{stroke:'#ED6011',strokeWidth:'2px'}}, 
  { id: '2-3-1', source: '2-3', target: '2-1', type: edgeType,style:{stroke:'#ED6011',strokeWidth:'2px'}}, 
  { id: '2-4-1', source: '2-4', target: '2-3', type: edgeType,style:{stroke:'#2D3356',strokeWidth:'2px'}}, 
  { id: 'e23', source: '2-1', target: '3-1',sourceHandle:'r',animated:true, type: edgeType,style:{stroke:'#626999',strokeWidth:'2px'}}, 
  { id: '3-2-1', source: '3-2', target: '3-1', type: edgeType,style:{stroke:'#2D3356',strokeWidth:'2px'}}, 
  { id: '3-3-1', source: '3-3', target: '3-1', type: edgeType,style:{stroke:'#2D3356',strokeWidth:'2px'}}, 
  { id: '3-4-1', source: '3-4', target: '3-1', type: edgeType,style:{stroke:'#2D3356',strokeWidth:'2px'}}, 
  { id: '4-2-1', source: '4-2', target: '4-1', type: edgeType,style:{stroke:'#2D3356',strokeWidth:'2px'}}, 
  { id: 'e34', source: '3-1', target: '4-1',sourceHandle:'r',animated:true, type: edgeType,style:{stroke:'#626999',strokeWidth:'2px'}}, 
  { id: 'e343', source: '3-1', target: '4-3',sourceHandle:'r',animated:true, type: edgeType,style:{stroke:'#626999',strokeWidth:'2px'}}, 
  { id: '4-4-3', source: '4-4', target: '4-3', type: edgeType,style:{stroke:'#2D3356',strokeWidth:'2px'}}, 
  { id: 'e45', source: '4-1', target: '5-1',sourceHandle:'r',animated:true, type: edgeType,style:{stroke:'#626999',strokeWidth:'2px'}}, 
  { id: 'e455', source: '4-1',sourceHandle:'r',target: '5-5', type: edgeType,animated:true,style:{stroke:'#FB1A43',strokeWidth:'2px'}},
  { id: 'e4-3-5', source: '4-3', target: '5-1',sourceHandle:'r',animated:true, type: edgeType,style:{stroke:'#626999',strokeWidth:'2px'}}, 
  { id: 'e4-3-5-5', source: '4-3',sourceHandle:'r',target: '5-5', type: edgeType,animated:true,style:{stroke:'#FB1A43',strokeWidth:'2px'}},
  
  { id: '5-2-1', source: '5-2', target: '5-1', type: edgeType,style:{stroke:'#2D3356',strokeWidth:'2px'}}, 
  { id: '5-3-1', source: '5-3', target: '5-1', type: edgeType,style:{stroke:'#ED6011',strokeWidth:'2px'}}, 
  { id: '5-4-1', source: '5-4', target: '5-1', type: edgeType,style:{stroke:'#ED6011',strokeWidth:'2px'}}, 
  { id: '5-6-5', source: '5-6', target: '5-5', type: edgeType,style:{stroke:'#FB1A43',strokeWidth:'2px'}}, 
  { id: '5-7-5', source: '5-7', target: '5-5', type: edgeType,style:{stroke:'#FB1A43',strokeWidth:'2px'}}, 
  { id: '5-8-5', source: '5-8', target: '5-5', type: edgeType,style:{stroke:'#FB1A43',strokeWidth:'2px'}}, 
  
  { id: 'e56', source: '5-1', target: '6-1',sourceHandle:'r',animated:true, type: edgeType,style:{stroke:'#626999',strokeWidth:'2px'}}, 
  { id: 'e5-5-6', source: '5-5',sourceHandle:'r',target: '6-1', type: edgeType,animated:true,style:{stroke:'#626999',strokeWidth:'2px'}},
 
  { id: '6-2-1', source: '6-2', target: '6-1', type: edgeType,style:{stroke:'#2D3356',strokeWidth:'2px'}}, 
  { id: '6-3-1', source: '6-3', target: '6-1', type: edgeType,style:{stroke:'#2D3356',strokeWidth:'2px'}}, 
  
];
    