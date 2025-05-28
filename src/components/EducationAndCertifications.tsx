import { studies } from '@/app/constants';
import EducationAndCertificationItem from './EducationAndCertificationItem';

const EducationAndCertifications = () => (
  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
    {studies.map((study) => (
      <EducationAndCertificationItem
        key={study.index}
        imgSrc={study.logo}
        index={study.index}
        date={study.date}
        description={study.description}
        establishment={study.school}
      />
    ))}
  </div>
);

export default EducationAndCertifications;
