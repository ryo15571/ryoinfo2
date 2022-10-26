import React from "react";
import ReactTypingEffect from "react-typing-effect";

const AboutMe = () => {
    return (
        <div>
            <div className='text-center font-bold text-3xl text-gray-700 pt-28 '>
<ReactTypingEffect text={["5 สิ่งเกี่ยวกับผม","5 Facts About Me"]} speed={80} eraseDelay={100} className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-gray-700" />
</div>
        <div className="flex flex-wrap justify-center">
            <div className="w-6/12 sm:w-4/12 px-4 py-12">
        <img  src="./ryojung.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
      </div>
      </div>
        <div className="font-bold text-xl pt-10 mx-20">
            แนะนำตัวแบบสั้น ๆ
        </div>
        <div className="mx-48 py-5">
            - สวัสดีครับ ผมชื่อ เรียว นามสกุล เอี่ยมเรไร อายุ 23 ปี จบการศึกษาระดับปริญญาตรีจาก คณะศึกษาศาสตร์ สาขาพลศึกษา มหาวิทยาลัยเกษตรศาสตร์
        </div>
        <div className="font-bold text-xl pt-10 mx-20">
            เป้าหมายในอนาคต
        </div>
        <div className="mx-48 py-5">
            - ศึกษาต่อในระดับปริญญาโท ที่ Oregon State
        </div>
        <div className="font-bold text-xl pt-10 mx-20">
            ความสามารถพิเศษ
        </div>
        <div className="mx-48 py-5">
            - เทควันโด และกีฬาชนิดต่าง ๆ
        </div>
        <div className="font-bold text-xl pt-10 mx-20">
            สายงานที่สนใจ
        </div>
        <div className="mx-48 py-5">
            - สื่อจำพวกกีฬา นักวิชาการ และครูพลศึกษา
        </div>
        <div className="font-bold text-xl pt-10 mx-20">
            สิ่งที่อยากบอกเพิ่มเติม
        </div>
        <div className="mx-48 py-5">
            - คนที่จะชนะในท้ายที่สุด คือคนที่ไม่หยุดอยู่กับที่
        </div>
        
        </div>
    );
  };
  export default AboutMe;
