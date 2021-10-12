import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputBox.module.scss';
import { Input } from '@mui/material';

export default function InputBox(props) {
  function getBorder() {
    var inputStyle = '';
    inputStyle = ``;
    if(props.value === '' && !(props.focused)) {
      inputStyle = `${styles.inputBorder} ${styles.fadeIn}`;
    } else {
      inputStyle = `${styles.inputBorder} ${styles.fadeOut}`;
    }
    return inputStyle;
  }

  return(
    <div className={styles.InputBox} data-testid="InputBox">
      <div className={getBorder()}/>
      <Input
        className={styles.Input}
        inputProps={{ 
          style: { 
            textAlign: 'center'
          }}}
        disableUnderline={true}
        fullWidth={true}
        sx={{
          fontSize: `clamp(48px,7vw,120px)`
        }}             
        value={props.value} 
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  )
}

InputBox.propTypes = {
  value: PropTypes.string,
  focused: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

InputBox.defaultProps = {};
