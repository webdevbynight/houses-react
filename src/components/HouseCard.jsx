import PropTypes from 'prop-types';

const HouseCard = ({ name, desc, img, available }) =>
{
    const template =
    (
        <section className="card">
            <h2>{name}</h2>
            {img && (<img src={img} alt={`A photo of ${name}`} />)}
            <p>{desc}</p>
            {
                available ?
                    (<p className="available">You can rent it!</p>)
                :
                    (<p>This house is not available to rent.</p>)
            }
        </section>
    );
    return template;
};

HouseCard.propTypes =
{
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string,
    available: PropTypes.bool.isRequired
};

export default HouseCard;