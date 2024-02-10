import Image from 'next/image';
import { StaticImageData } from 'next/image';

type PersonType = {
  title: string;
  desc: string;
  image: string | StaticImageData;
};

const BioCard = ({ title, desc, image }: PersonType) => {
  return (
    <div className='flex flex-col items-center gap-8 lg:flex-row relative'>
      {image && (
        <Image
          className='h-48 lg:w-48 lg:h-48 rounded-full shadow-md'
          src={image}
          alt={title}
          width={192}
          height={192}
        />
      )}
      <div className='font-body text-neutral-900'>
        <h4 className='text-xl font-bold md:text-2xl'>{title}</h4>
        <p className='max-w-6xl pt-4 text-base leading-loose'>{desc}</p>
      </div>
    </div>
  );
};

export default BioCard;
