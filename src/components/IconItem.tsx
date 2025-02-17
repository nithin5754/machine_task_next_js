import { LucideProps } from "lucide-react";
import { FC, ForwardRefExoticComponent, RefAttributes } from "react";


const IconItem:FC<{Icon:ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,color:string,animation:string}> = ({ Icon, color, animation }) => {
  return (
    <div className={`flex justify-center ${animation}`}>
      <div 
        className="w-16 h-16 rounded-lg flex items-center justify-center transition-transform hover:scale-110"
        style={{ backgroundColor: color }}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};


export default IconItem