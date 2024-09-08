import EducationCard from './EducationCard.jsx'
import MITLogo from '../assets/logos/mit.png'

function Educations() {
    return (
        <>
            <EducationCard name={"Massachusetts Institute of Technology"} firstLine={"B.S. Computer Science and Engineering"} secondLine={"Expected Graduation: 2026"} imageSrc={MITLogo} />
        </>
    );
}

export default Educations