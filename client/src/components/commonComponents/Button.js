
export const Button = ({type,text,bgColor}) => {
  return <button type={type} className={`bg-[${bgColor}] text-[#FFFFFF] p-4 rounded-xl`}>{text.toUpperCase()}</button>
};


export const ButtonWithIcon = ({Icon,text,bgColor,IconClr}) =>{
  return <div className="flex justify-center items-center border border-[#1C1C1C] w-full rounded-xl">
    <Icon size={30} color={IconClr}/>
    <button type="button" className={`bg-[${bgColor}] text-[#1C1C1C] p-4 text-sm`}>{text.toUpperCase()}</button>
  </div>
}