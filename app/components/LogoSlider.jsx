import Image from "next/image"
import Facebook from '../../public/images/facebook.svg';
import Disney from '../../public/images/disney.svg';
import Airbnb from '../../public/images/airbnb.svg';
import Apple from '../../public/images/apple.svg';
import Spark from '../../public/images/spark.svg';
import Samsung from '../../public/images/samsung.svg';
import Quora from '../../public/images/quora.svg';
import Saas from '../../public/images/sass.svg';

const LogoSlider = () => {
  return (
    <section className="logos">
      <div className="w-full bg-slate-900  mx-auto px-4 md:px-6 py-8">
      <div className="text-center">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex text-3xl items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                    <Image  src={Facebook} alt="Facebook logo" width={120} height={20} />
                </li>
                <li>
                    <Image src={Disney} alt="Disney" width={120} height={20} className="w-full h-auto"  />
                </li>
                <li>
                    <Image src={Airbnb} alt="Airbnb" width={120} height={20} className="w-full h-auto" />
                </li>
                <li>
                    <Image src={Apple} alt="Apple" width={120} height={20} className="w-full h-auto" />
                </li>
                <li>
                    <Image src={Spark} alt="Spark" width={120} height={20} className="w-full h-auto" />
                </li>
                <li>
                    <Image src={Samsung} alt="Samsung" width={120} height={20} className="w-full h-auto" />
                </li>
                <li>
                    <Image src={Quora} alt="Quora" width={120} height={20} className="w-full h-auto" />
                </li>
                <li>
                    <Image src={Saas} alt="Sass" width={120} height={40} className="w-full h-auto" />
                </li>
            </ul>                
        </div>
      </div>
    </div>
      </section>
  )
}

export default LogoSlider