import '../resoucers/styles/slides.css'

const Slides = ({ image, isActive }) => {
    const classNames = `slide ${isActive ? 'active' : ''}`;
    return(
        <div className={classNames}>
            <img src={image} alt="Slide" />
        </div>
    )
}

export default Slides;