import React from 'react';
import './App.css';
import FlowChart from './Pages/Flowchart/FlowChart';
import { ReactFlowProvider } from 'reactflow';
import TimePicker from './Pages/TimePicker/TimePicker';
import TimeSelect from './Pages/TimePicker/TimeSelect';
import PayamItem from './Pages/Payesh/Components/Payam/PayamItemList';
import PayamItemGrid from './Pages/Payesh/Components/Payam/PayamItemGrid';

const keywords = ['آزادی', 'تهران', 'تهران', 'ایران', 'مجلس', 'رئیسی'];
const feel = true;
const emotions = ['شادی و خوشحالی', 'ناراحتی', 'توهین'];
const behaviour = ['سیاسی', 'اجتماعی', 'اقتصادی'];
const content = ['میزان تاثیرگذاری', 'جغرافیای فعالیت', 'نوع محتوا', 'نوع فعالیت', 'گرایش سیاسی'];
const ner = ['ابزارها', 'صنعت', 'نرم افزار', 'متخصصان', 'تکنولوژی'];
function App() {
  return (
    <div className="App bg-slate-300 py-5 px-10 w-[1600px] m-auto grid xl:grid-cols-5 lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-2 h-[800px]">
      <PayamItemGrid 
        topic='روزنامه جمهوری اسلامی'
        avatart=""
        body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد..."
        likes={12.56}
        forwards={12.56}
        comments={12.56}
        social='Telegram'
        type='کانال'
        channelId="jepress.ir"
        pictures={['1', '2', '3']}
        date={new Date()}
        keywords={keywords}
        ner={ner}
        content={content}
        behaviour={behaviour}
        emotions={emotions}
        feel={feel}
        reference
        madeDate={new Date()}
        watchFull
        bolton />
      <PayamItemGrid
        topic='روزنامه جمهوری اسلامی'
        avatart=""
        body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد..."
        likes={12.56}
        forwards={12.56}
        comments={12.56}
        social='Telegram'
        type='کانال'
        channelId="jepress.ir"
        pictures={['1', '2', '3']}
        date={new Date()}
        keywords={keywords}
        ner={ner}
        content={content}
        behaviour={behaviour}
        emotions={emotions}
        feel={feel}
        reference
        madeDate={new Date()}
        watchFull
        bolton />
      <PayamItemGrid
        topic='روزنامه جمهوری اسلامی'
        avatart=""
        body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد..."
        likes={12.56}
        forwards={12.56}
        comments={12.56}
        social='Telegram'
        type='کانال'
        channelId="jepress.ir"
        pictures={['1', '2', '3']}
        date={new Date()}
        keywords={keywords}
        ner={ner}
        content={content}
        behaviour={behaviour}
        emotions={emotions}
        feel={feel}
        reference
        madeDate={new Date()}
        watchFull
        bolton />
      <PayamItemGrid
        topic='روزنامه جمهوری اسلامی'
        avatart=""
        body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد..."
        likes={12.56}
        forwards={12.56}
        comments={12.56}
        social='Telegram'
        type='کانال'
        channelId="jepress.ir"
        pictures={['1', '2', '3']}
        date={new Date()}
        keywords={keywords}
        ner={ner}
        content={content}
        behaviour={behaviour}
        emotions={emotions}
        feel={feel}
        reference
        madeDate={new Date()}
        watchFull
        bolton />
      <PayamItemGrid
        topic='روزنامه جمهوری اسلامی'
        avatart=""
        body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد..."
        likes={12.56}
        forwards={12.56}
        comments={12.56}
        social='Telegram'
        type='کانال'
        channelId="jepress.ir"
        pictures={['1', '2', '3']}
        date={new Date()}
        keywords={keywords}
        ner={ner}
        content={content}
        behaviour={behaviour}
        emotions={emotions}
        feel={feel}
        reference
        madeDate={new Date()}
        watchFull
        bolton />
    </div>
  );
}

export default App;
