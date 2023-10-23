import { StyledTarjeta } from './styles';

const Tarjeta = ({ color, text }) => {
	return <StyledTarjeta color={color}>{text}</StyledTarjeta>;
};
export default Tarjeta;
