import Image from "next/image"
import Facebook from '../../public/images/facebook.svg';

const LogoSlider = () => {
  return (
    <section className="logos">
      <div className="w-full text-slate-900 mx-auto px-4 md:px-6 py-8">
      <div className="text-center">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex text-slate-900 text-3xl items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                    <Image  src={Facebook} alt="Facebook logo" width={120} height={20} />
                </li>
                <li>
                    <Image src="../../public/images/disney.svg" alt="Disney" width={120} height={20} className="w-full h-auto"  />
                </li>
                <li>
                    <Image src="../../public/images/airbnb.svg" alt="Airbnb" width={120} height={20} className="w-full h-auto" />
                </li>
                <li>
                    <Image src="../../public/images/apple.svg" alt="Apple" width={120} height={20} className="w-full h-auto" />
                </li>
                <li>
                    <Image src="../../public/images/spark.svg" alt="Spark" width={120} height={20} className="w-full h-auto" />
                </li>
                <li>
                    <Image src="../../public/images/samsung.svg" alt="Samsung" width={120} height={20} className="w-full h-auto" />
                </li>
                <li>
                    <Image src="../../public/images/quora.svg" alt="Quora" width={120} height={20} className="w-full h-auto" />
                </li>
                <li>
                    <Image src="../public/images/sass.svg" alt="Sass" width={120} height={40} className="w-full h-auto" />
                </li>
            </ul>                
        </div>
      </div>
    </div>
      </section>
  )
}

export default LogoSlider