import '../resoucers/styles/header.css';
import logoIcon from '../resoucers/icons/logo.png';

const Header = ({ ref1, ref2, ref3 }) => {

   
    const scrollToTarget = (targetRef) => {
        if (targetRef && targetRef.current) {
          const element = targetRef.current;
          const offset = 100;
          window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth',
          });
        }
      };

  const upBar = () => {
    return (
      <div className="upBar">
        <div id="talkUs">
          <span>FALE CONOSCO</span>
          <span>(21) 91234-5678</span>
        </div>
        <div id="infoCall">
          <span>Atendimento</span>
          <span>Seg à sex das 7h às 17h</span>
        </div>
      </div>
    );
  };

  const optionHead = () => {
    return (
      <div className="optionHead">
        <div id="logo">
          <img src={logoIcon} alt="" />
        </div>
        <div id="navInfo">
          <span onClick={() => scrollToTarget(ref1)}>INÍCIO</span>
          <span >SOBRE A 021</span>
          <span onClick={() => scrollToTarget(ref2)}>SERVIÇOS</span>
          <span onClick={() => scrollToTarget(ref3)}>CONTATO</span>
        </div>
      </div>
    );
  }; 

  return (
    <div className="header">
      {upBar()}
      {optionHead()}
    </div>
  );
};

export default Header;
