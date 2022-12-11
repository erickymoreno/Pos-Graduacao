import styles from './Button.module.css'
import classNames from 'classnames';
export default function button({children, ...props}) {
  
  const classes = classNames({
    [styles.button]:true,
    [styles.danger]: props.danger,
    [styles.success]: props.success,
    [styles.warning]: props.warning
  })

  return (
  <button className={classes}>
    {children}
  </button>
  );
}