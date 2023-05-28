import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import logo from './sisdy_logo.svg';
import config from 'config';
import { activeItem } from 'store/reducers/menu';

const LogoSection = ({ sx, to }) => {
  const { defaultId } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      component={Link}
      onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
      to={!to ? config.defaultPath : to}
      sx={sx}
    >
      <img src={logo} alt="Mantis" width="100" />
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
