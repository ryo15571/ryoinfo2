import ReactTypingEffect from "react-typing-effect"

const PreTeaching = () => {
    return (
        <div>
        <div className='text-center font-bold text-3xl text-gray-700 pt-28'>
        <ReactTypingEffect text={["ฝึกสอน","Practice in Teaching"]} speed={80} eraseDelay={100} className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-gray-700" />
        </div>
        <div className="grid grid-cols-2 py-16">
        <img className="h-96 w-96 mx-36" src="./image/รูปรวมหมวดสุขศึกษาและพลศึกษา.jpg" />
        <img className="h-96 w-96 mx-36" src="./image/ฝึกสอน.jpg" />
        </div>
        </div>
    )
}
export default PreTeaching